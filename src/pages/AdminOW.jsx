import "./Admin.css"
import Sidebar from "../components/Sidebar"
import { Helmet } from "react-helmet"
import NavAdmin from "../components/NavAdmin"
import KontenAdminOW from "../components/KontenAdminOW"

function AdminOW() {
  return (
    <div className="d-flex h-100">
        <Helmet>
            <title>Objek Wisata - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Sidebar style2={"#fff"}/>
        <div className="w-100">
            <NavAdmin/>
            <KontenAdminOW/>
        </div>
    </div>
  )
}

export default AdminOW