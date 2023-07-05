import RekomenWisata1 from '../assets/rekomenwisata1.png'
import RekomenWisata2 from '../assets/rekomenwisata2.png'
import RekomenWisata3 from '../assets/rekomenwisata3.png'

function RekomendasiWisata() {
  return (
    <div className="mt-5">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="content-2-head fw-semibold">Rekomendasi Wisata</h1>
                </div>
            </div>
        </div>
        <div id="carouselRekomenWisata" className="carousel slide mt-3">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselRekomenWisata" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselRekomenWisata" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselRekomenWisata" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner py-5">
                <div className="carousel-item active pb-3 pb-lg-0">
                    <div className='container py-lg-4'>
                        <div className="row gx-5">
                            <div className="col-lg-6 order-2 order-lg-1 mt-2 mt-lg-0">
                                <h2 className='content-2-subhead my-0 fw-semibold text-white'>Gunung Padang</h2>
                                <p className='my-0 mt-2 mt-lg-4 content-2-text text-white'>Gunung Padang adalah situs megalitik yang menakjubkan dan memikat dengan keunikan arkeologinya. Situs ini terdiri dari serangkaian struktur batu yang kompleks dan merupakan salah satu situs megalitik terbesar di dunia. Ciri khas Gunung Padang terletak pada piramida terasnya yang mengesankan, yang diyakini memiliki usia ribuan tahun. Keindahan alam sekitar Gunung Padang, dengan lanskap hijau yang memukau, juga menambah daya tarik wisata di situs ini. Gunung Padang adalah tempat yang memukau untuk menggali dan menghargai peninggalan sejarah yang mengagumkan.</p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                                <img src={RekomenWisata1} alt='Gunung Padang' width={"100%"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item pb-3 pb-lg-0">
                    <div className='container py-lg-4'>
                        <div className="row gx-5">
                            <div className="col-lg-6 order-2 order-lg-1 mt-2 mt-lg-0">
                                <h2 className='content-2-subhead my-0 fw-semibold text-white'>Curug Cikondang</h2>
                                <p className='my-0 mt-2 mt-lg-4 content-2-text text-white'>Curug Cikondang, adalah sebuah air terjun yang menakjubkan dengan keindahan alam yang memukau. Dikelilingi oleh hutan lebat dan vegetasi hijau yang melimpah, Curug Cikondang menawarkan pemandangan yang spektakuler. Air terjun ini mengalir deras dari ketinggian, membentuk air terjun yang indah dan menghasilkan gemericik air yang menenangkan. Keindahan alam sekitarnya, dengan suara air yang mengalir, udara segar, dan kehijauan yang melingkupinya, menciptakan atmosfer yang menenangkan dan memanjakan para pengunjung. Curug Cikondang adalah tempat yang sempurna untuk menikmati keindahan alam, bersantai, dan menyatu dengan alam sekitar.</p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                                <img src={RekomenWisata2} alt='Curug Cikondang' width={"100%"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item pb-3 pb-lg-0">
                    <div className='container py-lg-4'>
                        <div className="row gx-5">
                            <div className="col-lg-6 order-2 order-lg-1 mt-2 mt-lg-0">
                                <h2 className='content-2-subhead my-0 fw-semibold text-white'>Kebun Raya Cibodas</h2>
                                <p className='my-0 mt-2 mt-lg-4 content-2-text text-white'>Kebun Raya Cibodas, adalah surga alami yang menawarkan keindahan alam yang menakjubkan. Dikelilingi oleh pegunungan yang hijau dan udara yang segar, kebun raya ini menjadi tempat perlindungan bagi berbagai spesies tanaman langka dan tumbuhan endemik. Keanekaragaman flora yang melimpah, mulai dari pohon tinggi hingga tanaman merambat, menciptakan lanskap yang memukau dan penuh warna. Kebun Raya Cibodas juga terkenal dengan kebun rhododendron yang mempesona, di mana bunga-bunga indah ini mekar dengan warna-warna yang mencolok. Dengan paduan keanekaragaman alam dan keunikan tumbuhan, Kebun Raya Cibodas menjadi tujuan yang sempurna bagi pecinta alam dan penikmat keindahan yang alami.</p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                                <img src={RekomenWisata3} alt='Kebun Raya Cibodas' width={"100%"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RekomendasiWisata