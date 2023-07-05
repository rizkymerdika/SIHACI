import Slider from "react-slick"
import Event6 from "../assets/event6.png"

function EventPariwisata() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    className: "center",
                    centerMode: true,
                    dots: false,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    className: "center",
                    centerMode: true,
                    dots: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

  return (
    <div className="mt-5">
        <h1 className="content-2-head fw-semibold text-center">Event Pariwisata Cianjur</h1>
        <div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12" id="event-pariwisata-slide-card">
                        <Slider {...settings}>
                        <div>
                            <div className="card event-pariwisata-card m-auto">
                                <img src={Event6} alt="Hari Jadi Cianjur" className="card-img-top" />
                                <div className="card-body flex-column justify-content-start">
                                    <h4 className="card-title my-0 py-3 text-center fw-bold">Hari Jadi Cianjur</h4>
                                    <p className="card-text">Hari Jadi Cianjur adalah momen dimana masyarakat bersatu untuk merayakan identitas dan warisan budaya mereka.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card event-pariwisata-card m-auto">
                                <img src={Event6} alt="Hari Jadi Cianjur" className="card-img-top" />
                                <div className="card-body flex-column justify-content-start">
                                    <h4 className="card-title my-0 py-3 text-center fw-bold">Hari Jadi Cianjur</h4>
                                    <p className="card-text">Hari Jadi Cianjur adalah momen dimana masyarakat bersatu untuk merayakan identitas dan warisan budaya mereka.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card event-pariwisata-card m-auto">
                                <img src={Event6} alt="Hari Jadi Cianjur" className="card-img-top" />
                                <div className="card-body flex-column justify-content-start">
                                    <h4 className="card-title my-0 py-3 text-center fw-bold">Hari Jadi Cianjur</h4>
                                    <p className="card-text">Hari Jadi Cianjur adalah momen dimana masyarakat bersatu untuk merayakan identitas dan warisan budaya mereka.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card event-pariwisata-card m-auto">
                                <img src={Event6} alt="Hari Jadi Cianjur" className="card-img-top" />
                                <div className="card-body flex-column justify-content-start">
                                    <h4 className="card-title my-0 py-3 text-center fw-bold">Hari Jadi Cianjur</h4>
                                    <p className="card-text">Hari Jadi Cianjur adalah momen dimana masyarakat bersatu untuk merayakan identitas dan warisan budaya mereka.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card event-pariwisata-card m-auto">
                                <img src={Event6} alt="Hari Jadi Cianjur" className="card-img-top" />
                                <div className="card-body flex-column justify-content-start">
                                    <h4 className="card-title my-0 py-3 text-center fw-bold">Hari Jadi Cianjur</h4>
                                    <p className="card-text">Hari Jadi Cianjur adalah momen dimana masyarakat bersatu untuk merayakan identitas dan warisan budaya mereka.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card event-pariwisata-card m-auto">
                                <img src={Event6} alt="Hari Jadi Cianjur" className="card-img-top" />
                                <div className="card-body flex-column justify-content-start">
                                    <h4 className="card-title my-0 py-3 text-center fw-bold">Hari Jadi Cianjur</h4>
                                    <p className="card-text">Hari Jadi Cianjur adalah momen dimana masyarakat bersatu untuk merayakan identitas dan warisan budaya mereka.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card event-pariwisata-card m-auto">
                                <img src={Event6} alt="Hari Jadi Cianjur" className="card-img-top" />
                                <div className="card-body flex-column justify-content-start">
                                    <h4 className="card-title my-0 py-3 text-center fw-bold">Hari Jadi Cianjur</h4>
                                    <p className="card-text">Hari Jadi Cianjur adalah momen dimana masyarakat bersatu untuk merayakan identitas dan warisan budaya mereka.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card event-pariwisata-card m-auto">
                                <img src={Event6} alt="Hari Jadi Cianjur" className="card-img-top" />
                                <div className="card-body flex-column justify-content-start">
                                    <h4 className="card-title my-0 py-3 text-center fw-bold">Hari Jadi Cianjur</h4>
                                    <p className="card-text">Hari Jadi Cianjur adalah momen dimana masyarakat bersatu untuk merayakan identitas dan warisan budaya mereka.</p>
                                </div>
                            </div>
                        </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventPariwisata