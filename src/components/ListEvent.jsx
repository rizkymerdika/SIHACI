import { Link } from "react-router-dom"
import Event1 from "../assets/event1.png"
import Event2 from "../assets/event2.png"
import Event3 from "../assets/event3.png"
import Event4 from "../assets/event4.png"
import { useEffect, useState } from "react"
import axios from "axios"

function ListEvent() {
    useEffect(() => {
        axios(url)
        .then((res) => {
            setEvent(res.data.data)
        })
    }, [])

    const api = import.meta.env.VITE_APP_API;
    const getEvent = import.meta.env.VITE_API_GET_EVENT
    const getImage = import.meta.env.VITE_API_GET_IMAGE_EVENT
    const image = `${api}${getImage}`;
    const url = `${api}${getEvent}`

    const [event, setEvent] = useState([])

  return (
    <div className="container mt-5">
        <div className="row flex-wrap">
            {
                event.toReversed().map((item, index) => (
                    <div className="col-sm-6 col-lg-4 mb-5" key={index} data-aos="fade-up">
                        <Link to={`/event/detailevent/${item.id_event}`}>
                            <div className="card event-card border-0 m-auto">
                                <img src={`${image}/${item.image_event}`} alt={item.nama_event} className="img-event-outline" />
                                <div className="card-body">
                                    <h4 className="card-title fw-semibold my-0 text-center">{item.nama_event}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ListEvent