import "./Detail.css"
import KontenEvent from "../components/KontenEvent"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

function DetailEvent() {
  return (
    <>
        <Helmet>
          <title>Cianjur Anime Fest - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Nav/>
        <KontenEvent/>
        <Footer/>
    </>
  )
}

export default DetailEvent