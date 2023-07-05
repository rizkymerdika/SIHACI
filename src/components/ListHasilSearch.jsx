import { Link } from "react-router-dom"
import Travel1 from "../assets/travel1.png"
import Travel2 from "../assets/travel2.png"

function ListHasilSearch({searchValue}) {
  return (
    <div className="container mt-5">
        <div className="row flex-wrap">
            <div className="col-sm-6 mb-5">
                <Link to="/travel/detailtravel">
                <div className="card travel-card border-0 m-auto">
                    <img src={Travel1} alt="Siliwangi Trans" className="img-travel-outline" />
                    <div className="card-body">
                        <h4 className="card-title fw-semibold my-0 text-center">Siliwangi Trans</h4>
                    </div>
                </div>
                </Link>
            </div>
            <div className="col-sm-6 mb-5">
                <div className="card travel-card border-0 m-auto">
                    <img src={Travel2} alt="Indo Trans Cianjur" className="img-travel-outline" />
                    <div className="card-body">
                        <h4 className="card-title fw-semibold my-0 text-center">Indo Trans Cianjur</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListHasilSearch