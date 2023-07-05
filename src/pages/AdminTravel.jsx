import "./Admin.css"
import { Helmet } from "react-helmet"
import Sidebar from "../components/Sidebar"
import NavAdmin from "../components/NavAdmin"
import KontenAdminTravel from "../components/KontenAdminTravel"

function AdminTravel() {
  return (
    <div className="d-flex h-100">
        <Helmet>
            <title>Travel - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Sidebar style5={"#fff"}/>
        <div className="w-100">
            <NavAdmin/>
            <KontenAdminTravel/>
        </div>
    </div>
  )
}

export default AdminTravel