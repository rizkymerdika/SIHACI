import Wisata1 from '../assets/wisata1.png'

function WisataCianjur() {
  return (
    <>
        <div className="container content-1">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h1 className='content-1-head fw-semibold'>Wisata Cianjur</h1>
                    <p className='content-1-text '>Selamat datang di Cianjur, destinasi pariwisata yang memukau di Jawa Barat! Dikelilingi oleh keindahan alam yang luar biasa, Cianjur menawarkan pesona air terjun spektakuler, seperti Curug Cikaso, dan sumber air panas alami yang menawarkan relaksasi dan kesegaran. Selain itu, keanekaragaman budaya, kuliner khas Cianjur yang lezat seperti nasi liwet dan soto Cianjur, serta akses mudah dan akomodasi yang nyaman menjadikan Cianjur sebagai pilihan ideal untuk pengalaman liburan yang tak terlupakan. Jelajahi keindahan alam yang menakjubkan, nikmati kekayaan budaya, dan cicipi kelezatan kuliner khas Cianjur</p>
                </div>
                <div className="col-12 col-lg-6 d-block text-center">
                    <img src={Wisata1} className='wisata1' width={'100%'}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default WisataCianjur