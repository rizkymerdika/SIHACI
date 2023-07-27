import Slider from "react-slick"
import Wisatabuatan1 from '../assets/wisatabuatan1.png'
import Wisatabuatan2 from '../assets/wisatabuatan2.png'
import Wisatabuatan3 from '../assets/wisatabuatan3.png'
import Wisatabuatan4 from '../assets/wisatabuatan4.png'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

function WisataBuatan() {
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

    const settings = {
        dots: false,
        infinite: false,
        draggable: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    draggable: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable: true
                }
            }
        ]
    }
    
  return (
    <div className="mt-5" data-aos='fade-up'>
        <h1 className="content-2-head fw-semibold text-center">Wisata Buatan</h1>
        <div className="wisata-slider" data-aos='fade-up'>
            <div className="container pt-3">
                <div className="row mt-3">
                    <div className="col-12">
                        <Slider {...settings}>
                            {
                                objekWisata.filter((item, index) => item.kategori_wisata == 'Wisata Buatan' && index < 12).map((item, index) => (
                                    <div key={index}>
                                        <Link to={`/objekwisata/wisatabuatan/detailwisata/${item.id_wisata}`}>
                                            <div className="card objek-wisata-card m-auto" id="listt-event-card-home">
                                                <img src={`${image}/${item.image_wisata}`} alt={item.nama_wisata}className="card-img-top" />
                                                <div className="card-body">
                                                    <h5 className="card-title my-0 py-3 text-center fw-bold">{item.nama_wisata}</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 text-end">
                        <Link to={"/objekwisata/wisatabuatan"}>
                            <span className="slider-lainnya fw-semibold">Lainnya.....</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WisataBuatan