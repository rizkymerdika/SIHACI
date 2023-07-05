import Cinematic from "../assets/cinematic.mp4"
import Slide1 from "../assets/slide1.png"
import Slide2 from "../assets/slide2.png"
import Slide3 from "../assets/slide3.png"

function Carousel() {
  return (
    <div id='carousel' className='carousel slide mt-2'>
        <div className='carousel-inner carousel-shadow'>
            <div className='carousel-item active'>
                {/* <video width="100%" height="240" alt="Curug Citambur" className="d-block w-100" autoPlay loop>
                    <source src={Cinematic} type="video/mp4"/>
                </video> */}
                <img src={Slide1} className="slide-image d-block" alt="Taman Bunga Nusantara"/>
                <div className="carousel-caption d-block">
                    <h1 className="opacity-50 mb-lg-5">Taman Bunga Nusantara</h1>
                </div>
            </div>
            <div className='carousel-item'>
                <img src={Slide2} className="slide-image d-block" alt="Taman Bunga Nusantara"/>
                <div className="carousel-caption d-block">
                    <h1 className="opacity-50 mb-lg-5">Curug Cikondang</h1>
                </div>
            </div>
            <div className='carousel-item'>
                <img src={Slide3} className="slide-image d-block" alt="Gunung Padang"/>
                <div className="carousel-caption d-block">
                    <h1 className="opacity-50 mb-lg-5">Ocean View</h1>
                </div>
            </div>
        </div>
        <button className='carousel-control-prev' type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className='carousel-control-next' type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Carousel