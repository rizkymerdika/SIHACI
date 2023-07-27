import {BsFacebook, BsYoutube} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {IoLogoTiktok} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function footer() {
    useEffect(() => {
        AOS.init()
      }, [])

  return (
    <div className='foot mt-5' data-aos='fade-up'>
        <footer className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-3 mt-4">
                    <h3 className='fw-semibold footer-content'>Hubungi Kami</h3>
                    <p className='footer-content'>Alamat: Jl. Aria Wiratanudatar No.50, Bojong, Kec. Karangtengah, Kabupaten Cianjur, Jawa Barat 43281</p>
                    <p className='footer-content'>Telepon: (0263) 269718</p>
                </div>
                <div className="col-sm-6 col-lg-3 mt-4">
                    <h3 className='fw-semibold footer-content'>Menu Website</h3>
                    <li className='footer-content mb-2'><Link to={"/objekwisata"}>Objek Wisata</Link></li>
                    <li className='footer-content mb-2'><Link to={"/akomodasi"}>Akomodasi</Link></li>
                    <li className='footer-content mb-2'><Link to={"/kuliner"}>Kuliner</Link></li>
                    <li className='footer-content mb-2'><Link to={"/travel"}>Travel</Link></li>
                    <li className='footer-content mb-2'><Link to={"/event"}>Event</Link></li>
                </div>
                <div className="col-sm-6 col-lg-3 mt-4">
                    <h3 className='fw-semibold footer-content'>Akses Disbudpar</h3>
                    <li className='footer-content mb-2'><a href="http://simparda.cianjurkab.go.id/" target='_blank'>SIMPARDA</a></li>
                    <li className='footer-content mb-2'><a href="http://sisrekor.cianjurkab.go.id/" target='_blank'>SISREKOR</a></li>
                    <li className='footer-content mb-2'><a href="http://siprakor.cianjurkab.go.id/" target='_blank'>SIPRAKOR</a></li>
                    <li className='footer-content mb-2'><a href="https://play.google.com/store/apps/details?id=com.embarcadero.SiHaci&hl=in&gl=US" target='_blank'>SIHACI</a></li>
                </div>
                <div className="col-sm-6 col-lg-3 mt-4">
                    <h3 className='fw-semibold footer-content'>Media Partner</h3>
                    <li className='footer-content mb-2'>Sistem Input Data Hotel</li>
                </div>
            </div>
            <div className='row justify-content-center mt-5'>
                <div className='col-12 text-center'>
                    <h3 className='fw-semibold footer-content m-auto'>Follow Us</h3>
                </div>
                <div className='col-2 col-md-1 text-center my-3'>
                    <label>
                        <a href="https://www.facebook.com/profile.php?id=100079838143340" target='_blank'>
                            <BsFacebook size={'100%'}/>
                        </a>
                    </label>
                </div>
                <div className='col-2 col-md-1 text-center my-3'>
                    <label>
                        <a href="https://www.instagram.com/hayuamengkacianjur/" target='_blank'>
                            <RiInstagramFill size={'100%'}/>
                        </a>
                    </label>
                </div>
                <div className='col-2 col-md-1 text-center my-3'>
                    <label>
                        <a href="https://www.tiktok.com/@disbudparcianjur" target='_blank'>
                            <IoLogoTiktok size={'100%'}/>
                        </a>
                    </label>
                </div>
                <div className='col-2 col-md-1 text-center my-3'>
                    <label>
                        <a href="https://www.youtube.com/@disbudpar.cianjur" target='_blank'>
                            <BsYoutube size={'100%'}/>
                        </a>    
                    </label>   
                </div>
                <div className='col-12 border border-2 border-white'></div>
                <div className='col-12 text-center my-4'>
                    <span>Copyright - SIHACI 2023</span>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default footer