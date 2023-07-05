

function Map({mapSrc}) {
  return (
    <div className="mt-5">
        <iframe src={mapSrc} width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="map"></iframe>
    </div>
  )
}

export default Map