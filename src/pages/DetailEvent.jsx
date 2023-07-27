import "./Detail.css"
import KontenEvent from "../components/KontenEvent"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function DetailEvent() {
  useEffect(() => {
    AOS.init()
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
        <Helmet>
          <title>Cianjur Anime Fest - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Nav/>
        <KontenEvent/>
        <Footer/>
    </>
  )
}

export default DetailEvent