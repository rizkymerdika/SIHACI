import Slider from "react-slick"
import Wisatabuatan1 from '../assets/wisatabuatan1.png'
import Wisatabuatan2 from '../assets/wisatabuatan2.png'
import Wisatabuatan3 from '../assets/wisatabuatan3.png'
import Wisatabuatan4 from '../assets/wisatabuatan4.png'
import { Link } from "react-router-dom"

function WisataBuatan() {
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
        <h1 className="content-2-head fw-semibold text-center">Wisata Buatan</h1>
        <div className="wisata-slider">
            <div className="container pt-3">
                <div className="row mt-3">
                    <div className="col-12">
                        <Slider {...settings}>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisatabuatan1} alt="Taman Bunga Nusantara" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Taman Bunga Nusantara</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisatabuatan2} alt="Little Venice" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Little Venice</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisatabuatan3} alt="Canopy Trail Cibodas" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Canopy Trail Cibodas</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisatabuatan4} alt="The Nice Funtastic Park" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">The Nice Funtastic Park</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisatabuatan1} alt="Taman Bunga Nusantara" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Taman Bunga Nusantara</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisatabuatan2} alt="Little Venice" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Little Venice</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisatabuatan3} alt="Canopy Trail Cibodas" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Canopy Trail Cibodas</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisatabuatan4} alt="The Nice Funtastic Park" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">The Nice Funtastic Park</h5>
                                </div>
                            </div>
                        </div>
                        </Slider>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 text-end">
                        <Link to={"/objekwisata/wisatabuatan"}>
                            <span className="slider-lainnya fw-semibold">Lainnya.....</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WisataBuatan