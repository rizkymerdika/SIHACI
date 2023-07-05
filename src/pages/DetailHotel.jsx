import "./Detail.css"
import KontenHotel from "../components/KontenHotel"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

function DetailHotel() {
  return (
    <>
        <Helmet>
          <title>Hotel Cianjur Cipanas - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Nav/>
        <KontenHotel/>
        <Footer/>
    </>
  )
}

export default DetailHotel