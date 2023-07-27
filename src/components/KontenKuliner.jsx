import Banner from "./Banner"
import Banner2 from "../assets/banner2.png"
import Kuliner14 from "../assets/kuliner14.png"
import Map from "./Map"
import Instagram from "../assets/logos_instagram.png"
import Shopee from "../assets/shopee.png"
import Tokopedia from "../assets/tokopedia.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function KontenKuliner() {
    useEffect(() => {
        axios(url)
        .then((res) => {
            setKuliner(res.data.data)
        })
    }, [])

    const id_kuliner = useParams()
    const api = import.meta.env.VITE_APP_API
    const getKuliner = import.meta.env.VITE_API_GET_KULINER_BY_ID
    const getImage = import.meta.env.VITE_API_GET_IMAGE_KULINER
    const image = `${api}${getImage}`;
    const url = `${api}${getKuliner}${id_kuliner.id}`

    const [kuliner, setKuliner] = useState([])

  return (
    <>
        {
            kuliner.map((item, index) => (
                <Banner image={`${image}/${item.banner_kuliner}`} title={item.nama_kuliner} key={index}/>
            ))
        }
        {
            kuliner.map((item, index) => (
                <div className="mt-5" key={index} data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="content-2-head fw-semibold">{item.nama_kuliner}</h1>
                            </div>
                        </div>
                        <div className="row py-4 py-sm-5 px-3 konten-outline">
                            <div className="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
                                <p className='my-0 content-2-text'>{item.deskripsi_kuliner}</p>
                                <p className='my-0 mt-4 content-2-text'>{item.alamat_kuliner}</p>
                                <div className="link-account-contacts d-flex justify-content-start mt-4">
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
                                        item.link_shopee ? (
                                            <div>
                                                <a href={item.link_shopee} target="_blank">
                                                    <img src={Shopee} alt="Shopee" />
                                                </a>
                                            </div>
                                        ):
                                        (
                                            <div style={{display: 'none'}}>
                                                <a href="#">
                                                    <img src={Shopee} alt="Shopee" />
                                                </a>
                                            </div>
                                        )
                                    }
                                    {
                                        item.link_tokopedia ? (
                                            <div>
                                                <a href={item.link_tokopedia} target="_blank">
                                                    <img src={Tokopedia} alt="Tokopedia" />
                                                </a>
                                            </div>
                                        ):
                                        (
                                            <div style={{display: 'none'}}>
                                                <a href="#">
                                                    <img src={Tokopedia} alt="Tokopedia" />
                                                </a>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                                <img src={`${image}/${item.image_kuliner}`} alt={item.nama_kuliner} width={"100%"} className="img-wisata-outline"/>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        {
            kuliner.map((item, index) => (
                <Map mapSrc={item.link_gmaps} key={index}/>
            ))
        }
    </>
  )
}

export default KontenKuliner