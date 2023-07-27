import { Link } from "react-router-dom"
import Travel1 from "../assets/travel1.png"
import Travel2 from "../assets/travel2.png"
import Travel3 from "../assets/travel3.png"
import Travel4 from "../assets/travel4.png"
import { useEffect, useState } from "react"
import axios from "axios"

function ListTravel() {
    useEffect(() => {
        axios(url)
        .then((res) => {
            setTravel(res.data.data)
        })
    }, [])

    const api = import.meta.env.VITE_APP_API;
    const getTravel = import.meta.env.VITE_API_GET_TRAVEL
    const getImage = import.meta.env.VITE_API_GET_IMAGE_TRAVEL
    const image = `${api}${getImage}`;
    const url = `${api}${getTravel}`

    const [travel, setTravel] = useState([])

  return (
    <div className="container mt-5">
        <div className="row flex-wrap">
            {
                travel.toReversed().map((item, index) => (
                    <div className="col-sm-6 mb-5" key={index} data-aos="fade-up">
                        <Link to={`/travel/detailtravel/${item.id_travel}`}>
                            <div className="card travel-card border-0 m-auto">
                                <img src={`${image}/${item.image_travel}`} alt={item.nama_travel} className="img-travel-outline" />
                                <div className="card-body">
                                    <h4 className="card-title fw-semibold my-0 text-center">{item.nama_travel}</h4>
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

export default ListTravel