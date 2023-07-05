import { Helmet } from "react-helmet"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import Header from "../components/Header"
import ListKuliner from "../components/ListKuliner"

function KulinerLainnya() {
  return (
    <>
        <Helmet>
            <title>Kuliner Cianjur - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Nav/>
        <Header header={"Rekomendasi Kuliner"}/>
        <ListKuliner/>
        <Footer/>
    </>
  )
}

export default KulinerLainnya