import { Link } from "react-router-dom"
import Wisataalam7 from "../assets/wisataalam7.png"

function ListWB() {
  return (
    <div className="container mt-5">
        <div className="row flex-wrap">
            <div className="col-sm-6 mb-5">
                <Link to="/objekwisata/wisatabuatan/detailwisata">
                <div className="card travel-card border-0 m-auto">
                    <img src={Wisataalam7} alt="Kebun Raya Cibodas" className="img-travel-outline" />
                    <div className="card-body">
                        <h4 className="card-title fw-semibold my-0 text-center">Kebun Raya Cibodas</h4>
                    </div>
                </div>
                </Link>
            </div>
            <div className="col-sm-6 mb-5">
                <div className="card travel-card border-0 m-auto">
                    <img src={Wisataalam7} alt="Kebun Raya Cibodas" className="img-travel-outline" />
                    <div className="card-body">
                        <h4 className="card-title fw-semibold my-0 text-center">Kebun Raya Cibodas</h4>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 mb-5">
                <div className="card travel-card border-0 m-auto">
                    <img src={Wisataalam7} alt="Kebun Raya Cibodas" className="img-travel-outline" />
                    <div className="card-body">
                        <h4 className="card-title fw-semibold my-0 text-center">Kebun Raya Cibodas</h4>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 mb-5">
                <div className="card travel-card border-0 m-auto">
                    <img src={Wisataalam7} alt="Kebun Raya Cibodas" className="img-travel-outline" />
                    <div className="card-body">
                        <h4 className="card-title fw-semibold my-0 text-center">Kebun Raya Cibodas</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListWB