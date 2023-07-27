import {BsPlusLg} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { useEffect, useState } from 'react'
import moment from 'moment'

function KontenHotelListLaporan() {
    const navigate = useNavigate()
    const getIdUser = localStorage.getItem('id_user')
    const api = import.meta.env.VITE_APP_API
    const getLaporan = import.meta.env.VITE_API_GET_LAPORAN_BY_ID
    const url = `${api}${getLaporan}${getIdUser}`

    const [laporan, setLaporan] = useState('')

    function directTambah() {
        navigate(`/hotel/${getIdUser}/tambahlaporan`)
    }

    useEffect(() => {
      axios(url)
      .then((res) => {
        setLaporan(res.data.data)
      })
    }, [])
    

  return (
    <div className="mt-3">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="konten-admin-head fw-semibold my-0">Daftar Laporan</h1>
                </div>
            </div>
            <div className="row justify-content-between align-items-center mt-4">
                <div className="col-sm-6 col-md-4 mb-2 mb-sm-0">
                    <button className='btn-admin-1 py-2' onClick={directTambah}>
                        <BsPlusLg size={"100%"} className='button-icon-1 ms-3'/>
                        <div className='w-100 ms-2 me-3 text-start'><span>Tambah Laporan</span></div>
                    </button>
                </div>
            </div>
            {
                laporan.length != 0 ? (
                    <div className='row flex-wrap mt-0 mb-4 gy-4'>
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
                    <div className='row'>
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

export default KontenHotelListLaporan