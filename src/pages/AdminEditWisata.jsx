import "./Admin.css"
import { Helmet } from "react-helmet"
import FormAdminEditWisata from "../components/FormAdminEditWisata"
import React, { useEffect } from 'react'

function AdminEditWisata() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
        <Helmet>
            <title>Edit Objek Wisata - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminEditWisata/>
    </>
  )
}

export default AdminEditWisata