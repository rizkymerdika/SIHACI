import "./Admin.css"
import Sidebar from "../components/Sidebar"
import NavAdmin from "../components/NavAdmin"
import KontenAdminHome from "../components/KontenAdminHome"
import { Helmet } from "react-helmet"

function AdminHome() {
  return (
    <div className="d-flex h-100">
        <Helmet>
          <title>Dashboard - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Sidebar style1={"#fff"}/>
        <div className="w-100">
            <NavAdmin/> 
            <KontenAdminHome/>
        </div>
    </div>
  )
}

export default AdminHome