import "./Detail.css"
import KontenHotel from "../components/KontenHotel"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function DetailHotel() {
  useEffect(() => {
    AOS.init()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
        <Nav/>
        <KontenHotel/>
        <Footer/>
    </>
  )
}

export default DetailHotel