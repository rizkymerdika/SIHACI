import { Helmet } from "react-helmet"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import ListKuliner from "../components/ListKuliner"
import React, { useEffect } from 'react'
import Header2 from "../components/Header2"

function KulinerLainnya() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
        <Helmet>
            <title>Tempat Makan - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Nav/>
        <Header2 header={"Rekomendasi Tempat Makan"} link1={"/kuliner/tempatmakan"} link2={"/kuliner/oleh-oleh"} submenu1={"Tempat Makan"} submenu2={"Oleh-Oleh"} style={"none"}/>
        <ListKuliner/>
        <Footer/>
    </>
  )
}

export default KulinerLainnya