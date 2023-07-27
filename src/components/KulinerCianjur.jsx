import Kuliner6 from '../assets/kuliner6.png'
import Kuliner7 from '../assets/kuliner7.png'
import Kuliner8 from '../assets/kuliner8.png'
import Kuliner9 from '../assets/kuliner9.png'
import Kuliner10 from '../assets/kuliner10.png'
import Kuliner11 from '../assets/kuliner11.png'
import Kuliner12 from '../assets/kuliner12.png'
import Kuliner13 from '../assets/kuliner13.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function KulinerCianjur() {
    useEffect(() => {
        axios(url)
        .then((res) => {
            setKuliner(res.data.data)
        })
    }, [])

    const api = import.meta.env.VITE_APP_API;
    const getKuliner = import.meta.env.VITE_API_GET_KULINER
    const getImage = import.meta.env.VITE_API_GET_IMAGE_KULINER
    const image = `${api}${getImage}`;
    const url = `${api}${getKuliner}`

    const [kuliner, setKuliner] = useState([])

  return (
    <div className="mt-5" data-aos="fade-up">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="content-2-head fw-semibold">Kuliner Cianjur</h1>
                </div>
            </div>
        </div>
        <div id='bgKulinerCianjur' className='mt-3' data-aos="fade-right">
            <div className="container">
                <div className="row flex-wrap justify-content-start pt-5">
                    {
                        kuliner.filter((item, index) => index < 8).map((item, index) => (
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-5" key={index}>
                                <Link to={`/kuliner/rekomendasikuliner/detailkuliner/${item.id_kuliner}`}>
                                    <div className="card kuliner-card border-0 m-auto">
                                        <img src={`${image}/${item.image_kuliner}`} alt={item.nama_kuliner} className='img-kuliner-outline'/>
                                        <div className="card-body text-center">
                                            <h4 className="card-title fw-semibold my-0">{item.nama_kuliner}</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className="row pb-4">
                    <div className="col-12 text-end">
                        <Link to={"/kuliner/rekomendasikuliner"}>
                            <span className="slider-lainnya fw-semibold" id='slider-lainnya-kuliner'>Lainnya.....</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KulinerCianjur