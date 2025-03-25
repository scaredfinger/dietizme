import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faUsers, 
  faCalendarAlt, 
  faUtensils, 
  faBoxOpen, 
  faCog, 
  faAngleDown, 
  faAngleRight,
  faTachometerAlt,
  faClipboardList,
  faUserCog,
  faStore
} from '@fortawesome/free-solid-svg-icons';
import * as Collapsible from '@radix-ui/react-collapsible';
import { cn } from '@/lib/utils';

export type MenuItemType = {
  id: string;
  label: string;
  icon?: any;
  href?: string;
  children?: MenuItemType[];
};

export const MENU_ITEMS: MenuItemType[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: faTachometerAlt,
    href: '/admin',
  },
  {
    id: 'customers',
    label: 'Customers',
    icon: faUsers,
    children: [
      {
        id: 'all-customers',
        label: 'All Customers',
        href: '/admin/customers',
      },
      {
        id: 'customer-groups',
        label: 'Customer Groups',
        href: '/admin/customers/groups',
      },
    ],
  },
  {
    id: 'reservations',
    label: 'Reservations',
    icon: faCalendarAlt,
    children: [
      {
        id: 'bookings',
        label: 'Bookings',
        href: '/admin/reservations/bookings',
      },
      {
        id: 'calendar',
        label: 'Calendar View',
        href: '/admin/reservations/calendar',
      },
    ],
  },
  {
    id: 'menu',
    label: 'Menu',
    icon: faUtensils,
    children: [
      {
        id: 'menu-items',
        label: 'Menu Items',
        href: '/admin/menu/items',
      },
      {
        id: 'categories',
        label: 'Categories',
        href: '/admin/menu/categories',
      },
    ],
  },
  {
    id: 'inventory',
    label: 'Inventory',
    icon: faBoxOpen,
    children: [
      {
        id: 'products',
        label: 'Products',
        href: '/admin/inventory/products',
      },
      {
        id: 'suppliers',
        label: 'Suppliers',
        href: '/admin/inventory/suppliers',
      },
    ],
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: faChartLine,
    href: '/admin/reports',
  },
  {
    id: 'outlets',
    label: 'Outlets',
    icon: faStore,
    href: '/admin/outlets',
  },
  {
    id: 'orders',
    label: 'Orders',
    icon: faClipboardList,
    href: '/admin/orders',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: faCog,
    children: [
      {
        id: 'general',
        label: 'General',
        href: '/admin/settings/general',
      },
      {
        id: 'users',
        label: 'Users & Permissions',
        icon: faUserCog,
        href: '/admin/settings/users',
      },
    ],
  },
];

interface MenuItemProps {
  item: MenuItemType;
  level?: number;
  isOpen?: Record<string, boolean>;
  toggleOpen?: (id: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, level = 0, isOpen = {}, toggleOpen = () => {} }) => {
  const router = useRouter();
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.href ? router.pathname === item.href : false;
  const isChildActive = item.children?.some(child => child.href && router.pathname === child.href);
  
  const toggleItem = () => {
    if (hasChildren) {
      toggleOpen(item.id);
    } else if (item.href) {
      router.push(item.href);
    }
  };

  return (
    <li className="w-full">
      {hasChildren ? (
        <Collapsible.Root open={isOpen[item.id] || isChildActive} onOpenChange={() => toggleOpen(item.id)}>
          <Collapsible.Trigger asChild>
            <button
              className={cn(
                "flex items-center w-full p-2 text-left rounded-md",
                "hover:bg-gray-200 dark:hover:bg-gray-700",
                (isOpen[item.id] || isChildActive) ? "bg-gray-100 dark:bg-gray-800" : "",
                "transition-colors duration-150",
                { "pl-4": level === 0, "pl-8": level === 1, "pl-12": level === 2 }
              )}
            >
              {item.icon && (
                <FontAwesomeIcon 
                  icon={item.icon} 
                  className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
                />
              )}
              <span className="flex-grow text-sm">{item.label}</span>
              <FontAwesomeIcon 
                icon={isOpen[item.id] ? faAngleDown : faAngleRight} 
                className="w-3 h-3 text-gray-500 dark:text-gray-400"
              />
            </button>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <ul className="pl-2 mt-1">
              {item.children?.map((child) => (
                <MenuItem
                  key={child.id}
                  item={child}
                  level={level + 1}
                  isOpen={isOpen}
                  toggleOpen={toggleOpen}
                />
              ))}
            </ul>
          </Collapsible.Content>
        </Collapsible.Root>
      ) : (
        <Link
          href={item.href || '#'}
          className={cn(
            "flex items-center w-full p-2 rounded-md",
            "hover:bg-gray-200 dark:hover:bg-gray-700",
            isActive ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300",
            "transition-colors duration-150",
            { "pl-4": level === 0, "pl-8": level === 1, "pl-12": level === 2 }
          )}
        >
          {item.icon && (
            <FontAwesomeIcon 
              icon={item.icon} 
              className={cn(
                "mr-2 w-4 h-4",
                isActive ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400" 
              )}
            />
          )}
          <span className="text-sm">{item.label}</span>
        </Link>
      )}
    </li>
  );
};

interface SideMenuProps {
  className?: string;
}

const SideMenu: React.FC<SideMenuProps> = ({ className }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleOpen = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className={cn("w-64 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800", className)}>
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Admin Panel</h2>
      </div>
      <nav className="py-4">
        <ul className="space-y-1">
          {MENU_ITEMS.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              isOpen={openItems}
              toggleOpen={toggleOpen}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
