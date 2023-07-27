import Slider from "react-slick"
import Event6 from "../assets/event6.png"
import { useEffect } from 'react'
import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

function EventPariwisata() {
    const navigate = useNavigate()
    const api = import.meta.env.VITE_APP_API;
    const getEvent = import.meta.env.VITE_API_GET_EVENT
    const getImage = import.meta.env.VITE_API_GET_IMAGE_EVENT
    const image = `${api}${getImage}`;
    const url = `${api}${getEvent}`

    const [event, setEvent] = useState([])

    useEffect(() => {
        axios(url)
        .then((res) => {
            setEvent(res.data.data)
        })
    }, [])

    function handleNavigate(id) {
        navigate(`/event/detailevent/${id}`)
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        draggable: false,
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
                    dots: false,
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
                    dots: false,
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
        <h1 className="content-2-head fw-semibold text-center">Event Pariwisata Cianjur</h1>
        <div id="list-event-card-home">
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12" id="event-pariwisata-slide-card" data-aos='fade-up'>
                        <Slider {...settings}>
                        {
                            event.filter((item, index) => index < 8).map((item, index) => (
                                <div key={index}>
                                    <div className="card event-pariwisata-card m-auto">
                                        <img src={`${image}/${item.image_event}`} alt={item.nama_event} className="card-img-top" />
                                        <div className="card-body flex-column justify-content-start">
                                            <h4 className="card-title my-0 py-3 text-center fw-bold">{item.nama_event}</h4>
                                            <p className="card-text">{`${item.deskripsi_event.substring(0, 140)}.....`}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventPariwisata