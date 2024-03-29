import Banner from "./Banner"
import Banner3 from "../assets/banner3.png"
import Hotel1 from "../assets/hotel1.png"
import Map from "./Map"
import Website from "../assets/website.png"
import Facebook from "../assets/logos_facebook.png"
import Instagram from "../assets/logos_instagram.png"
import Twitter from "../assets/twitter.png"
import Youtube from "../assets/youtube.png"
import { useEffect, useState, useRef } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Chart from "./KontenHotelChart"
import { Helmet } from "react-helmet"
import {NumericFormat} from 'react-number-format'

function KontenHotel() {
    const chartRef = useRef(null);

    const [laporan, setLaporan] = useState('')

    useEffect(() => {
        axios(url)
        .then((res) => {
            setAkomodasi(res.data.data)
        })
        axios(url2)
        .then((res) => {
            setLaporan(res.data.data.length)
        })
    }, [])

    const id_akomodasi = useParams()
    const api = import.meta.env.VITE_APP_API;
    const getAkomodasi = import.meta.env.VITE_API_GET_AKOMODASI_BY_ID
    const getImage = import.meta.env.VITE_API_GET_IMAGE_AKOMODASI
    const image = `${api}${getImage}`;
    const url = `${api}${getAkomodasi}${id_akomodasi.id}`

    const bulanTahun = import.meta.env.VITE_API_GET_LAPORAN_TAHUN_BULAN
    const url2 = `${api}${bulanTahun}${id_akomodasi.id}`

    const [akomodasi, setAkomodasi] = useState([])

  return (
    <>
        {
            akomodasi.map((item, index) => (
                <>
                    <Helmet>
                        <title>{item.nama_akomodasi} - Sistem Informasi Hayu Ameng ka Cianjur</title>
                    </Helmet>
                    <Banner image={`${image}/${item.banner_akomodasi}`} title={item.nama_akomodasi} key={index}/>
                </>
            ))
        }
        {
            akomodasi.map((item, index) => (
                <div className="mt-5" key={index} data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="content-2-head fw-semibold">{item.nama_akomodasi}</h1>
                            </div>
                        </div>
                        <div className="row py-4 py-sm-5 px-3 konten-outline">
                            <div className="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
                                <p className='my-0 content-2-text'>{item.deskripsi_akomodasi}</p>
                                <p className='my-0 mt-4 content-2-text'>Harga per Malam : <NumericFormat value={item.harga_terendah} displayType={'text'} thousandSeparator="." decimalSeparator="," prefix={'Rp'}/> - <NumericFormat value={item.harga_tertinggi} displayType={'text'} thousandSeparator="." decimalSeparator="," prefix={'Rp'}/></p>
                                <p className='my-0 mt-4 content-2-text'>{item.alamat_akomodasi}</p>
                                <span className="content-2-text">{item.nomor_telepon}</span>
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
                                <img src={`${image}/${item.image_akomodasi}`} alt={item.nama_akomodasi} width={"100%"} className="img-wisata-outline"/>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        {
            akomodasi.map((item, index) => (
                <Map mapSrc={item.link_gmaps} key={index}/>
            ))
        }
        {
            laporan != 0 ? (
                <div className="container mt-5" data-aos='fade-up' key={laporan}>
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="content-2-head fw-semibold">Grafik Pengunjung Hotel</h1>
                        </div>
                    </div>
                    <Chart laporan={id_akomodasi.id} />
                </div>
            ) : ''
        }
        
        
    </>
  )
}

export default KontenHotel