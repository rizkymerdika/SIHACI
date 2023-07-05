import {BsPlusLg} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function KontenHotelListLaporan() {
    const navigate = useNavigate()

    function directTambah() {
        navigate('/hotel/tambahlaporan')
    }
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
            <div className='row flex-wrap mt-0 mb-4 gy-4'>
                <div className="col-12 mb-5">
                    <table className="table-laporan text-center">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="py-1">Tanggal</th>
                                <td>17-08-2023</td>
                            </tr>
                            <tr>
                                <th rowSpan={2} className="table-row-span">Jumlah Kamar</th>
                                <th className="py-1">Dimiliki</th>
                                <td>100</td>
                            </tr>
                            <tr>
                                <th className="py-1">Terjual</th>
                                <td>80</td>
                            </tr>
                            <tr>
                                <th rowSpan={8} className="table-row-span">Jumlah Wisatawan</th>
                                <th className="py-1">Lokal</th>
                                <td>100</td>
                            </tr>
                            <tr>
                                <th className="py-1">Asia</th>
                                <td>100</td>
                            </tr>
                            <tr>
                                <th className="py-1">Afrika</th>
                                <td>100</td>
                            </tr>
                            <tr>
                                <th className="py-1">Amerika Utara</th>
                                <td>100</td>
                            </tr>
                            <tr>
                                <th className="py-1">Amerika Selatan</th>
                                <td>100</td>
                            </tr>
                            <tr>
                                <th className="py-1">Antartika</th>
                                <td>100</td>
                            </tr>
                            <tr>
                                <th className="py-1">Eropa</th>
                                <td>100</td>
                            </tr>
                            <tr>
                                <th className="py-1">Australia</th>
                                <td>100</td>
                            </tr>
                            <tr>
                                <th rowSpan={2} className="table-row-span">Jumlah Karyawan</th>
                                <th className="py-1">Laki-laki</th>
                                <td>100</td>
                            </tr>
                            <tr>
                                <th className="py-1">Perempuan</th>
                                <td>100</td>
                            </tr>
                            <tr>
                                <th colSpan={2} className="py-1">Rata-rata Lama Tinggal</th>
                                <td>7 Hari</td>
                            </tr>
                        </tbody>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KontenHotelListLaporan