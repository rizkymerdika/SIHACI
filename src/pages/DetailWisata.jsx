import "./Detail.css"
import KontenWisata from "../components/KontenWisata"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

function DetailWisata() {
  return (
    <>
        <Helmet>
          <title>Kebun Raya Cibodas - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Nav/>
        <KontenWisata/>
        <Footer/>
    </>
  )
}

export default DetailWisata