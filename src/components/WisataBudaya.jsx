import Slider from "react-slick"
import Wisatabudaya1 from '../assets/kebudayaan2.png'
import Wisatabudaya2 from '../assets/kebudayaan3.png'
import Wisatabudaya3 from '../assets/kebudayaan4.png'
import Wisatabudaya4 from '../assets/kebudayaan5.png'
import { Link } from "react-router-dom"

function WisataBudaya() {
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
        <h1 className="content-2-head fw-semibold text-center">Wisata Budaya</h1>
        <div className="wisata-slider">
            <div className="container pt-3">
                <div className="row mt-3">
                    <div className="col-12">
                        <Slider {...settings}>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisatabudaya1} alt="Seni Kuda Kosong" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Seni Kuda Kosong</h5>
                                </div>
                            </div>
                        </div>  
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisatabudaya2} alt="Ngaos" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Ngaos</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisatabudaya3} alt="Kampung Adat Miduana" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Kampung Adat Miduana</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisatabudaya4} alt="Maenpo" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Maenpo</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisatabudaya1} alt="Seni Kuda Kosong" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Seni Kuda Kosong</h5>
                                </div>
                            </div>
                        </div>  
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisatabudaya2} alt="Ngaos" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Ngaos</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisatabudaya3} alt="Kampung Adat Miduana" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Kampung Adat Miduana</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisatabudaya4} alt="Maenpo" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Maenpo</h5>
                                </div>
                            </div>
                        </div>
                        </Slider>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 text-end">
                        <Link to={"/objekwisata/wisatabudaya"}>
                            <span className="slider-lainnya fw-semibold">Lainnya.....</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WisataBudaya