import "./Akomodasi.css"
import Helmet from 'react-helmet'
import Slide3 from "../assets/banner3.png"
import Banner from "../components/Banner"
import Nav from "../components/Nav"
import RekomendasiAkomodasi from "../components/RekomendasiAkomodasi"
import Footer from "../components/footer"
import HotelBintang from "../components/HotelBintang"
import HotelNonBintang from "../components/HotelNonBintang"
import Villa from "../components/Villa"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Akomodasi() {
  useEffect(() => {
    AOS.init()
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <Helmet>
        <title>Akomodasi - Sistem Informasi Hayu Ameng ka Cianjur</title>
      </Helmet>
      <Nav/>
      <Banner image={Slide3} title={"Akomodasi"}/>
      <RekomendasiAkomodasi/>
      <HotelBintang/>
      <HotelNonBintang/>
      <Villa/>
      <Footer/>
    </>
  )
}

export default Akomodasi