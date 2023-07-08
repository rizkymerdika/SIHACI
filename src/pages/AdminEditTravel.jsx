import FormAdminEditTravel from "../components/FormAdminEditTravel"
import "./Admin.css"
import { Helmet } from "react-helmet"
import React, { useEffect } from 'react'

function AdminEditTravel() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
        <Helmet>
            <title>Edit Travel - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminEditTravel/>
    </>
  )
}

export default AdminEditTravel