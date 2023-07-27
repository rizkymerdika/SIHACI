import { useEffect, useState } from 'react'
import RekomenKuliner1 from '../assets/kuliner3.png'
import RekomenKuliner2 from '../assets/kuliner4.png'
import RekomenKuliner3 from '../assets/kuliner5.png'
import axios from 'axios'

function RekomendasiKuliner() {
    useEffect(() => {
        axios(url)
        .then((res) => {
            setKuliner(res.data.data)
        })
    }, [])

    const api = import.meta.env.VITE_APP_API;
    const getKuliner = import.meta.env.VITE_API_GET_KULINER
    const getImage = import.meta.env.VITE_API_GET_IMAGE_KULINER
    const image = `${api}${getImage}`;
    const url = `${api}${getKuliner}`

    const [kuliner, setKuliner] = useState([])

  return (
    <div className="mt-5" data-aos="fade-up">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="content-2-head fw-semibold">Rekomendasi Kuliner</h1>
                </div>
            </div>
        </div>
        <div id="carouselRekomenKuliner" className="carousel slide mt-3" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselRekomenKuliner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselRekomenKuliner" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselRekomenKuliner" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner py-5">
                {
                    kuliner.filter((item, index) => index < 1).map((item, index) => (
                        <div className="carousel-item active pb-3 pb-lg-0" key={index}>
                            <div className='container py-lg-4'>
                                <div className="row gx-5">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-2 mt-lg-0">
                                        <h2 className='content-2-subhead my-0 fw-semibold text-white'>{item.nama_kuliner}</h2>
                                        <p className='my-0 mt-2 mt-lg-4 content-2-text text-white'>{item.deskripsi_kuliner}</p>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                                        <img src={`${image}/${item.image_kuliner}`} alt={item.nama_kuliner} width={"100%"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {
                    kuliner.filter((item, index) => index > 0 && index < 3).map((item, index) => (
                        <div className="carousel-item pb-3 pb-lg-0" key={index}>
                            <div className='container py-lg-4'>
                                <div className="row gx-5">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-2 mt-lg-0">
                                        <h2 className='content-2-subhead my-0 fw-semibold text-white'>{item.nama_kuliner}</h2>
                                        <p className='my-0 mt-2 mt-lg-4 content-2-text text-white'>{item.deskripsi_kuliner}</p>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                                        <img src={`${image}/${item.image_kuliner}`} alt={item.nama_kuliner} width={"100%"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default RekomendasiKuliner