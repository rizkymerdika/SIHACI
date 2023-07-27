import './Beranda.css'
import { Helmet } from 'react-helmet'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import WisataCianjur from '../components/WisataCianjur'
import Infowisata from '../components/Infowisata'
// import GaleriWisata from '../components/GaleriWisata'
import Footer from '../components/footer'
import EventPariwisata from '../components/EventPariwisata'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Beranda() {
  useEffect(() => {
    AOS.init()
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <Helmet>
        <title>Sistem Informasi Hayu Ameng ka Cianjur</title>
      </Helmet>
      <Nav/>
      <Carousel/>
      <WisataCianjur/>
      <Infowisata/>
      <EventPariwisata/>
      <Footer/>
    </>
  )
}

export default Beranda