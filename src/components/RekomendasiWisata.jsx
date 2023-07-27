import { useEffect, useState } from 'react';
import RekomenWisata1 from '../assets/rekomenwisata1.png'
import RekomenWisata2 from '../assets/rekomenwisata2.png'
import RekomenWisata3 from '../assets/rekomenwisata3.png'
import axios from 'axios';

function RekomendasiWisata() {
    useEffect(() => {
        axios(url)
        .then((res) => {
            setObjekWisata(res.data.data)
        })
    }, [])
    

    const api = import.meta.env.VITE_APP_API;
    const getOw = import.meta.env.VITE_API_GET_OW
    const getImage = import.meta.env.VITE_API_GET_IMAGE_WISATA
    const image = `${api}${getImage}`;
    const url = `${api}${getOw}`

    const [objekWisata, setObjekWisata] = useState([])

  return (
    <div className="mt-5" data-aos='fade-up'>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="content-2-head fw-semibold">Rekomendasi Wisata</h1>
                </div>
            </div>
        </div>
        <div id="carouselRekomenWisata" className="carousel slide mt-3" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselRekomenWisata" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselRekomenWisata" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselRekomenWisata" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner py-5" data-aos='fade-up'>
                {
                    objekWisata.filter((item, index) => index < 1).map((item, index) => (
                        <div className="carousel-item active pb-3 pb-lg-0" key={index}>
                            <div className='container py-lg-4'>
                                <div className="row gx-5">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-2 mt-lg-0">
                                        <h2 className='content-2-subhead my-0 fw-semibold text-white'>{item.nama_wisata}</h2>
                                        <p className='my-0 mt-2 mt-lg-4 content-2-text text-white'>{item.deskripsi_wisata}</p>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                                        <img src={`${image}/${item.image_wisata}`} alt={item.nama_wisata} width={"100%"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {
                    objekWisata.filter((item, index) => index > 0 && index < 3).map((item, index) => (
                        <div className="carousel-item pb-3 pb-lg-0" key={index}>
                            <div className='container py-lg-4'>
                                <div className="row gx-5">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-2 mt-lg-0">
                                        <h2 className='content-2-subhead my-0 fw-semibold text-white'>{item.nama_wisata}</h2>
                                        <p className='my-0 mt-2 mt-lg-4 content-2-text text-white'>{item.deskripsi_wisata}</p>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                                        <img src={`${image}/${item.image_wisata}`} alt={item.nama_wisata} width={"100%"}/>
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

export default RekomendasiWisata