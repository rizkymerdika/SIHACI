import FormHotelTambahLaporan from "../components/FormHotelTambahLaporan"
import "./Admin.css"
import { Helmet } from "react-helmet"

function HotelTambahLaporan() {
  return (
    <>
        <Helmet>
            <title>Tambah Laporan - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormHotelTambahLaporan/>
    </>
  )
}

export default HotelTambahLaporan