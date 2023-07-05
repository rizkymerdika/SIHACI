import Header from "../components/Header"
import ListEvent from "../components/ListEvent"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

function Event() {
  return (
    <>
      <Helmet>
        <title>Event - Sistem Informasi Hayu Ameng ka Cianjur</title>
      </Helmet>
      <Nav/>
      <Header header={"Event Kegiatan Pariwisata"}/>
      <ListEvent/>
      <Footer/>
    </>
  )
}

export default Event