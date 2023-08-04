import "./Detail.css"
import KontenTravel from "../components/KontenTravel"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function DetailTravel() {
  useEffect(() => {
    AOS.init()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
        <Nav/>
        <KontenTravel/>
        <Footer/>
    </>
  )
}

export default DetailTravel