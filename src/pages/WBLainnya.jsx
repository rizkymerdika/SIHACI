import { Helmet } from "react-helmet"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import Header2 from "../components/Header2"
import ListWB from "../components/ListWB"
import React, { useEffect } from 'react'

function WBLainnya() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
        <Helmet>
            <title>Wisata Buatan - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Nav/>
        <Header2 header={"Rekomendasi Wisata Buatan"} link1={"/objekwisata/wisataalam"} link2={"/objekwisata/wisatabuatan"} link3={"/objekwisata/wisatabudaya"} submenu1={"Wisata Alam"} submenu2={"Wisata Buatan"} submenu3={"Kebudayaan"}/>
        <ListWB/>
        <Footer/>
    </>
  )
}

export default WBLainnya