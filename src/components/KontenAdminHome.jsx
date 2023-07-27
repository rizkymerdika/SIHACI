import axios from 'axios';
import React, { useEffect, useState } from 'react'

function KontenAdminHome() {
    const api = import.meta.env.VITE_APP_API;
    const oW = import.meta.env.VITE_API_GET_OW
    const akom = import.meta.env.VITE_API_GET_AKOMODASI
    const kuli = import.meta.env.VITE_API_GET_KULINER
    const trav = import.meta.env.VITE_API_GET_TRAVEL
    const eve = import.meta.env.VITE_API_GET_EVENT
    const hot = import.meta.env.VITE_API_GET_HOTEL
    const urlOw = `${api}${oW}`
    const urlAkomodasi = `${api}${akom}`
    const urlKuliner = `${api}${kuli}`
    const urlTravel = `${api}${trav}`
    const urlEvent = `${api}${eve}`
    const urlHotel = `${api}${hot}`

    const [objekWisata, setObjekWisata] = useState('')
    const [akomodasi, setAkomodasi] = useState('')
    const [kuliner, setKuliner] = useState('')
    const [travel, setTravel] = useState('')
    const [event, setEvent] = useState('')
    const [hotel, setHotel] = useState('')

    useEffect(() => {
      axios(urlOw)
      .then((res) => {
        setObjekWisata(res.data.data)
      })

      axios(urlAkomodasi)
      .then((res) => {
        setAkomodasi(res.data.data)
      })

      axios(urlKuliner)
      .then((res) => {
        setKuliner(res.data.data)
      })

      axios(urlTravel)
      .then((res) => {
        setTravel(res.data.data)
      })

      axios(urlEvent)
      .then((res) => {
        setEvent(res.data.data)
      })

      axios(urlHotel)
      .then((res) => {
        setHotel(res.data.data)
      })
    }, [])
    

  return (
    <div className='mt-3'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className="konten-admin-head fw-semibold my-0">Jumlah Data</h1>
                </div>
            </div>
            <div className='row flex-wrap mt-2 gy-3'>
                <div className='col-sm-6 col-lg-4'>
                    <div className='jumlah-data-wrapper d-flex justify-content-between'>
                        <div>
                            <span>Objek Wisata</span>
                            <span>: </span>
                        </div>
                        <div>
                            <span title='jumlah-angka'>{objekWisata.length}</span>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-lg-4'>
                    <div className='jumlah-data-wrapper d-flex justify-content-between'>
                        <div>
                            <span>Akomodasi</span>
                            <span>: </span>
                        </div>
                        <div>
                            <span title='jumlah-angka'>{akomodasi.length}</span>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-lg-4'>
                    <div className='jumlah-data-wrapper d-flex justify-content-between'>
                        <div>
                            <span>Kuliner</span>
                            <span>: </span>
                        </div>
                        <div>
                            <span title='jumlah-angka'>{kuliner.length}</span>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-lg-4'>
                    <div className='jumlah-data-wrapper d-flex justify-content-between'>
                        <div>
                            <span>Travel</span>
                            <span>: </span>
                        </div>
                        <div>
                            <span title='jumlah-angka'>{travel.length}</span>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-lg-4'>
                    <div className='jumlah-data-wrapper d-flex justify-content-between'>
                        <div>
                            <span>Event</span>
                            <span>: </span>
                        </div>
                        <div>
                            <span title='jumlah-angka'>{event.length}</span>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-lg-4'>
                    <div className='jumlah-data-wrapper d-flex justify-content-between'>
                        <div>
                            <span>Akun Hotel</span>
                            <span>: </span>
                        </div>
                        <div>
                            <span title='jumlah-angka'>{hotel.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KontenAdminHome