import { Link, useNavigate } from 'react-router-dom'
import SihaciLogo from '../assets/logo.svg'
import {BiSearch} from 'react-icons/bi'
import { useState } from 'react'

function Nav() {
    const navigate = useNavigate()

    const [searchValue, setSearchValue] = useState('')

    function handleSearch() {
        if (searchValue) {
            navigate(`/hasilpenelusuran/${searchValue}`)
        }
        setSearchValue('')
    }

    function directPage(url) {
        navigate(`${url}`)
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
                            <li className='nav-menu d-flex align-items-center mx-lg-3 mx-xl-3 fw-semibold'><Link to="/">Home</Link></li>
                            {/* <li className='nav-menu d-flex align-items-center ms-md-3 me-md-3 ms-xl-4 me-xl-4 fw-semibold '><Link to="/objekwisata">Objek Wisata</Link></li> */
                            <li className='nav-menu d-flex align-items-center mx-lg-3 mx-xl-3 fw-semibold'>
                                <div className="btn-group">
                                    <button type="button" className="btn px-0 fw-semibold" onClick={() => directPage('/objekwisata')}>Objek Wisata</button>
                                    <button type="button" className="btn ps-1 pe-0 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu" id='dropdown-menu-nav'>
                                        <li><Link className="dropdown-item" to={'/objekwisata/wisataalam'}>Wisata Alam</Link></li>
                                        <li><Link className="dropdown-item" to={'/objekwisata/wisatabuatan'}>Wisata Buatan</Link></li>
                                        <li><Link className="dropdown-item" to={'/objekwisata/wisatabudaya'}>Wisata Budaya</Link></li>
                                    </ul>
                                </div>    
                            </li>}
                            <li className='nav-menu d-flex align-items-center mx-lg-3 mx-xl-3 fw-semibold'>
                                <div className="btn-group">
                                    <button type="button" className="btn px-0 fw-semibold" onClick={() => directPage('/akomodasi')}>Akomodasi</button>
                                    <button type="button" className="btn ps-1 pe-0 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu" id='dropdown-menu-nav'>
                                        <li><Link className="dropdown-item" to={'/akomodasi/hotelbintang'}>Hotel Bintang</Link></li>
                                        <li><Link className="dropdown-item" to={'/akomodasi/hotelnonbintang'}>Hotel Non Bintang</Link></li>
                                        <li><Link className="dropdown-item" to={'/akomodasi/villa'}>Villa</Link></li>
                                    </ul>
                                </div>  
                            </li>
                            <li className='nav-menu d-flex align-items-center mx-lg-3 mx-xl-3 fw-semibold'>
                                <div className="btn-group">
                                    <button type="button" className="btn px-0 fw-semibold" onClick={() => directPage('/kuliner')}>Kuliner</button>
                                    <button type="button" className="btn ps-1 pe-0 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu" id='dropdown-menu-nav'>
                                        <li><Link className="dropdown-item" to={'/kuliner/tempatmakan'}>Tempat Makan</Link></li>
                                        <li><Link className="dropdown-item" to={'/kuliner/oleh-oleh'}>Oleh-oleh</Link></li>
                                    </ul>
                                </div>  
                            </li>
                            <li className='nav-menu d-flex align-items-center mx-lg-3 mx-xl-3 fw-semibold'><Link to="/travel">Travel</Link></li>
                            <li className='nav-menu d-flex align-items-center mx-lg-3 mx-xl-3 fw-semibold'><Link to="/event">Event</Link></li>
                            <li className='nav-menu d-flex align-items-center justify-content-end flex-fill ms-lg-2 ms-xl-3 fw-semibold'>
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
                    <form className='form' onSubmit={handleSearch}>
                        <div className='d-flex align-items-center input-wrapper w-auto'>
                            <input type="text" placeholder='Search' className='search-input border-0' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
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