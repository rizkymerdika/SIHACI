import Banner from "./Banner"
import Banner1 from "../assets/banner1.png"
import Wisataalam6 from "../assets/wisataalam6.png"
import Map from "./Map"
import Website from "../assets/website.png"
import Facebook from "../assets/logos_facebook.png"
import Instagram from "../assets/logos_instagram.png"
import Twitter from "../assets/twitter.png"
import Youtube from "../assets/youtube.png"

function KontenWisata() {
  return (
    <>
        <Banner image={Banner1} title={"Kebun Raya Cibodas"}/>
        <div className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="content-2-head fw-semibold">Kebun Raya Cibodas</h1>
                    </div>
                </div>
                <div className="row py-4 py-sm-5 px-3 konten-outline">
                    <div className="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
                        <p className='my-0 content-2-text'>Didirikan pada tanggal 11 April 1852 oleh Johannes Ellias Teijsmann, seorang kurator Kebun Raya Bogor pada waktu itu, dengan nama Bergtuin te Tjibodas (Kebun Pegunungan Cibodas). Pada awalnya dimaksudkan sebagai tempat aklimatisasi jenis-jenis tumbuhan asal luar negeri yang mempunyai nilai penting dan ekonomi yang tinggi, salah satunya adalah Pohon Kina (Cinchona calisaya). Kemudian berkembang menjadi bagian dari Kebun Raya Bogor dengan nama Cabang Balai Kebun Raya Cibodas. Mulai tahun 2003 status Kebun Raya Cibodas menjadi lebih mandiri sebagai Unit Pelaksana Teknis Balai Konservasi Tumbuhan Kebun Raya Cibodas di bawah Pusat Konservasi Tumbuhan Kebun Raya Bogor dalam kedeputian Ilmu Pengetahuan Hayati Lembaga Ilmu Pengetahuan Indonesia (LIPI).</p>
                        <div className="mt-4">
                            <span className="d-block content-2-text">Senin - Jumat: 08.00 - 16.00</span>
                            <span className="d-block content-2-text">Harga Tiket: Rp. 15.500</span>
                        </div>
                        <div className="mt-4">
                            <span className="d-block content-2-text">Sabtu, Minggu & Libur Nasional: 07.00 - 16.00 WIB</span>
                            <span className="d-block content-2-text">Harga Tiket: Rp. 25.500</span>
                        </div>
                        <p className='my-0 mt-4 content-2-text'>Jl. Kebun Raya Cibodas, Sindangjaya, Kec. Cipanas, Kabupaten Cianjur, Jawa Barat, 43253</p>
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
                        <img src={Wisataalam6} alt='Kebun Raya Cibodas' width={"100%"} className="img-wisata-outline"/>
                    </div>
                </div>
            </div>
        </div>
        <Map mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.2340991925394!2d107.00503357395985!3d-6.7412737659135775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b388daf11bdb%3A0x2567561ff74bd6af!2sCibodas%20Botanical%20Garden!5e0!3m2!1sen!2sid!4v1684841722955!5m2!1sen!2sid"}/>
    </>
  )
}

export default KontenWisata