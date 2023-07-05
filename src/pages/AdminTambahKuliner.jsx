import FormAdminTambahKuliner from "../components/FormAdminTambahKuliner"
import "./Admin.css"
import { Helmet } from "react-helmet"

function AdminTambahKuliner() {
  return (
    <>
        <Helmet>
            <title>Tambah Kuliner - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminTambahKuliner/>
    </>
  )
}

export default AdminTambahKuliner