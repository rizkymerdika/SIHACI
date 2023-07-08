import "./Admin.css"
import Sidebar from "../components/Sidebar"
import { Helmet } from "react-helmet"
import NavAdmin from "../components/NavAdmin"
import KontenAdminGPW from "../components/KontenAdminGPW"
import React, { useEffect } from 'react'

function AdminGantiPassword() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="d-flex h-100">
        <Helmet>
            <title>Ganti Password - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Sidebar style8={"#fff"}/>
        <div className="w-100">
            <NavAdmin/>
            <KontenAdminGPW/>
        </div>
    </div>
  )
}

export default AdminGantiPassword