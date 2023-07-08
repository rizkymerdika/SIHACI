import { Helmet } from "react-helmet"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import Header2 from "../components/Header2"
import ListWA from "../components/ListWA"
import React, { useEffect } from 'react'

function WALainnya() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
        <Helmet>
            <title>Wisata Alam - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Nav/>
        <Header2 header={"Rekomendasi Wisata Alam"} link1={"/objekwisata/wisataalam"} link2={"/objekwisata/wisatabuatan"} link3={"/objekwisata/wisatabudaya"} submenu1={"Wisata Alam"} submenu2={"Wisata Buatan"} submenu3={"Kebudayaan"}/>
        <ListWA/>
        <Footer/>
    </>
  )
}

export default WALainnya