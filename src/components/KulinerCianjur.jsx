import Kuliner6 from '../assets/kuliner6.png'
import Kuliner7 from '../assets/kuliner7.png'
import Kuliner8 from '../assets/kuliner8.png'
import Kuliner9 from '../assets/kuliner9.png'
import Kuliner10 from '../assets/kuliner10.png'
import Kuliner11 from '../assets/kuliner11.png'
import Kuliner12 from '../assets/kuliner12.png'
import Kuliner13 from '../assets/kuliner13.png'
import { Link } from 'react-router-dom'

function KulinerCianjur() {
  return (
    <div className="mt-5">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="content-2-head fw-semibold">Kuliner Cianjur</h1>
                </div>
            </div>
        </div>
        <div id='bgKulinerCianjur' className='mt-3'>
            <div className="container">
                <div className="row flex-wrap justify-content-start pt-5">
                    <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
                        <Link to="/kuliner/rekomendasikuliner/detailkuliner">
                        <div className="card kuliner-card border-0 m-auto">
                            <img src={Kuliner6} alt="Tauco" className='img-kuliner-outline'/>
                            <div className="card-body text-center flex-column justify-content-between">
                                <h4 className="card-title fw-semibold my-0">Tauco</h4>
                                <p className="card-text">Toko Tauco Cap Meong No.1</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
                        <div className="card kuliner-card border-0 m-auto">
                            <img src={Kuliner7} alt="Ikan Bakar Cianjur" className='img-kuliner-outline'/>
                            <div className="card-body text-center flex-column justify-content-between">
                                <h4 className="card-title fw-semibold my-0">Ikan Bakar</h4>
                                <p className="card-text">Ikan Bakar Cianjur</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
                        <div className="card kuliner-card border-0 m-auto">
                            <img src={Kuliner8} alt="Manisan" className='img-kuliner-outline'/>
                            <div className="card-body text-center flex-column justify-content-between">
                                <h4 className="card-title fw-semibold my-0">Manisan</h4>
                                <p className="card-text">Toko Manisan Sari Manis</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
                        <div className="card kuliner-card border-0 m-auto">
                            <img src={Kuliner9} alt="Lontong" className='img-kuliner-outline'/>
                            <div className="card-body text-center flex-column justify-content-between">
                                <h4 className="card-title fw-semibold my-0">Lontong</h4>
                                <p className="card-text">Lontong Garasi</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
                        <div className="card kuliner-card border-0 m-auto">
                            <img src={Kuliner10} alt="Laksa" className='img-kuliner-outline'/>
                            <div className="card-body text-center flex-column justify-content-between">
                                <h4 className="card-title fw-semibold my-0">Laksa</h4>
                                <p className="card-text">Laksa Kang Aam</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
                        <div className="card kuliner-card border-0 m-auto">
                            <img src={Kuliner11} alt="Sate Maranggi" className='img-kuliner-outline'/>
                            <div className="card-body text-center flex-column justify-content-between">
                                <h4 className="card-title fw-semibold my-0">Sate Maranggi</h4>
                                <p className="card-text">Sate Maranggi Sari Asih</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
                        <div className="card kuliner-card border-0 m-auto">
                            <img src={Kuliner12} alt="Geco" className='img-kuliner-outline'/>
                            <div className="card-body text-center flex-column justify-content-between">
                                <h4 className="card-title fw-semibold my-0">Geco</h4>
                                <p className="card-text">Geco Nusasari Pak Iding</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
                        <div className="card kuliner-card border-0 m-auto">
                            <img src={Kuliner13} alt="Bubur Cianjur" className='img-kuliner-outline'/>
                            <div className="card-body text-center flex-column justify-content-between">
                                <h4 className="card-title fw-semibold my-0  ">Bubur</h4>
                                <p className="card-text">Bubur Cianjur</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 text-end">
                        <Link to={"/kuliner/rekomendasikuliner"}>
                            <span className="slider-lainnya text-white fw-semibold">Lainnya.....</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KulinerCianjur