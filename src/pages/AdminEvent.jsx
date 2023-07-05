import "./Admin.css"
import { Helmet } from "react-helmet"
import Sidebar from "../components/Sidebar"
import NavAdmin from "../components/NavAdmin"
import KontenAdminEvent from "../components/KontenAdminEvent"

function AdminEvent() {
  return (
    <div className="d-flex h-100">
        <Helmet>
            <title>Event - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Sidebar style6={"#fff"}/>
        <div className="w-100">
            <NavAdmin/>
            <KontenAdminEvent/>
        </div>
    </div>
  )
}

export default AdminEvent