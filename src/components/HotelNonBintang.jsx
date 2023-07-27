import Slider from "react-slick"
import Hotelnon1 from "../assets/hotelnon1.png"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

function HotelBintang() {
    useEffect(() => {
        axios(url)
        .then((res) => {
            setAkomodasi(res.data.data)
        })
    }, [])

    const api = import.meta.env.VITE_APP_API;
    const getAkomodasi = import.meta.env.VITE_API_GET_AKOMODASI
    const getImage = import.meta.env.VITE_API_GET_IMAGE_AKOMODASI
    const image = `${api}${getImage}`;
    const url = `${api}${getAkomodasi}`

    const [akomodasi, setAkomodasi] = useState([])

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
    <div className="mt-5" data-aos="fade-up">
        <h1 className="content-2-head fw-semibold text-center">Hotel Non Bintang</h1>
        <div className="wisata-slider" data-aos="fade-up">
            <div className="container pt-3">
                <div className="row mt-3">
                    <div className="col-12">
                        <Slider {...settings}>
                            {  
                                akomodasi.filter((item, index) => item.kategori_hotel == 'Hotel Non Bintang' && index < 12).map((item, index) => (
                                    <div key={index}>
                                        <Link to={`/akomodasi/hotelnonbintang/detailakomodasi/${item.id_akomodasi}`}>
                                            <div className="card objek-wisata-card m-auto">
                                                <img src={`${image}/${item.image_akomodasi}`} alt={item.nama_akomodasi} className="card-img-top" />
                                                <div className="card-body">
                                                    <h5 className="card-title my-0 py-3 text-center fw-bold">{item.nama_akomodasi}</h5>
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
                        <Link to={"/akomodasi/hotelnonbintang"}>
                            <span className="slider-lainnya fw-semibold">Lainnya.....</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HotelBintang