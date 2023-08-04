import { useState } from "react";
import Cinematic from "../assets/cinematic.mp4"
import Slide1 from "../assets/slide1.png"
import Slide2 from "../assets/slide2.png"
import Slide3 from "../assets/slide3.png"
import { useEffect } from "react";
import axios from "axios";

function Carousel() {
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
    <div id='carousel' className='carousel slide mt-2' data-bs-ride="carousel">
        <div className='carousel-inner carousel-shadow'>
            {
                objekWisata.filter((item, index) => index < 1).map((item, index) => (
                    <div className='carousel-item active' key={index}>
                        <img src={`${image}/${item.banner_wisata}`} className="slide-image d-block" alt={item.nama_wisata}/>
                        <div className="carousel-caption d-block">
                            <h1 className="opacity-50 mb-lg-5">{item.nama_wisata}</h1>
                        </div>
                    </div>
                ))
            }
            {
                objekWisata.filter((item, index) => index > 0 && index < 6).map((item, index) => (
                    <div className='carousel-item'>
                        <img src={`${image}/${item.banner_wisata}`} className="slide-image d-block" alt={item.nama_wisata}/>
                        <div className="carousel-caption d-block">
                            <h1 className="opacity-50 mb-lg-5">{item.nama_wisata}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
        <button className='carousel-control-prev' type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className='carousel-control-next' type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Carousel