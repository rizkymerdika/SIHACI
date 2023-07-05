import "./Travel.css"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import ListTravel from "../components/ListTravel"
import Nav from "../components/Nav"
import Footer from "../components/footer"

function Travel() {
  return (
    <>
      <Helmet>
        <title>Travel - Sistem Informasi Hayu Ameng ka Cianjur</title>
      </Helmet>
      <Nav/>
      <Header header={"Rekomendasi Travel Cianjur"}/>
      <ListTravel/>
      <Footer/>
    </>
  )
}

export default Travel