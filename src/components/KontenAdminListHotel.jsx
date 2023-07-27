import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function KontenAdminListHotel() {
    const api = import.meta.env.VITE_APP_API
    const getHotel = import.meta.env.VITE_API_GET_HOTEL
    const url = `${api}${getHotel}`

    const [hotel, setHotel] = useState([])

    const sortedHotel = hotel.sort((a, b) => {
        let fa = a.nama_user.toLowerCase(),
        fb = b.nama_user.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    })

    useEffect(() => {
        axios(url)
        .then((res) => {
            setHotel(res.data.data)
        })
    }, [])
    

  return (
    <div className="mt-3">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="konten-admin-head fw-semibold my-0">List Hotel</h1>
                    <hr className="my-1"/>
                </div>
            </div>
            <div className="row flex-wrap mt-3">
                {
                    sortedHotel.map((item, index) => (
                        <div className="col-sm-6 col-xl-4" key={index}>
                            <ul className="list-hotel">
                                <li><Link to={`/admin/listhotel/detaillaporan/${item.id_user}`}>{item.nama_user}</Link></li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default KontenAdminListHotel