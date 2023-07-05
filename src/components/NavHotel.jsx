import Profile from '../assets/profile.png'

function NavHotel() {
  return (
    <div className='nav-admin'>
        <nav className="container h-100">
            <div className="row h-100 align-items-center justify-content-end">
                <div className="col-12 d-flex align-items-center justify-content-end text-end">
                    <div className='me-2'><span>Hotel Cianjur Cipanas</span></div>
                    <img src={Profile} alt="Profile" className='profile'/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavHotel