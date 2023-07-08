import "./Admin.css"
import { Helmet } from "react-helmet"
import Sidebar from "../components/Sidebar"
import NavAdmin from "../components/NavAdmin"
import KontenAdminAkom from "../components/KontenAdminAkom"
import React, { useEffect } from 'react'

function AdminAkomodasi() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="d-flex h-100">
        <Helmet>
            <title>Akomodasi - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Sidebar style3={"#fff"}/>
        <div className="w-100">
            <NavAdmin/>
            <KontenAdminAkom/>
        </div>
    </div>
  )
}

export default AdminAkomodasi