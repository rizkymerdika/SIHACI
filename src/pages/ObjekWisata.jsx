import './ObjekWisata.css'
import { Helmet } from 'react-helmet'
import Slide3 from "../assets/slide3.png"
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import RekomendasiWisata from "../components/RekomendasiWisata"
import WisataAlam from '../components/WisataAlam'
import Footer from '../components/footer'
import WisataBuatan from '../components/WisataBuatan'
import WisataBudaya from '../components/WisataBudaya'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ObjekWisata() {
  useEffect(() => {
    AOS.init()
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <Helmet>
        <title>Objek Wisata - Sistem Informasi Hayu Ameng ka Cianjur</title>
      </Helmet>
      <Nav/>
      <Banner image={Slide3} title={"Objek Wisata"}/>
      <RekomendasiWisata/>
      <WisataAlam/>
      <WisataBuatan/>
      <WisataBudaya/>
      <Footer/>
    </>
  )
}

export default ObjekWisata