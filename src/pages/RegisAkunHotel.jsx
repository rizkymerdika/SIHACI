import "./Admin.css"
import Sidebar from "../components/Sidebar"
import { Helmet } from "react-helmet"
import NavAdmin from "../components/NavAdmin"
import KontenAdminRegis from "../components/KontenAdminRegis"

function RegisAkunHotel() {
  return (
    <div className="d-flex h-100">
        <Helmet>
            <title>Registrasi Akun Hotel - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Sidebar style7={"#fff"}/>
        <div className="w-100">
            <NavAdmin/>
            <KontenAdminRegis/>
        </div>
    </div>
  )
}

export default RegisAkunHotel