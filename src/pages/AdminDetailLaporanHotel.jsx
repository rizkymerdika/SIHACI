import "./Admin.css"
import Sidebar from "../components/Sidebar"
import { Helmet } from "react-helmet"
import NavAdmin from "../components/NavAdmin"
import KontenAdminDetailLaporan from "../components/KontenAdminDetailLaporan"
import React, { useEffect } from 'react'

function AdminDetailLaporanHotel() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="d-flex h-100">
        <Helmet>
            <title>List Hotel - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Sidebar style7={"#fff"}/>
        <div className="w-100">
            <NavAdmin/>
            <KontenAdminDetailLaporan/>
        </div>
    </div>
  )
}

export default AdminDetailLaporanHotel