import './Kuliner.css'
import { Helmet } from 'react-helmet'
import Kuliner2 from '../assets/kuliner2.png'
import Banner from "../components/Banner"
import Nav from "../components/Nav"
import RekomendasiKuliner from '../components/RekomendasiKuliner'
import TempatMakan from '../components/TempatMakan'
import Footer from '../components/footer'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import OlehOleh from '../components/OlehOleh'

function Kuliner() {
  useEffect(() => {
    AOS.init()
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <Helmet>
        <title>Kuliner - Sistem Informasi Hayu Ameng ka Cianjur</title>
      </Helmet>
      <Nav/>
      <Banner image={Kuliner2} title={"Kuliner"}/>
      <RekomendasiKuliner/>
      <TempatMakan/>
      <OlehOleh/>
      <Footer/>
    </>
  )
}

export default Kuliner