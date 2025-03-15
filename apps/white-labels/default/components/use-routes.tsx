import { Facility_FullFragment, Product_Group_MinimalFragment, Product_List_ItemFragment } from '@/data-access'
import { useRouter } from 'next/router'

export function useRoutes() {
  const { locale } = useRouter()

  const main = {
    home: () => `/${locale}`,
    about: () => `/${locale}/about`,
    contact: () => `/${locale}/contact`,
    facilities: () => `/${locale}/we-offer`,
  }

  const checkout = {
    confirm: () => `/${locale}/checkout/confirm`,
    error: () => `/${locale}/checkout/error`,
    thankYou: () => `/${locale}/checkout/thank-you`,
  }

  const inventory = {
    productDetails: (product: Pick<Product_List_ItemFragment, 'slug'>) => `/${locale}/products/${product.slug.value}`,
    productGroupDetails: (group: Pick<Product_Group_MinimalFragment, 'slug'>) => `/${locale}/product-groups/${group.slug.value}`,
    productList: () => `/${locale}/products`,
    facilityDetails: (facillity: Pick<Facility_FullFragment, 'slug'>) => `/${locale}/we-offer/${facillity.slug.value}`,
  }

  return {
    ...main,
    ...checkout,
    ...inventory
  }
}
