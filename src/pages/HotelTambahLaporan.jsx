import FormHotelTambahLaporan from "../components/FormHotelTambahLaporan"
import "./Admin.css"
import { Helmet } from "react-helmet"
import React, { useEffect } from 'react'

function HotelTambahLaporan() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
        <Helmet>
            <title>Tambah Laporan - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormHotelTambahLaporan/>
    </>
  )
}

export default HotelTambahLaporan