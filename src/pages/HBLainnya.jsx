import { Helmet } from "react-helmet"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import Header2 from "../components/Header2"
import ListHB from "../components/ListHB"
import React, { useEffect } from 'react'

function HBLainnya() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
        <Helmet>
            <title>Hotel Bintang - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Nav/>
        <Header2 header={"Rekomendasi Hotel Bintang"} link1={"/akomodasi/hotelbintang"} link2={"/akomodasi/hotelnonbintang"} link3={"/akomodasi/villa"} submenu1={"Hotel Bintang"} submenu2={"Hotel Non Bintang"} submenu3={"Villa"}/>
        <ListHB/>
        <Footer/>
    </>
  )
}

export default HBLainnya