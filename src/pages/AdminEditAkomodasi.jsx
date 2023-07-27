import "./Admin.css"
import { Helmet } from "react-helmet"
import FormAdminEditAkomodasi from "../components/FormAdminEditAkomodasi"
import React, { useEffect } from 'react'

function AdminEditAkomodasi() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
        <Helmet>
            <title>Edit Akomodasi - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminEditAkomodasi/>
    </>
  )
}

export default AdminEditAkomodasi