import "./Admin.css"
import { Helmet } from "react-helmet"
import FormAdminTambahWisata from "../components/FormAdminTambahWisata"
import React, { useEffect } from 'react'

function AdminTambahWisata() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
        <Helmet>
            <title>Tambah Objek Wisata - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminTambahWisata/>
    </>
  )
}

export default AdminTambahWisata