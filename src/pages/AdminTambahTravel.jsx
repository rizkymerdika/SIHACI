import FormAdminTambahTravel from "../components/FormAdminTambahTravel"
import "./Admin.css"
import { Helmet } from "react-helmet"
import React, { useEffect } from 'react'

function AdminTambahTravel() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
        <Helmet>
            <title>Tambah Travel - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminTambahTravel/>
    </>
  )
}

export default AdminTambahTravel