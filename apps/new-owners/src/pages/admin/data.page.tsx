import AdminLayout from "@/components/layouts/admin-layout"
import { useGet_Product_Groups_ListQuery } from "@/data-access/generated"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"

const ProductGroups: React.FC = () => {
  const { data, loading } = useGet_Product_Groups_ListQuery()
  const { t } = useTranslation()
  const { locale, push } = useRouter()

  return (
    <AdminLayout>
      <>
      <pre>
        { JSON.stringify(data) }
      </pre>
      </>
    </AdminLayout>
  )
}

export default ProductGroups