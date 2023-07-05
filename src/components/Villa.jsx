import Slider from "react-slick"
import Villa1 from "../assets/villa1.png"
import { Link } from "react-router-dom"

function HotelBintang() {
    const settings = {
        dots: false,
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
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

  return (
    <div className="mt-5">
        <h1 className="content-2-head fw-semibold text-center">Villa</h1>
        <div className="wisata-slider">
            <div className="container pt-3">
                <div className="row mt-3">
                    <div className="col-12">
                        <Slider {...settings}>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Villa1} alt="Bumi Ciherang Hotel & Villa" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Bumi Ciherang Hotel & Villa</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Villa1} alt="Bumi Ciherang Hotel & Villa" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Bumi Ciherang Hotel & Villa</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Villa1} alt="Bumi Ciherang Hotel & Villa" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Bumi Ciherang Hotel & Villa</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Villa1} alt="Bumi Ciherang Hotel & Villa" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Bumi Ciherang Hotel & Villa</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Villa1} alt="Bumi Ciherang Hotel & Villa" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Bumi Ciherang Hotel & Villa</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Villa1} alt="Bumi Ciherang Hotel & Villa" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Bumi Ciherang Hotel & Villa</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Villa1} alt="Bumi Ciherang Hotel & Villa" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Bumi Ciherang Hotel & Villa</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Villa1} alt="Bumi Ciherang Hotel & Villa" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Bumi Ciherang Hotel & Villa</h5>
                                </div>
                            </div>
                        </div>
                        </Slider>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 text-end">
                        <Link to={"/akomodasi/villa"}>
                            <span className="slider-lainnya fw-semibold">Lainnya.....</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HotelBintang