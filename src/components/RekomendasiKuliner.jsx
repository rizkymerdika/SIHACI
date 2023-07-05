import RekomenKuliner1 from '../assets/kuliner3.png'
import RekomenKuliner2 from '../assets/kuliner4.png'
import RekomenKuliner3 from '../assets/kuliner5.png'

function RekomendasiKuliner() {
  return (
    <div className="mt-5">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="content-2-head fw-semibold">Rekomendasi Kuliner</h1>
                </div>
            </div>
        </div>
        <div id="carouselRekomenKuliner" className="carousel slide mt-3">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselRekomenKuliner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselRekomenKuliner" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselRekomenKuliner" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner py-5">
                <div className="carousel-item active pb-3 pb-lg-0">
                    <div className='container py-lg-4'>
                        <div className="row gx-5">
                            <div className="col-lg-6 order-2 order-lg-1 mt-2 mt-lg-0">
                                <h2 className='content-2-subhead my-0 fw-semibold text-white'>Ikan Bakar Cianjur</h2>
                                <p className='my-0 mt-2 mt-lg-4 content-2-text text-white'>Ikan Bakar Cianjur merupakan hidangan khas yang menawarkan keunikan dan cita rasa yang memikat. Ikan segar, seperti ikan nila, mujair, atau gurame, dipanggang dengan sempurna hingga dagingnya menjadi lembut dan beraroma menggugah selera. Salah satu ciri khasnya  yang memberikan cita rasa yang kaya dan lezat. Hidangan ini juga dilengkapi dengan sambal terasi pedas yang menyertainya, memberikan sensasi pedas yang menggigit. Keunikan Ikan Bakar Cianjur terletak pada kelezatan dan kesegaran ikan yang dipadukan dengan bumbu rempah yang khas, menciptakan harmoni cita rasa yang menggoda selera. Hidangan ini adalah wajib dicoba bagi para pecinta makanan laut dan pengunjung yang ingin menjelajahi kelezatan kuliner tradisional Cianjur.</p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                                <img src={RekomenKuliner1} alt='Ikan Bakar Cianjur' width={"100%"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item pb-3 pb-lg-0">
                    <div className='container py-lg-4'>
                        <div className="row gx-5">
                            <div className="col-lg-6 order-2 order-lg-1 mt-2 mt-lg-0">
                                <h2 className='content-2-subhead my-0 fw-semibold text-white'>Bubur Cianjur</h2>
                                <p className='my-0 mt-2 mt-lg-4 content-2-text text-white'>Bubur Cianjur adalah hidangan yang unik dan menggugah selera dengan kelembutan dan kelezatan yang khas. Bubur ini terbuat dari beras yang dimasak dengan santan dan rempah-rempah, menciptakan tekstur yang lembut dan kental. Keunikan bubur Cianjur terletak pada topping-topping yang melimpah, seperti serundeng kelapa yang gurih, irisan daun bawang yang segar, kerupuk renyah, serta pelengkap lain seperti telur, daging ayam, atau ikan asin. Gabungan antara cita rasa santan yang creamy dan bumbu rempah yang kaya menciptakan harmoni rasa yang lezat. Bubur Cianjur adalah hidangan sarapan atau makanan ringan yang cocok dinikmati di segala waktu, dan merupakan pilihan yang populer di Cianjur.</p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                                <img src={RekomenKuliner2} alt='Bubur Cianjur' width={"100%"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item pb-3 pb-lg-0">
                    <div className='container py-lg-4'>
                        <div className="row gx-5">
                            <div className="col-lg-6 order-2 order-lg-1 mt-2 mt-lg-0">
                                <h2 className='content-2-subhead my-0 fw-semibold text-white'>Geco</h2>
                                <p className='my-0 mt-2 mt-lg-4 content-2-text text-white'>Geco Cianjur adalah makanan unik yang menjadi ciri khas daerah tersebut. Geco terbuat dari tepung beras yang diolah dengan cara yang khas, yaitu dengan cara dipipihkan dan digoreng hingga berwarna keemasan dan renyah. Keunikan Geco Cianjur terletak pada teksturnya yang ringan dan renyah di luar, namun lembut di dalamnya. Rasanya yang gurih dan sedikit manis membuatnya menjadi camilan yang menggugah selera. Makanan ini sering disajikan dengan taburan kelapa parut yang telah dicampur dengan gula kelapa, memberikan tambahan rasa dan tekstur yang lezat. Geco Cianjur adalah pilihan yang populer bagi para wisatawan dan pengunjung yang ingin mencicipi makanan tradisional yang lezat dan unik di Cianjur.</p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                                <img src={RekomenKuliner3} alt='Geco' width={"100%"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RekomendasiKuliner