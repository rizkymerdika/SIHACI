import "./Admin.css"
import { Helmet } from "react-helmet"
import FormAdminTambahAkomodasi from "../components/FormAdminTambahAkomodasi"
import React, { useEffect } from 'react'

function AdminTambahAkomodasi() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
        <Helmet>
            <title>Tambah Akomodasi - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminTambahAkomodasi/>
    </>
  )
}

export default AdminTambahAkomodasi