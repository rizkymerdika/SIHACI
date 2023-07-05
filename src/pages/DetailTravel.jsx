import "./Detail.css"
import KontenTravel from "../components/KontenTravel"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

function DetailTravel() {
  return (
    <>
        <Helmet>
          <title>Siliwangi Trans Shuttle - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Nav/>
        <KontenTravel/>
        <Footer/>
    </>
  )
}

export default DetailTravel