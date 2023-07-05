import "./Admin.css"
import Sidebar from "../components/Sidebar"
import { Helmet } from "react-helmet"
import NavAdmin from "../components/NavAdmin"
import KontenAdminListHotel from "../components/KontenAdminListHotel"

function AdminLaporanHotel() {
  return (
    <div className="d-flex h-100">
        <Helmet>
            <title>List Hotel - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Sidebar style7={"#fff"}/>
        <div className="w-100">
            <NavAdmin/>
            <KontenAdminListHotel/>
        </div>
    </div>
  )
}

export default AdminLaporanHotel