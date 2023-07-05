import FormAdminTambahEvent from "../components/FormAdminTambahEvent"
import "./Admin.css"
import { Helmet } from "react-helmet"

function AdminTambahEvent() {
  return (
    <>
        <Helmet>
            <title>Tambah Event - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminTambahEvent/>
    </>
  )
}

export default AdminTambahEvent