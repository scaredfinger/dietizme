import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faUser, 
  faSignOutAlt, 
  faBell, 
  faMoon, 
  faSun,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import SideMenu from './side-menu';
import { cn } from '@/lib/utils';

interface SideMenuLayoutProps {
  children: React.ReactNode;
}

export default function SideMenuLayout({ children }: SideMenuLayoutProps) {
  const { logout } = useAuth();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You would typically update a class on the html or body element here
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  // Add some styles for tooltips
  const tooltipStyles = `
    .tooltip-container {
      position: relative;
    }
    .tooltip-container .tooltip {
      visibility: hidden;
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.3s;
      z-index: 100;
      margin-left: 10px;
    }
    .tooltip-container:hover .tooltip {
      visibility: visible;
      opacity: 1;
    }
    .tooltip:before {
      content: '';
      position: absolute;
      top: 50%;
      right: 100%;
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent rgba(0, 0, 0, 0.8) transparent transparent;
    }
  `;

  return (
    <div className={cn(
      "min-h-screen flex bg-gray-50 dark:bg-gray-900 transition-colors duration-200",
      darkMode ? 'dark' : ''
    )}>
      <style>{tooltipStyles}</style>

      {/* Sidebar - Mobile */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 transition-transform duration-300 transform lg:hidden",
        mobileOpen ? "translate-x-0" : "-translate-x-full",
        "bg-white dark:bg-gray-900 shadow-lg"
      )}>
        <SideMenu isCollapsed={false} />
      </div>

      {/* Overlay for mobile menu */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Sidebar - Desktop */}
      <div className={cn(
        "hidden lg:block transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}>
        <div className="relative h-full">
          <SideMenu isCollapsed={collapsed} />
          
          {/* Collapse toggle button */}
          <button 
            onClick={toggleCollapsed}
            className="absolute -right-3 top-20 bg-white dark:bg-gray-800 p-1.5 rounded-full shadow-md border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none z-10"
          >
            <FontAwesomeIcon icon={collapsed ? faChevronRight : faChevronLeft} className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col w-full">
        <header className="bg-white dark:bg-gray-800 shadow-sm z-30">
          <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={toggleMobileMenu} 
                className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none lg:hidden"
              >
                <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
              </button>
              <h1 className="ml-4 text-xl font-semibold text-gray-800 dark:text-white">
                New Owners
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none">
                <FontAwesomeIcon icon={faBell} className="h-5 w-5" />
              </button>
              <button 
                onClick={toggleDarkMode}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
              >
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="h-5 w-5" />
              </button>
              <div className="relative">
                <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none">
                  <span className="mr-2 text-sm hidden sm:block">Admin User</span>
                  <FontAwesomeIcon icon={faUser} className="h-5 w-5" />
                </button>
              </div>
              <Button 
                variant="ghost" 
                onClick={handleLogout} 
                className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="h-5 w-5" />
                <span className="ml-2 hidden sm:block">Logout</span>
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        <footer className="bg-white dark:bg-gray-800 shadow-inner p-4 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} New Owners Platform - All rights reserved</p>
        </footer>
      </div>
    </div>
  );
}
