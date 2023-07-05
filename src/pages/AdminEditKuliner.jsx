import FormAdminEditKuliner from "../components/FormAdminEditKuliner"
import "./Admin.css"
import { Helmet } from "react-helmet"

function AdminEditKuliner() {
  return (
    <>
        <Helmet>
            <title>Edit Kuliner - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminEditKuliner/>
    </>
  )
}

export default AdminEditKuliner