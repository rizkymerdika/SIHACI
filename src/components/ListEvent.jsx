import { Link } from "react-router-dom"
import Event1 from "../assets/event1.png"
import Event2 from "../assets/event2.png"
import Event3 from "../assets/event3.png"
import Event4 from "../assets/event4.png"

function ListEvent() {
  return (
    <div className="container mt-5">
        <div className="row flex-wrap">
            <div className="col-sm-6 mb-5">
                <div className="card event-card border-0 m-auto">
                    <img src={Event1} alt="Perayaan Hari Jadi Cianjur 345" className="img-event-outline" />
                    <div className="card-body">
                        <h4 className="card-title fw-semibold my-0 text-center">Perayaan Hari Jadi Cianjur 345</h4>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 mb-5">
                <Link to="/event/detailevent">
                <div className="card event-card border-0 m-auto">
                    <img src={Event2} alt="Cianjur Anime Fest" className="img-event-outline" />
                    <div className="card-body">
                        <h4 className="card-title fw-semibold my-0 text-center">Cianjur Anime Fest</h4>
                    </div>
                </div>
                </Link>
            </div>
            <div className="col-sm-6 mb-5">
                <div className="card event-card border-0 m-auto">
                    <img src={Event3} alt="Seni Kuda Kosong" className="img-event-outline" />
                    <div className="card-body">
                        <h4 className="card-title fw-semibold my-0 text-center">Seni Kuda Kosong</h4>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 mb-5">
                <div className="card event-card border-0 m-auto">
                    <img src={Event4} alt="Roadrace Championship" className="img-event-outline" />
                    <div className="card-body">
                        <h4 className="card-title fw-semibold my-0 text-center">Roadrace Championship</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListEvent