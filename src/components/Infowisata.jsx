import Wisataalam1 from '../assets/wisataalam1.png'
import Kuliner1 from '../assets/kuliner1.png'
import Kebudayaan1 from '../assets/kebudayaan1.png'

function Infowisata() {
  return (
    <>
        <div className="container infowisata mt-5">
            <div className="row">
                <div className="col text-center">
                    <h1 className="content-2-head fw-semibold">Informasi Tempat Wisata</h1>
                </div>
            </div>
            <div className="row align-items-center mt-4">
                <div className="col-12 col-lg-6 d-block text-center">
                    <img src={Wisataalam1} alt='Curug Cikondang' width={"100%"}/>
                </div>
                <div className="col-12 col-lg-6 my-3 my-lg-0">
                    <h2 className='content-2-subhead my-0 fw-semibold'>Wisata Alam</h2>
                    <p className='my-0 mt-1 content-2-text'>Cianjur, di Provinsi Jawa Barat, menawarkan keindahan wisata alam yang memukau. Dari air terjun yang gemercik mempesona, hingga danau-danau yang tenang dan dikelilingi oleh panorama pegunungan yang menakjubkan, setiap sudut Cianjur memancarkan pesona alam yang luar biasa. Hutan yang lebat, perkebunan teh yang hijau, serta pemandangan gunung yang menjulang memberikan pengalaman alam yang menakjubkan bagi para pengunjung. Cianjur adalah tempat yang sempurna untuk melarikan diri dari hiruk-pikuk kehidupan sehari-hari dan menikmati keindahan alam yang menyejukkan jiwa.</p>
                </div>
            </div>
            <div className="row align-items-center flex-row-reverse mt-1">
                <div className="col-12 col-lg-6 d-block text-center">
                    <img src={Kuliner1} alt='Ikan Bakar Cianjur' width={"100%"}/>
                </div>
                <div className="col-12 col-lg-6 my-3 my-lg-0">
                    <h2 className='content-2-subhead my-0 fw-semibold'>Kuliner</h2>
                    <p className='my-0 mt-1 content-2-text'>Cianjur, tidak hanya mempesona dengan keindahan alamnya, tetapi juga menggoda dengan kuliner khasnya. Di sini, Anda dapat menikmati nasi liwet yang lezat dengan aroma rempah yang kaya. Dengan keunikan dan kelezatan kuliner Cianjur, pengunjung akan disajikan dengan pengalaman kuliner yang tak terlupakan.</p>
                </div>
            </div>
            <div className="content-2-subhead row align-items-center mt-1">
                <div className="col-12 col-lg-6 d-block text-center">
                    <img src={Kebudayaan1} alt='Hari Jadi Cianjur' width={"100%"}/>
                </div>
                <div className="col-12 col-lg-6 my-3 my-lg-0">
                    <h2 className='my-0 fw-semibold'>Kebudayaan</h2>
                    <p className='my-0 mt-1 content-2-text'>Cianjur, di Provinsi Jawa Barat, memiliki kebudayaan yang kaya dan beragam. Masyarakat Cianjur masih sangat menghormati dan menjaga adat istiadat serta tradisi budaya mereka. Dengan pengrajin lokal yang menghasilkan karya-karya indah berupa patung, hiasan dinding, dan perabotan rumah tangga. Festival dan perayaan tradisional, seperti Seren Taun, memperkuat ikatan sosial masyarakat dan mempertahankan warisan budaya mereka. Cianjur adalah tempat yang menarik untuk merasakan dan mempelajari kekayaan budaya Jawa Barat yang otentik.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Infowisata