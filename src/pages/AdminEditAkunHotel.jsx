import "./Admin.css"
import { Helmet } from "react-helmet"
import React, { useEffect } from 'react'
import FormAdminEditAkun from "../components/FormAdminEditAkun"

function AdminEditAkunHotel() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <>
        <Helmet>
            <title>Edit Akun Hotel - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminEditAkun/>
    </>
  )
}

export default AdminEditAkunHotel