import "./Admin.css"
import { Helmet } from "react-helmet"
import FormAdminTambahAkomodasi from "../components/FormAdminTambahAkomodasi"

function AdminTambahAkomodasi() {
  return (
    <>
        <Helmet>
            <title>Tambah Akomodasi - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminTambahAkomodasi/>
    </>
  )
}

export default AdminTambahAkomodasi