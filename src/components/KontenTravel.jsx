import Banner from "./Banner"
import Banner4 from "../assets/banner4.png"
import Travel5 from "../assets/travel5.png"
import Map from "./Map"
import Website from "../assets/website.png"
import Facebook from "../assets/logos_facebook.png"
import Instagram from "../assets/logos_instagram.png"
import Twitter from "../assets/twitter.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"

function KontenTravel() {
    useEffect(() => {
        axios(url)
        .then((res) => {
            setTravel(res.data.data)
        })
    }, [])

    const id_travel = useParams()
    const api = import.meta.env.VITE_APP_API
    const getTravel = import.meta.env.VITE_API_GET_TRAVEL_BY_ID
    const getImage = import.meta.env.VITE_API_GET_IMAGE_TRAVEL
    const image = `${api}${getImage}`;
    const url = `${api}${getTravel}${id_travel.id}`

    const [travel, setTravel] = useState([])

    const formatTime = (timeString) => {
        const timeParts = timeString.split(":");
        const hours = timeParts[0];
        const minutes = timeParts[1];
        return `${hours}:${minutes}`;
    };

  return (
    <>
        {
            travel.map((item, index) => (
                <>
                    <Helmet>
                        <title>{item.nama_travel} - Sistem Informasi Hayu Ameng ka Cianjur</title>
                    </Helmet>
                    <Banner image={`${image}/${item.banner_travel}`} key={index}/>
                </>
            ))
        }
        {
            travel.map((item, index) => (
                <div className="mt-5" key={index} data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="content-2-head fw-semibold">{item.nama_travel}</h1>
                            </div>
                        </div>
                        <div className="row py-4 py-sm-5 px-3 konten-outline">
                            <div className="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
                                <p className='my-0 content-2-text'>{item.deskripsi_travel}</p>
                                <div className="mt-4">
                                    <span className="d-block content-2-text">Jam Keberangkatan</span>
                                    <span className="d-block content-2-text">{formatTime(item.jam_buka)} - {formatTime(item.jam_tutup)} WIB</span>
                                </div>
                                <div className="mt-4">
                                    <span className="d-block content-2-text">Harga Tiket</span>
                                    <div className="trip-dan-harga" dangerouslySetInnerHTML={{ __html: item.trip_dan_harga}}></div>
                                </div>
                                <p className='my-0 mt-4 content-2-text'>{item.alamat_travel} </p>
                                <span className="d-block content-2-text">{item.nomor_telepon_travel}</span>
                                <div className="link-account-contacts d-flex justify-content-start mt-4">
                                    {
                                        item.link_website ? (
                                            <div>
                                                <a href={item.link_website} target="_blank">
                                                    <img src={Website} alt="Website" />
                                                </a>
                                            </div>
                                        ):
                                        (
                                            <div style={{display: 'none'}}>
                                                <a href="#">
                                                    <img src={Website} alt="Website" />
                                                </a>
                                            </div>
                                        )
                                    }
                                    {
                                        item.link_facebook ? (
                                            <div>
                                                <a href={item.link_facebook} target="_blank">
                                                    <img src={Facebook} alt="Facebook" />
                                                </a>
                                            </div>
                                        ):
                                        (
                                            <div style={{display: 'none'}}>
                                                <a href="#">
                                                    <img src={Facebook} alt="Facebook" />
                                                </a>
                                            </div>
                                        )
                                    }
                                    {
                                        item.link_instagram ? (
                                            <div>
                                                <a href={item.link_instagram} target="_blank">
                                                    <img src={Instagram} alt="Instagram" />
                                                </a>
                                            </div>
                                        ):
                                        (
                                            <div style={{display: 'none'}}>
                                                <a href="#">
                                                    <img src={Instagram} alt="Instagram" />
                                                </a>
                                            </div>
                                        )
                                    }
                                    {
                                        item.link_twitter ? (
                                            <div>
                                                <a href={item.link_twitter} target="_blank">
                                                    <img src={Twitter} alt="Twitter" />
                                                </a>
                                            </div>
                                        ):
                                        (
                                            <div style={{display: 'none'}}>
                                                <a href="#">
                                                    <img src={Twitter} alt="Twitter" />
                                                </a>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                                <img src={`${image}/${item.image_travel}`} alt={item.nama_travel} width={"100%"} className="img-wisata-outline"/>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        {
            travel.map((item, index) => (
                <Map mapSrc={item.link_gmaps}/>
            ))
        }
    </>
  )
}

export default KontenTravel