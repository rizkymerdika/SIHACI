import Galeri1 from '../assets/galeri1.png'
import Galeri2 from '../assets/galeri2.png'
import Galeri3 from '../assets/galeri3.png'
import Galeri4 from '../assets/galeri4.png'
import Galeri5 from '../assets/galeri5.png'
import Galeri6 from '../assets/galeri6.png'
import Galeri7 from '../assets/galeri7.png'

function GaleriWisata() {
  return (
    <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="content-3-head fw-semibold">Galeri Wisata Cianjur</h1>
                </div>
            </div>
            <div className="row justify-content-between mt-4">
                <div className="col-12 col-sm-6 col-lg-3 order-1 order-lg-1 d-block text-center">
                    <img src={Galeri1} alt="Masjid Agung Cianjur" className='galeri galeri-1'/>
                </div>
                <div className="col-12 col-lg-4 order-3 order-lg-2 pt-3 pt-lg-0">
                    <div className='row h-100'>
                        <div className='col-12 pb-sm-2'>
                            <img src={Galeri2} alt="Kebun Teh" className='galeri galeri-2'/>
                        </div>
                        <div className='col-sm-6 pt-3 pt-sm-2'>
                            <img src={Galeri3} alt="Bubur" className='galeri galeri-3'/>
                        </div>
                        <div className='col-sm-6 pt-3 pt-sm-2'>
                            <img src={Galeri4} alt="" className='galeri galeri-4'/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 order-2 order-lg-3 pt-3 pt-sm-0 d-block text-center">
                    <img src={Galeri5} alt="Curug Cikondang" className='galeri galeri-5'/>
                </div>
                <div className="col-12 col-lg-2 order-4 order-lg-4 pt-3 pt-lg-0">
                    <div className='row h-100'>
                        <div className='col-sm-6 col-lg-12 pb-lg-2'>
                            <img src={Galeri6} alt="Pandan Wangi" className='galeri galeri-6'/>
                        </div>
                        <div className='col-sm-6 col-lg-12 pt-3 pt-sm-0 pt-lg-2'>
                            <img src={Galeri7} alt="Ocean View" className='galeri galeri-7'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default GaleriWisata