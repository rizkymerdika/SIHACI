import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function OlehOleh() {
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
                    <h1 className="content-2-head fw-semibold">Oleh-Oleh</h1>
                </div>
            </div>
        </div>
        <div id='bgKulinerCianjur2' className='mt-3' data-aos="fade-right">
            <div className="container">
                <div className="row flex-wrap justify-content-start pt-5">
                    {
                        kuliner.filter((item, index) => item.kategori_kuliner == 'Oleh-oleh' && index < 8).map((item, index) => (
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-5" key={index}>
                                <Link to={`/kuliner/oleh-oleh/detailkuliner/${item.id_kuliner}`}>
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
                        <Link to={"/kuliner/oleh-oleh"}>
                            <span className="slider-lainnya fw-semibold" id='slider-lainnya-kuliner'>Lainnya.....</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OlehOleh