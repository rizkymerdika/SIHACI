import { Link } from "react-router-dom"
import Travel1 from "../assets/travel1.png"
import Travel2 from "../assets/travel2.png"
import { useEffect, useState } from "react";
import axios from "axios";
import AOS from 'aos'
import 'aos/dist/aos.css'

function ListHasilSearch({searchValue}) {
    const api = import.meta.env.VITE_APP_API;
    const getSeacrh = import.meta.env.VITE_API_SEARCH_ALL
    const getImage1 = import.meta.env.VITE_API_GET_IMAGE_WISATA
    const getImage2 = import.meta.env.VITE_API_GET_IMAGE_AKOMODASI
    const getImage3 = import.meta.env.VITE_API_GET_IMAGE_KULINER
    const getImage4 = import.meta.env.VITE_API_GET_IMAGE_TRAVEL
    const getImage5 = import.meta.env.VITE_API_GET_IMAGE_EVENT
    const image1 = `${api}${getImage1}`;
    const image2 = `${api}${getImage2}`;
    const image3 = `${api}${getImage3}`;
    const image4 = `${api}${getImage4}`;
    const image5 = `${api}${getImage5}`;
    const url = `${api}${getSeacrh}${searchValue}`
    
    const [objekWisata, setObjekWisata] = useState([])
    const [akomodasi, setAkomodasi] = useState([])
    const [kuliner, setKuliner] = useState([])
    const [travel, setTravel] = useState([])
    const [event, setEvent] = useState([])

    useEffect(() => {
      axios(url)
      .then((res) => {
        AOS.init()
        setObjekWisata(res.data.data.wisata)
        setAkomodasi(res.data.data.akomodasi)
        setKuliner(res.data.data.kuliner)
        setTravel(res.data.data.travel)
        setEvent(res.data.data.event)
        // console.log(res.data.data.wisata[0].kategori_wisata.toLowerCase().split(' ').join(''));
      })
    }, [])
    

  return (
    <div className="container mt-5">
        {
            objekWisata.length == 0 && akomodasi.length == 0 && kuliner.length == 0 && travel.length == 0 && event.length == 0 ? (
                <p className="no-result">Hasil Penelusuran Tidak Ditemukan</p>
            ):
            (
                <div className="row flex-wrap">
                    {
                        objekWisata.length != 0 ? (
                            <>
                                {
                                    objekWisata.map((item, index) => (
                                        <div className="col-sm-6 col-lg-4 mb-5" data-aos='fade-up' key={index}>
                                            <Link to={`/objekwisata/${item.kategori_wisata.toLowerCase().split(' ').join('')}/detailwisata/${item.id_wisata}`}>
                                                <div className="card travel-card border-0 m-auto">
                                                    <img src={`${image1}/${item.image_wisata}`} alt={item.nama_wisata} className="img-travel-outline" />
                                                    <div className="card-body">
                                                        <h4 className="card-title fw-semibold my-0 text-center">{item.nama_wisata}</h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </>
                        ):
                        (
                            <div style={{display: 'none'}}></div>
                        )
                    }
                    {
                        akomodasi.length != 0 ? (
                            <>
                                {
                                    akomodasi.map((item, index) => (
                                        <div className="col-sm-6 col-lg-4 mb-5" data-aos='fade-up' key={index}>
                                            <Link to={`/akomodasi/${item.kategori_hotel.toLowerCase().split(' ').join('')}/detailakomodasi/${item.id_akomodasi}`}>
                                                <div className="card travel-card border-0 m-auto">
                                                    <img src={`${image2}/${item.image_akomodasi}`} alt={item.nama_akomodasi} className="img-travel-outline" />
                                                    <div className="card-body">
                                                        <h4 className="card-title fw-semibold my-0 text-center">{item.nama_akomodasi}</h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </>
                        ):
                        (
                            <div style={{display: 'none'}}></div>
                        )
                    }
                    {
                        kuliner.length != 0 ? (
                            <>
                                {
                                    kuliner.map((item, index) => (
                                        <div className="col-sm-6 col-lg-4 mb-5" data-aos='fade-up' key={index}>
                                            <Link to={`/kuliner/${item.kategori_kuliner.toLowerCase().split(' ').join('')}/detailkuliner/${item.id_kuliner}`}>
                                                <div className="card travel-card border-0 m-auto">
                                                    <img src={`${image3}/${item.image_kuliner}`} alt={item.nama_kuliner} className="img-travel-outline" />
                                                    <div className="card-body">
                                                        <h4 className="card-title fw-semibold my-0 text-center">{item.nama_kuliner}</h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </>
                        ):
                        (
                            <div style={{display: 'none'}}></div>
                        )
                    }
                    {
                        travel.length != 0 ? (
                            <>
                                {
                                    travel.map((item, index) => (
                                        <div className="col-sm-6 col-lg-4 mb-5" data-aos='fade-up' key={index}>
                                            <Link to={`/travel/detailtravel/${item.id_travel}`}>
                                                <div className="card travel-card border-0 m-auto">
                                                    <img src={`${image4}/${item.image_travel}`} alt={item.nama_travel} className="img-travel-outline" />
                                                    <div className="card-body">
                                                        <h4 className="card-title fw-semibold my-0 text-center">{item.nama_travel}</h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </>
                        ):
                        (
                            <div style={{display: 'none'}}></div>
                        )
                    }
                    {
                        event.length != 0 ? (
                            <>
                                {
                                    event.map((item, index) => (
                                        <div className="col-sm-6 col-lg-4 mb-5" data-aos='fade-up' key={index}>
                                            <Link to={`/event/detailevent/${item.id_event}`}>
                                                <div className="card travel-card border-0 m-auto">
                                                    <img src={`${image5}/${item.image_event}`} alt={item.nama_event} className="img-travel-outline" />
                                                    <div className="card-body">
                                                        <h4 className="card-title fw-semibold my-0 text-center">{item.nama_event}</h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </>
                        ):
                        (
                            <div style={{display: 'none'}}></div>
                        )
                    }
                </div>
            )
        }
    </div>
  )
}

export default ListHasilSearch