import FormAdminTambahEvent from "../components/FormAdminTambahEvent"
import "./Admin.css"
import { Helmet } from "react-helmet"
import React, { useEffect } from 'react'

function AdminTambahEvent() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
        <Helmet>
            <title>Tambah Event - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminTambahEvent/>
    </>
  )
}

export default AdminTambahEvent