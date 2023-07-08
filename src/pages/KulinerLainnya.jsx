import { Helmet } from "react-helmet"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import Header from "../components/Header"
import ListKuliner from "../components/ListKuliner"
import React, { useEffect } from 'react'

function KulinerLainnya() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
        <Helmet>
            <title>Kuliner Cianjur - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Nav/>
        <Header header={"Rekomendasi Kuliner"}/>
        <ListKuliner/>
        <Footer/>
    </>
  )
}

export default KulinerLainnya