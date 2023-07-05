import "./Admin.css"
import { Helmet } from "react-helmet"
import FormAdminEditWisata from "../components/FormAdminEditWisata"

function AdminEditWisata() {
  return (
    <>
        <Helmet>
            <title>Edit Objek Wisata - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminEditWisata/>
    </>
  )
}

export default AdminEditWisata