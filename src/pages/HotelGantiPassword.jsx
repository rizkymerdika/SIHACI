import "./Admin.css"
import Sidebar2 from "../components/Sidebar2"
import { Helmet } from "react-helmet"
import NavHotel from "../components/NavHotel"
import KontenHotelGPW from "../components/KontenHotelGPW"
import React, { useEffect } from 'react'

function HotelGantiPassword() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="d-flex h-100">
        <Helmet>
            <title>Ganti Password - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Sidebar2 style2={'#fff'}/>
        <div className="w-100">
            <NavHotel/>
            <KontenHotelGPW/>
        </div>
    </div>
  )
}

export default HotelGantiPassword