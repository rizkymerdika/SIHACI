import FormAdminTambahKuliner from "../components/FormAdminTambahKuliner"
import "./Admin.css"
import { Helmet } from "react-helmet"
import React, { useEffect } from 'react'

function AdminTambahKuliner() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
        <Helmet>
            <title>Tambah Kuliner - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminTambahKuliner/>
    </>
  )
}

export default AdminTambahKuliner