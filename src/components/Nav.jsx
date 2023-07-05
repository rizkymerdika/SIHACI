import { Link, useNavigate } from 'react-router-dom'
import SihaciLogo from '../assets/logo.svg'
import {BiSearch} from 'react-icons/bi'
import { useState } from 'react'

function Nav() {
    const navigate = useNavigate()

    const [searchValue, setSearchValue] = useState('')

    function handleSearch() {
        navigate(`/hasilpenelusuran/${searchValue}`)
    }

  return (
    <>
        <div className='nav'>
            <nav className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-3">
                        <img src={SihaciLogo} alt="SIHACI" className='logo'/>
                    </div>
                    <div className="col-9 nav-list-menu">
                        <div className='d-flex flex-row text-center'>
                            <li className='nav-menu d-flex align-items-center ms-md-3 me-md-3 ms-xl-4 me-xl-4 fw-semibold nav-menu'><Link to="/">Home</Link></li>
                            <li className='nav-menu d-flex align-items-center ms-md-3 me-md-3  ms-xl-4 me-xl-4 fw-semibold nav-menu'><Link to="/objekwisata">Objek Wisata</Link></li>
                            <li className='nav-menu d-flex align-items-center ms-md-3 me-md-3  ms-xl-4 me-xl-4 fw-semibold nav-menu'><Link to="/akomodasi">Akomodasi</Link></li>
                            <li className='nav-menu d-flex align-items-center ms-md-3 me-md-3  ms-xl-4 me-xl-4 fw-semibold nav-menu'><Link to="/kuliner">Kuliner</Link></li>
                            <li className='nav-menu d-flex align-items-center ms-md-3 me-md-3  ms-xl-4 me-xl-4 fw-semibold nav-menu'><Link to="/travel">Travel</Link></li>
                            <li className='nav-menu d-flex align-items-center ms-md-3 me-md-3  ms-xl-4 me-xl-4 fw-semibold nav-menu'><Link to="/event">Event</Link></li>
                            <li className='nav-menu d-flex align-items-center justify-content-end flex-fill ms-xxl-4 fw-semibold'>
                                <form className='form' onSubmit={handleSearch}>
                                    <div className='d-flex align-items-center input-wrapper py-1 w-auto'>
                                        <input type="text" placeholder='Search' className='search-input border-0' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                                        <button type='submit' className='border-0 button-search'><BiSearch size={'100%'}/></button>
                                    </div>
                                </form>
                            </li>
                        </div>
                    </div>
                    <div className='col-2 text-center bars'>
                        <nav className='navbar justify-content-end'>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </nav>
                    </div>
                </div>
            </nav>
        </div>
        <div className='container collapse mt-2 nav-bars-list' id="navbarToggleExternalContent">
            <div className='row'>
                <Link to="/">
                    <div className='col-12 nav-bars-menu py-2'>
                        Home
                    </div>
                </Link>
                <Link to="/objekwisata">
                    <div className='col-12 nav-bars-menu py-2'>
                        Objek Wisata
                    </div>
                </Link>
                <Link to="/akomodasi">
                    <div className='col-12 nav-bars-menu py-2'>
                        Akomodasi
                    </div>
                </Link>
                <Link to="/kuliner">
                    <div className='col-12 nav-bars-menu py-2'>
                        Kuliner
                    </div>
                </Link>
                <Link to="/travel">
                    <div className='col-12 nav-bars-menu py-2'>
                        Travel
                    </div>
                </Link>
                <Link to="/event">
                    <div className='col-12 nav-bars-menu py-2'>
                        Event
                    </div>
                </Link>
                <div className='col-12 py-2'>
                    <form className='form'>
                        <div className='d-flex align-items-center input-wrapper w-auto'>
                            <input type="text" placeholder='Search' className='search-input border-0'/>
                            <button type='submit' className='border-0 button-search'><BiSearch size={'100%'}/></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}


export default Nav