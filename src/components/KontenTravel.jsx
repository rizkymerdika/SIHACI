import Banner from "./Banner"
import Banner4 from "../assets/banner4.png"
import Travel5 from "../assets/travel5.png"
import Map from "./Map"
import Website from "../assets/website.png"
import Facebook from "../assets/logos_facebook.png"
import Instagram from "../assets/logos_instagram.png"
import Twitter from "../assets/twitter.png"

function KontenTravel() {
  return (
    <>
        <Banner image={Banner4}/>
        <div className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="content-2-head fw-semibold">Siliwangi Trans</h1>
                    </div>
                </div>
                <div className="row py-4 py-sm-5 px-3 konten-outline">
                    <div className="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
                        <p className='my-0 content-2-text'>Siliwangi Trans adalah pelopor layanan transportasi shuttle senantiasa mengantarkan anda dengan aman dan nyaman, juga melayani pengiriman paket/cargo yang cepat dan terpercaya, dengan rute antar kota Bandung, Jakarta, Sukabumi, Cianjur, Subang. Kini tersedia Siliwangi Tour and Rental jasa sewa kendaraan untuk keperluan wisata anda.</p>
                        <a href="https://siliwangitrans.com/" className="text-decoration-underline text-primary" target="_blank">Pesan Tiket</a>
                        <div className="mt-4">
                            <span className="d-block content-2-text">Jam Keberangkatan</span>
                            <span className="d-block content-2-text">05.00 - 21.00 (Keberangkatan Sejam Sekali)</span>
                        </div>
                        <div className="mt-4">
                            <span className="d-block content-2-text">Harga Tiket</span>
                            <span className="d-block content-2-text">Cianjur - Jakarta : Rp.95.000</span>
                            <span className="d-block content-2-text">Cianjur - Bandung : Rp.55.000</span>
                            <span className="d-block content-2-text">Cianjur - Sukabumi : Rp.45.000</span>
                        </div>
                        <p className='my-0 mt-4 content-2-text'>Jl. Dr. Muwardi No. 64 43215 Cianjur jawa barat · 53.80 km. </p>
                        <span className="d-block content-2-text">Telepon: +62 263 9106718</span>
                        <div className="link-account-contacts d-flex justify-content-start mt-4">
                            <div>
                                <a href="#">
                                    <img src={Website} alt="Website" />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src={Facebook} alt="Facebook" />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src={Instagram} alt="Instagram" />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src={Twitter} alt="Twitter" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                        <img src={Travel5} alt='Siliwangi Trans' width={"100%"} className="img-wisata-outline"/>
                    </div>
                </div>
            </div>
        </div>
        <Map mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.647365170678!2d107.14079100748316!3d-6.8126758185942755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6852e33598ff17%3A0xeb5ef38613490421!2sSiliwangi%20Trans%20Cianjur!5e0!3m2!1sen!2sid!4v1684856514775!5m2!1sen!2sid"}/>
    </>
  )
}

export default KontenTravel