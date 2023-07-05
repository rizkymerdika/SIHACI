import Banner from "./Banner"
import Banner2 from "../assets/banner2.png"
import Kuliner14 from "../assets/kuliner14.png"
import Map from "./Map"
import Instagram from "../assets/logos_instagram.png"
import Shopee from "../assets/shopee.png"
import Tokopedia from "../assets/tokopedia.png"

function KontenKuliner() {
  return (
    <>
        <Banner image={Banner2} title={"Tauco"}/>
        <div className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="content-2-head fw-semibold">Tauco Cap Meong</h1>
                    </div>
                </div>
                <div className="row py-4 py-sm-5 px-3 konten-outline">
                    <div className="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
                        <p className='my-0 content-2-text'>Tauco Cap Meong adalah merek tauco yang terkenal dan memiliki keunikan yang khas. Keunikan Tauco Cap Meong terletak pada cita rasanya yang unik dan berbeda dari tauco pada umumnya. Tauco Cap Meong memiliki rasa yang lebih kuat, pedas, dan sedikit manis. Bumbu-bumbu pilihan yang digunakan dalam proses pembuatannya memberikan kelezatan dan keharmonisan cita rasa yang tak tertandingi. Selain itu, keunikan lainnya adalah aroma yang khas dan menggugah selera. Tauco Cap Meong juga dikemas dalam botol dengan desain yang menarik, menambah daya tarik visual produk ini. Kelezatan dan keunikan Tauco Cap Meong menjadikannya pilihan yang populer bagi penggemar makanan Indonesia dan pecinta kuliner yang mencari rasa autentik dengan sentuhan pedas yang khas.</p>
                        <p className='my-0 mt-4 content-2-text'>Jl. Raya Cipanas Cianjur Km 5 Desa Cijedil Desa Cijedil Kecamatan Cugenang Kabupaten Cianjur, 43252</p>
                        <div className="link-account-contacts d-flex justify-content-start mt-4">
                            <div>
                                <a href="#">
                                    <img src={Instagram} alt="Instagram" />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src={Shopee} alt="Shopee" />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src={Tokopedia} alt="Tokopedia" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                        <img src={Kuliner14} alt='Tauco Cap meong' width={"100%"} className="img-wisata-outline"/>
                    </div>
                </div>
            </div>
        </div>
        <Map mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7354833436857!2d107.09990067396065!3d-6.801999966524339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6852a011bacd53%3A0xda93cafd072b23fb!2sToko%20Tauco%20Cap%20Meong!5e0!3m2!1sen!2sid!4v1684852599153!5m2!1sen!2sid"}/>
    </>
  )
}

export default KontenKuliner