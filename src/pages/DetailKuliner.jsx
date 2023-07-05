import "./Detail.css"
import KontenKuliner from "../components/KontenKuliner"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

function DetailKuliner() {
  return (
    <>
        <Helmet>
          <title>Tauco - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Nav/>
        <KontenKuliner/>
        <Footer/>
    </>
  )
}

export default DetailKuliner