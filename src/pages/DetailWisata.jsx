import "./Detail.css"
import KontenWisata from "../components/KontenWisata"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function DetailWisata() {
  useEffect(() => {
    AOS.init()
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
        <Nav/>
        <KontenWisata/>
        <Footer/>
    </>
  )
}

export default DetailWisata