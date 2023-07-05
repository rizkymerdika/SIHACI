import Slider from "react-slick"
import Wisataalam2 from '../assets/wisataalam2.png'
import Wisataalam3 from '../assets/wisataalam3.png'
import Wisataalam4 from '../assets/wisataalam4.png'
import Wisataalam5 from '../assets/wisataalam5.png'
import { Link } from 'react-router-dom'

function WisataAlam() {
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
        <h1 className="content-2-head fw-semibold text-center">Wisata Alam</h1>
        <div className="wisata-slider">
            <div className="container pt-3">
                <div className="row mt-3">
                    <div className="col-12">
                        <Slider {...settings}>
                        <div>
                            <Link to="/objekwisata/wisataalam/detailwisata">
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisataalam2} alt="Kebun Raya Cibodas" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Kebun Raya Cibodas</h5>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisataalam3} alt="Arum Jeram Cikundul" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Arum Jeram Cikundul</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisataalam4} alt="Curug Luhur" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Curug Luhur</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisataalam5} alt="Talaga Biru" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Talaga Biru</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisataalam5} alt="Talaga Biru" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Talaga Biru</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisataalam5} alt="Talaga Biru" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Talaga Biru</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisataalam5} alt="Talaga Biru" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Talaga Biru</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card objek-wisata-card m-auto">
                                <img src={Wisataalam5} alt="Talaga Biru" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title my-0 py-3 text-center fw-bold">Talaga Biru</h5>
                                </div>
                            </div>
                        </div>
                        </Slider>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 text-end">
                        <Link to={'/objekwisata/wisataalam'}>
                            <span className="slider-lainnya fw-semibold">Lainnya.....</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WisataAlam