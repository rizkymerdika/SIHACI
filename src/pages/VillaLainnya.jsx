import { Helmet } from "react-helmet"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import Header2 from "../components/Header2"
import ListVilla from "../components/ListVilla"

function VillaLainnya() {
  return (
    <>
        <Helmet>
            <title>Villa - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Nav/>
        <Header2 header={"Rekomendasi Villa"} link1={"/akomodasi/hotelbintang"} link2={"/akomodasi/hotelnonbintang"} link3={"/akomodasi/villa"} submenu1={"Hotel Bintang"} submenu2={"Hotel Non Bintang"} submenu3={"Villa"}/>
        <ListVilla/>
        <Footer/>
    </>
  )
}

export default VillaLainnya