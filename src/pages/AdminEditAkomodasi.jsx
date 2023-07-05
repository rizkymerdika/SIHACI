import "./Admin.css"
import { Helmet } from "react-helmet"
import FormAdminEditAkomodasi from "../components/FormAdminEditAkomodasi"

function AdminEditAkomodasi() {
  return (
    <>
        <Helmet>
            <title>Edit Objek Wisata - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminEditAkomodasi/>
    </>
  )
}

export default AdminEditAkomodasi