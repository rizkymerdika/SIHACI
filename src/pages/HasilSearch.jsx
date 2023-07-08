import { Helmet } from "react-helmet"
import Header from "../components/Header"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import ListHasilSearch from "../components/ListHasilSearch"
import { useParams } from "react-router-dom"
import React, { useEffect } from 'react'

function HasilSearch() {
    const searchValue = useParams()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <>
      <Helmet>
        <title>Hasil Penelusuran - Sistem Informasi Hayu Ameng ka Cianjur</title>
      </Helmet>
      <Nav/>
      <Header header={`Hasil Penelusuran "${searchValue.id}"`}/>
      <ListHasilSearch searchValue={searchValue.id}/>
      <Footer/>
    </>
  )
}

export default HasilSearch