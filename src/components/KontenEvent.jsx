import Banner from "./Banner"
import Banner5 from "../assets/banner5.png"
import Event5 from "../assets/event5.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function KontenEvent() {
    useEffect(() => {
        axios(url)
        .then((res) => {
            setEvent(res.data.data)
        })
    }, [])

    const id_event = useParams()
    const api = import.meta.env.VITE_APP_API
    const getEvent = import.meta.env.VITE_API_GET_EVENT_BY_ID
    const getImage = import.meta.env.VITE_API_GET_IMAGE_EVENT
    const image = `${api}${getImage}`;
    const url = `${api}${getEvent}${id_event.id}`

    const [event, setEvent] = useState([])

  return (
    <>
        {
            event.map((item, index) => (
                <Banner image={`${image}/${item.banner_event}`} key={index}/>
            ))
        }
        {
            event.map((item, index) => (
                <div className="mt-5" key={index} data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="content-2-head fw-semibold">{item.nama_event}</h1>
                            </div>
                        </div>
                        <div className="row py-4 py-sm-5 px-3 konten-outline">
                            <div className="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
                                <p className='my-0 content-2-text'>{item.deskripsi_event}</p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                                <img src={`${image}/${item.image_event}`} alt={item.nama_event} width={"100%"} className="img-wisata-outline"/>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default KontenEvent