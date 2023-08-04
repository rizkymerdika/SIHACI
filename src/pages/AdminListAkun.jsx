import "./Admin.css"
import Sidebar from "../components/Sidebar"
import { Helmet } from "react-helmet"
import NavAdmin from "../components/NavAdmin"
import React, { useEffect } from 'react'
import KontenAdminListAkunHotel from "../components/KontenAdminListAkunHotel"

function AdminListAkun() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="d-flex h-100">
        <Helmet>
            <title>List Akun Hotel - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Sidebar style7={"#fff"}/>
        <div className="w-100">
            <NavAdmin/>
            <KontenAdminListAkunHotel/>
        </div>
    </div>
  )
}

export default AdminListAkun