import RekomenAkomodasi1 from "../assets/akomodasi1.png"
import RekomenAkomodasi2 from "../assets/akomodasi2.png"
import RekomenAkomodasi3 from "../assets/akomodasi3.png"

function RekomendasiAkomodasi() {
  return (
    <div className="mt-5">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="content-2-head fw-semibold">Rekomendasi Penginapan</h1>
                </div>
            </div>
        </div>
        <div id="carouselRekomenPenginapan" className="carousel slide mt-3">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselRekomenPenginapan" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselRekomenPenginapan" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselRekomenPenginapan" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner py-5">
                <div className="carousel-item active pb-3 pb-lg-0">
                    <div className='container py-lg-4'>
                        <div className="row gx-5">
                            <div className="col-lg-6 order-2 order-lg-1 mt-2 mt-lg-0">
                                <h2 className='content-2-subhead my-0 fw-semibold text-white'>Hotel Cianjur Cipanas</h2>
                                <p className='my-0 mt-2 mt-lg-4 content-2-text text-white'>Hotel yang luas ini berjarak 7 km dari Taman Bunga Nusantara dan dapat diakses dengan berjalan kaki 10 menit dari Istana Cipanas yang dibangun pada abad ke-18. Kamar sederhana dan suite menawarkan Wi-Fi gratis, TV layar datar, kulkas mini, serta fasilitas untuk membuat teh dan kopi. Juga tersedia rumah berlantai 2 dan berdinding kayu dengan ruang tamu. Parkir gratis. Fasilitas lainnya meliputi kafe dan restoran, serta kolam renang indoor berpemanas, pusat kebugaran, dan sauna. Juga terdapat lapangan bulu tangkis, tenis meja, jalur joging, dan taman bermain. Ruang serbaguna tersedia.</p>
                                <p className='my-0 mt-2 mt-lg-4 content-2-text text-white'>Jl. Raya Cipanas No.KM. 81, RW.3, Gadog, Kec. Pacet, Kabupaten Cianjur, Jawa Barat 43253</p>
                                <p className='my-0 content-2-text text-white'>(0263) 516480</p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                                <img src={RekomenAkomodasi1} alt='Hotel Cianjur Cipanas' width={"100%"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item pb-3 pb-lg-0">
                    <div className='container py-lg-4'>
                        <div className="row gx-5">
                            <div className="col-lg-6 order-2 order-lg-1 mt-2 mt-lg-0">
                                <h2 className='content-2-subhead my-0 fw-semibold text-white'>Shine BnB Cianjur</h2>
                                <p className='my-0 mt-2 mt-lg-4 content-2-text text-white'>Hotel simpel di area dengan beberapa pertokoan dan restoran kasual ini berjarak 9 menit berjalan kaki dari Masjid Agung Cianjur, 1 km dari stasiun kereta Cianjur, dan 3 km dari Taman Prawatasari. Kamar simpel dengan mural dinding menyediakan Wi-Fi, TV, dan ketel. Beberapa kamar dilengkapi kulkas mini, area duduk, tempat tidur loteng, atau tempat tidur tingkat. Tersedia room service. Terdapat kafe santai dengan kursi di area terbuka. Fasilitas lainnya meliputi tempat parkir dan sarapan prasmanan.</p>
                                <p className='my-0 mt-2 mt-lg-4 content-2-text text-white'>Jl. Selamat No.60, Bojongherang, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43213</p>
                                <p className='my-0 content-2-text text-white'>(0263) 2913226</p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                                <img src={RekomenAkomodasi2} alt='Shine BnB Cianjur' width={"100%"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item pb-3 pb-lg-0">
                    <div className='container py-lg-4'>
                        <div className="row gx-5">
                            <div className="col-lg-6 order-2 order-lg-1 mt-2 mt-lg-0">
                                <h2 className='content-2-subhead my-0 fw-semibold text-white'>Gino Feruci Cianjur</h2>
                                <p className='my-0 mt-2 mt-lg-4 content-2-text text-white'>Hotel indah yang terletak di Jalan Nasional Rute 3 yang rindang ini berjarak 6 menit berjalan kaki dari Citimall Cianjur dan 3 km dari Masjid Agung Cianjur. Kamar santai memiliki Wi-Fi, TV layar datar, serta alat pembuat teh dan kopi. Suite dilengkapi area duduk. Fasilitas meliputi restoran luas dengan teras, serta kolam renang outdoor dan pusat kebugaran. Tersedia sarapan.</p>
                                <p className='my-0 mt-2 mt-lg-4 content-2-text text-white'>Jl. KH Abdullah Bin Nuh, Pamoyanan, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43211</p>
                                <p className='my-0 content-2-text text-white'>(0263) 2918888</p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                                <img src={RekomenAkomodasi3} alt='Gino Feruci Cianjur' width={"100%"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RekomendasiAkomodasi