import Banner from "./Banner"
import Banner3 from "../assets/banner3.png"
import Hotel1 from "../assets/hotel1.png"
import Map from "./Map"
import Website from "../assets/website.png"
import Facebook from "../assets/logos_facebook.png"
import Instagram from "../assets/logos_instagram.png"
import Twitter from "../assets/twitter.png"
import Youtube from "../assets/youtube.png"

function KontenHotel() {
  return (
    <>
        <Banner image={Banner3} title={"Hotel Cianjur Cipanas"}/>
        <div className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="content-2-head fw-semibold">Hotel Cianjur Cipanas</h1>
                    </div>
                </div>
                <div className="row py-4 py-sm-5 px-3 konten-outline">
                    <div className="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
                        <p className='my-0 content-2-text'>Hotel yang luas ini berjarak 7 km dari Taman Bunga Nusantara dan dapat diakses dengan berjalan kaki 10 menit dari Istana Cipanas yang dibangun pada abad ke-18. Kamar sederhana dan suite menawarkan Wi-Fi gratis, TV layar datar, kulkas mini, serta fasilitas untuk membuat teh dan kopi. Juga tersedia rumah berlantai 2 dan berdinding kayu dengan ruang tamu. Parkir gratis. Fasilitas lainnya meliputi kafe dan restoran, serta kolam renang indoor berpemanas, pusat kebugaran, dan sauna. Juga terdapat lapangan bulu tangkis, tenis meja, jalur joging, dan taman bermain. Ruang serbaguna tersedia.</p>
                        <p className='my-0 mt-4 content-2-text'>Harga per Malam : Rp.350.000 - Rp.550.000</p>
                        <p className='my-0 mt-4 content-2-text'>Jl. Raya Cipanas No.KM. 81, RW.3, Gadog, Kec. Pacet, Kabupaten Cianjur, Jawa Barat 43253</p>
                        <span className="content-2-text">(0263) 516480</span>
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
                            <div>
                                <a href="#">
                                    <img src={Youtube} alt="Youtube" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                        <img src={Hotel1} alt='Hotel Cianjur Cipanas' width={"100%"} className="img-wisata-outline"/>
                    </div>
                </div>
            </div>
        </div>
        <Map mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.276008990691!2d107.0403521739597!3d-6.736144765862275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b3af6f8e6b5b%3A0x4fa89d78fb2dc43d!2sHotel%20Cianjur%20Cipanas!5e0!3m2!1sen!2sid!4v1684853622891!5m2!1sen!2sid"}/>
    </>
  )
}

export default KontenHotel