

function Banner({image, title}) {
  return (
    <div id='carousel' className='carousel slide mt-2'>
        <div className='carousel-inner carousel-shadow'>
            <div className='carousel-item active'>
                <img src={image} className="slide-image d-block" alt={title}/>
                <div className="carousel-caption d-block">
                    <h1 className="opacity-50 mb-lg-5">{title}</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner