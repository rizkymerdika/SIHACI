import { Helmet } from "react-helmet"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import Header2 from "../components/Header2"
import ListKBD from "../components/ListKBD"
import React, { useEffect } from 'react'

function KBDLainnya() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
        <Helmet>
            <title>Kebudayaan - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Nav/>
        <Header2 header={"Rekomendasi Wisata Budaya"} link1={"/objekwisata/wisataalam"} link2={"/objekwisata/wisatabuatan"} link3={"/objekwisata/wisatabudaya"} submenu1={"Wisata Alam"} submenu2={"Wisata Buatan"} submenu3={"Kebudayaan"}/>
        <ListKBD/>
        <Footer/>
    </>
  )
}

export default KBDLainnya