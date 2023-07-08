import "./Admin.css"
import { Helmet } from "react-helmet"
import Sidebar from "../components/Sidebar"
import NavAdmin from "../components/NavAdmin"
import KontenAdminKuliner from "../components/KontenAdminKuliner"
import React, { useEffect } from 'react'

function AdminKuliner() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="d-flex h-100">
        <Helmet>
            <title>Kuliner - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Sidebar style4={"#fff"}/>
        <div className="w-100">
            <NavAdmin/>
            <KontenAdminKuliner/>
        </div>
    </div>
  )
}

export default AdminKuliner