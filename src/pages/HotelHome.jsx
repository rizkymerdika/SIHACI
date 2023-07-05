import "./Admin.css"
import Sidebar2 from "../components/Sidebar2"
import { Helmet } from "react-helmet"
import KontenHotelListLaporan from "../components/KontenHotelListLaporan"
import NavHotel from "../components/NavHotel"

function HotelHome() {
  return (
    <div className="d-flex h-100">
        <Helmet>
            <title>Dashboard - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <Sidebar2 style1={'#fff'}/>
        <div className="w-100">
            <NavHotel/>
            <KontenHotelListLaporan/>
        </div>
    </div>
  )
}

export default HotelHome