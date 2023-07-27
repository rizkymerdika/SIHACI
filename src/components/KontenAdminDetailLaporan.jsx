import axios from "axios"
import moment from "moment"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function KontenAdminDetailLaporan() {
    const id_hotel = useParams()
    const api = import.meta.env.VITE_APP_API
    const getHotelById = import.meta.env.VITE_API_GET_HOTEL_BY_ID
    const getLaporanByHotel = import.meta.env.VITE_API_GET_LAPORAN_BY_ID
    const url1 = `${api}${getHotelById}${id_hotel.id}`
    const url2 = `${api}${getLaporanByHotel}${id_hotel.id}`

    const [namaHotel, setNamaHotel] = useState([])
    const [laporan, setLaporan] = useState('')

    useEffect(() => {
        axios(url1)
        .then((res) => {
            setNamaHotel(res.data.data[0].nama_user)
        })

        axios(url2)
        .then((res) => {
            setLaporan(res.data.data)
        })
    }, [])

  return (
    <div className="mt-3">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="konten-admin-head fw-semibold my-0">{`Laporan ${namaHotel}`}</h1>
                </div>
            </div>
            {
                laporan.length != 0 ? (
                    <div className="row mt-4">
                        {
                            laporan.toReversed().map((item, index) => (
                                <div className="col-12 mb-5" key={index}>
                                    <table className="table-laporan text-center">
                                        <tbody>
                                            <tr>
                                                <th colSpan={2} className="py-1">Tanggal</th>
                                                <td>{moment(item.tanggal_laporan).format('DD-MM-YYYY')}</td>
                                            </tr>
                                            <tr>
                                                <th rowSpan={2} className="table-row-span">Jumlah Kamar</th>
                                                <th className="py-1">Dimiliki</th>
                                                <td>{item.jumlah_kamar_dimiliki}</td>
                                            </tr>
                                            <tr>
                                                <th className="py-1">Terjual</th>
                                                <td>{item.jumlah_kamar_terjual}</td>
                                            </tr>
                                            <tr>
                                                <th rowSpan={8} className="table-row-span">Jumlah Wisatawan</th>
                                                <th className="py-1">Lokal</th>
                                                <td>{item.jumlah_wisatawan_lokal}</td>
                                            </tr>
                                            <tr>
                                                <th className="py-1">Asia</th>
                                                <td>{item.jumlah_wisatawan_asia}</td>
                                            </tr>
                                            <tr>
                                                <th className="py-1">Afrika</th>
                                                <td>{item.jumlah_wisatawan_afrika}</td>
                                            </tr>
                                            <tr>
                                                <th className="py-1">Amerika Utara</th>
                                                <td>{item.jumlah_wisatawan_amerika_utara}</td>
                                            </tr>
                                            <tr>
                                                <th className="py-1">Amerika Selatan</th>
                                                <td>{item.jumlah_wisatawan_amerika_selatan}</td>
                                            </tr>
                                            <tr>
                                                <th className="py-1">Antartika</th>
                                                <td>{item.jumlah_wisatawan_antartika}</td>
                                            </tr>
                                            <tr>
                                                <th className="py-1">Eropa</th>
                                                <td>{item.jumlah_wisatawan_eropa}</td>
                                            </tr>
                                            <tr>
                                                <th className="py-1">Australia</th>
                                                <td>{item.jumlah_wisatawan_australia}</td>
                                            </tr>
                                            <tr>
                                                <th rowSpan={2} className="table-row-span">Jumlah Karyawan</th>
                                                <th className="py-1">Laki-laki</th>
                                                <td>{item.jumlah_karyawan_lakilaki}</td>
                                            </tr>
                                            <tr>
                                                <th className="py-1">Perempuan</th>
                                                <td>{item.jumlah_karyawan_perempuan}</td>
                                            </tr>
                                            <tr>
                                                <th colSpan={2} className="py-1">Rata-rata Lama Tinggal</th>
                                                <td>{item.rata_rata_lama_tinggal}</td>
                                            </tr>
                                        </tbody>
                                        <tbody></tbody>
                                    </table>
                                </div>
                            ))
                        }
                    </div>
                ):
                (
                    <div className='row my-2 my-sm-3 my-lg-4 my-xxl-5'>
                        <div className='col-12'>
                            <h1 className='belum-ada-laporan'>Belum Ada Laporan</h1>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default KontenAdminDetailLaporan