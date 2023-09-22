import { Helmet } from "react-helmet"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import Header2 from "../components/Header2"
import React, { useEffect } from 'react'
import ListWR from "../components/ListWR"

function WRLainnya() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <>
        <Helmet>
            <title>Wisata Religius - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Nav/>
        <Header2 header={"Rekomendasi Wisata Religius"} link1={"/objekwisata/wisataalam"} link2={"/objekwisata/wisatabuatan"} link3={"/objekwisata/wisatabudaya"} link4={"/objekwisata/wisatasejarah"} link5={"/objekwisata/wisatareligius"} submenu1={"Wisata Alam"} submenu2={"Wisata Buatan"} submenu3={"Wisata Budaya"} submenu4={"Wisata Sejarah"} submenu5={"Wisata Religius"}/>
        <ListWR/>
        <Footer/>
    </>
  )
}

export default WRLainnya