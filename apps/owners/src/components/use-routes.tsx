import { useRouter } from 'next/router'

export function useRoutes() {
  const { locale } = useRouter()

  const admin = {
    home: () => `/${locale}/admin`,
    // home: () => `/${locale}`,
    // about: () => `/${locale}/about`,
    // contact: () => `/${locale}/contact`,
    // facilities: () => `/${locale}/facilities`,
  }

  const inventoryPrefix = `${locale}/admin/inventory`

  const inventory = {
    productList: () => `/${inventoryPrefix}/products`,
    productDetails: (id: string) => `/${inventoryPrefix}/products/${id}`,
    productPrices: (id: string) => `/${inventoryPrefix}/products/${id}/prices`,
    productFeatures: (id: string) => `/${inventoryPrefix}/products/${id}/features`,

    productGroupDetails: (id: string) => `/${inventoryPrefix}/product-groups/${id}`,
    // productList: () => `/${locale}/products`,
    supplementList: () => `//${inventoryPrefix}/supplements`,
    supplementEdit: (id: string) => `//${inventoryPrefix}/supplements/${id}`,
  }

  const organization = {
    features: () => `/${locale}/admin/organization/features`,
  }

  return {
    ...admin,
    ...inventory,
    ...organization,
  }
}