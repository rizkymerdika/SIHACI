import { Helmet } from "react-helmet"
import React, { useEffect } from 'react'
import Nav from "../components/Nav"
import Footer from "../components/footer"
import Header2 from "../components/Header2"
import ListKuliner2 from "../components/ListKuliner2"

function KulinerLainnya2() {
    useEffect(() => {
          window.scrollTo(0, 0)
     }, [])

  return (
    <>
        <Helmet>
            <title>Oleh-Oleh - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Nav/>
        <Header2 header={"Rekomendasi Oleh-Oleh"} link1={"/kuliner/tempatmakan"} link2={"/kuliner/oleh-oleh"} submenu1={"Tempat Makan"} submenu2={"Oleh-Oleh"} style={"none"}/>
        <ListKuliner2/>
        <Footer/>
    </>
  )
}

export default KulinerLainnya2