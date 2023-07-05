import FormAdminTambahTravel from "../components/FormAdminTambahTravel"
import "./Admin.css"
import { Helmet } from "react-helmet"

function AdminTambahTravel() {
  return (
    <>
        <Helmet>
            <title>Tambah Travel - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminTambahTravel/>
    </>
  )
}

export default AdminTambahTravel