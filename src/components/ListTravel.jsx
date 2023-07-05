import { Link } from "react-router-dom"
import Travel1 from "../assets/travel1.png"
import Travel2 from "../assets/travel2.png"
import Travel3 from "../assets/travel3.png"
import Travel4 from "../assets/travel4.png"

function ListTravel() {
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
            <div className="col-sm-6 mb-5">
                <div className="card travel-card border-0 m-auto">
                    <img src={Travel3} alt="F-Trans Shuttle Cianjur" className="img-travel-outline" />
                    <div className="card-body">
                        <h4 className="card-title fw-semibold my-0 text-center">F-Trans Shuttle Cianjur</h4>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 mb-5">
                <div className="card travel-card border-0 m-auto">
                    <img src={Travel4} alt="Cv. Nur Maulana Semesta T&T" className="img-travel-outline" />
                    <div className="card-body">
                        <h4 className="card-title fw-semibold my-0 text-center">Cv. Nur Maulana Semesta T&T</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListTravel