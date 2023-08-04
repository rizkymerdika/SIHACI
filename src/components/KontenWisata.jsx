import Banner from "./Banner"
import Banner1 from "../assets/banner1.png"
import Wisataalam6 from "../assets/wisataalam6.png"
import Map from "./Map"
import Website from "../assets/website.png"
import Facebook from "../assets/logos_facebook.png"
import Instagram from "../assets/logos_instagram.png"
import Twitter from "../assets/twitter.png"
import Youtube from "../assets/youtube.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { Helmet } from "react-helmet"
import {NumericFormat} from 'react-number-format'

function KontenWisata() {
    useEffect(() => {
        axios(url)
        .then((res) => {
            setObjekWisata(res.data.data)
        })
    }, [])

    const id_wisata = useParams()
    const api = import.meta.env.VITE_APP_API;
    const getOw = import.meta.env.VITE_API_GET_OW_BY_ID
    const getImage = import.meta.env.VITE_API_GET_IMAGE_WISATA
    const image = `${api}${getImage}`;
    const url = `${api}${getOw}${id_wisata.id}`

    const [objekWisata, setObjekWisata] = useState([])

    const formatTime = (timeString) => {
        const timeParts = timeString.split(":");
        const hours = timeParts[0];
        const minutes = timeParts[1];
        return `${hours}:${minutes}`;
    };

    // function currencyFormat(num) {
    //     return 'Rp' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    // }

  return (
    <>
        {
            objekWisata.map((item, index) => (
                <>
                    <Helmet>
                        <title>{`${item.nama_wisata}`} - Sistem Informasi Hayu Ameng ka Cianjur</title>
                    </Helmet>
                    <Banner image={`${image}/${item.banner_wisata}`} title={item.nama_wisata} key={index}/>
                </>
            ))
        }
        {
            objekWisata.map((item, index) => (
                <div className="mt-5" key={index} data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="content-2-head fw-semibold">{item.nama_wisata}</h1>
                            </div>
                        </div>
                        <div className="row py-4 py-sm-5 px-3 konten-outline">
                            <div className="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
                                <p className='my-0 content-2-text'>{item.deskripsi_wisata}</p>
                                <div className="mt-4">
                                    <span className="d-block content-2-text">Senin - Jumat: {formatTime(item.jam_buka_hari_kerja)} - {formatTime(item.jam_tutup_hari_kerja)} WIB</span>
                                    <span className="d-block content-2-text">Harga Tiket: <NumericFormat value={item.harga_tiket_hari_kerja} displayType={'text'} thousandSeparator="." decimalSeparator="," prefix={'Rp'}/></span>
                                </div>
                                <div className="mt-4">
                                    <span className="d-block content-2-text">Sabtu, Minggu & Libur Nasional: {formatTime(item.jam_buka_weekend)} - {formatTime(item.jam_tutup_weekend)} WIB</span>
                                    <span className="d-block content-2-text">Harga Tiket: <NumericFormat value={item.harga_tiket_weekend} displayType={'text'} thousandSeparator="." decimalSeparator="," prefix={'Rp'}/></span>
                                </div>
                                <p className='my-0 mt-4 content-2-text'>{item.alamat_wisata}</p>
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
                                    {
                                        item.link_youtube ? (
                                            <div>
                                                <a href={item.link_youtube} target="_blank">
                                                    <img src={Youtube} alt="Youtube" />
                                                </a>
                                            </div>
                                        ):
                                        (
                                            <div style={{display: 'none'}}>
                                                <a href="#">
                                                    <img src={Youtube} alt="Youtube" />
                                                </a>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                                <img src={`${image}/${item.image_wisata}`} alt={item.nama_wisata} width={"100%"} className="img-wisata-outline"/>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        {
            objekWisata.map((item, index) => (
                <Map mapSrc={item.link_gmaps} key={index}/>
            ))
        }
    </>
  )
}

export default KontenWisata