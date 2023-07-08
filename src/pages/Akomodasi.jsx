import "./Akomodasi.css"
import Helmet from 'react-helmet'
import Slide3 from "../assets/slide3.png"
import Banner from "../components/Banner"
import Nav from "../components/Nav"
import RekomendasiAkomodasi from "../components/RekomendasiAkomodasi"
import Footer from "../components/footer"
import HotelBintang from "../components/HotelBintang"
import HotelNonBintang from "../components/HotelNonBintang"
import Villa from "../components/Villa"
import React, { useEffect } from 'react'

function Akomodasi() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <Helmet>
        <title>Akomodasi - Sistem Informasi Hayu Ameng ka Cianjur</title>
      </Helmet>
      <Nav/>
      <Banner image={Slide3} title={"Ocean View"}/>
      <RekomendasiAkomodasi/>
      <HotelBintang/>
      <HotelNonBintang/>
      <Villa/>
      <Footer/>
    </>
  )
}

export default Akomodasi