import FormAdminEditKuliner from "../components/FormAdminEditKuliner"
import "./Admin.css"
import { Helmet } from "react-helmet"
import React, { useEffect } from 'react'

function AdminEditKuliner() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
        <Helmet>
            <title>Edit Kuliner - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminEditKuliner/>
    </>
  )
}

export default AdminEditKuliner