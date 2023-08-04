import { Link, useNavigate } from 'react-router-dom'
import {IoHomeSharp, IoLocationSharp} from 'react-icons/io5'
import {MdTravelExplore} from 'react-icons/md'
import {FaHotel} from 'react-icons/fa'
import {ImSpoonKnife} from 'react-icons/im'
import {TbBus, TbReport} from 'react-icons/tb'
import {MdEventNote} from 'react-icons/md'
import {BiLogOut} from 'react-icons/bi'
import {RiLockPasswordLine} from 'react-icons/ri'

function Sidebar({style1, style2, style3, style4, style5, style6, style7, style8}) {
    const navigate = useNavigate()

    function handleLogout() {
        localStorage.clear()
        navigate('/login')
    }

  return (
    <ul className='navbar-nav sidebar ps-0' style={{background: '#0B2447'}}>
        <li>
            <div className='d-flex align-items-center justify-content-center pb-2 pt-3'>
                <MdTravelExplore size={'100%'} className='sidebar-icon-1 me-lg-1'/>
                <div className='ms-lg-1'><span className='sidebar-head fw-semibold'>SIHACI</span></div>
            </div>
        </li>
        <li><hr className='my-1'/></li>
        <li className='nav-item'>
            <Link to={"/admin"} className='nav-link d-flex flex-column flex-lg-row align-items-center' style={{color: style1}}>
                <IoHomeSharp size={'100%'} className='sidebar-icon-2'/>
                <div className='ms-lg-3'><span className='sidebar-menu'>Beranda</span></div>
            </Link>
        </li>
        <li className='nav-item'>
            <Link to={"/admin/objekwisata"} className='nav-link d-flex flex-column flex-lg-row align-items-center' style={{color: style2}}>
                <IoLocationSharp size={"100%"} className='sidebar-icon-2'/>
                <div className='ms-lg-3'><span className='sidebar-menu'>Objek Wisata</span></div>
            </Link>
        </li>
        <li className='nav-item'>
            <Link to={"/admin/akomodasi"} className='nav-link d-flex flex-column flex-lg-row align-items-center' style={{color: style3}}>
                <FaHotel size={"100%"} className='sidebar-icon-2'/>
                <div className='ms-lg-3'><span className='sidebar-menu'>Akomodasi</span></div>
            </Link>
        </li>
        <li className='nav-item'>
            <Link to={"/admin/kuliner"} className='nav-link d-flex flex-column flex-lg-row align-items-center' style={{color: style4}}>
                <ImSpoonKnife size={"100%"} className='sidebar-icon-2'/>
                <div className='ms-lg-3'><span className='sidebar-menu'>Kuliner</span></div>
            </Link>
        </li>
        <li className='nav-item'>
            <Link to={"/admin/travel"} className='nav-link d-flex flex-column flex-lg-row align-items-center' style={{color: style5}}>
                <TbBus size={"100%"} className='sidebar-icon-2'/>
                <div className='ms-lg-3'><span className='sidebar-menu'>Travel</span></div>
            </Link>
        </li>
        <li className='nav-item'>
            <Link to={"/admin/event"} className='nav-link d-flex flex-column flex-lg-row align-items-center' style={{color: style6}}>
                <MdEventNote size={"100%"} className='sidebar-icon-2'/>
                <div className='ms-lg-3'><span className='sidebar-menu'>Event</span></div>
            </Link>
        </li>
        <li className='nav-item'>
            <div className='dropend'>
                <button className='btn dropdown-toggle nav-link d-flex flex-column flex-lg-row align-items-center' type='button' data-bs-toggle="dropdown" aria-expanded="false" style={{color: style7}}> 
                    <TbReport size={'100%'} className='sidebar-icon-2'/>
                    <div className='ms-lg-3 me-auto'><span className='sidebar-menu'>Hotel</span></div>
                </button>
                <ul className='dropdown-menu'>
                    <li><Link to={"/admin/listhotel"} className='dropdown-item'>Laporan</Link></li>
                    <li><Link to={"/admin/registrasi"} className='dropdown-item'>Registrasi</Link></li>
                    <li><Link to={"/admin/listakun"} className='dropdown-item'>List Akun</Link></li>
                </ul>
            </div>
        </li>
        <li><hr className='my-1'/></li>
        <li className='nav-item'>
            <Link to={"/admin/gantipassword"} className='nav-link d-flex flex-column flex-lg-row align-items-center' style={{color: style8}}>
                <RiLockPasswordLine size={"100%"} className='sidebar-icon-2'/>
                <div className='ms-lg-3'><span className='sidebar-menu'>Ganti Password</span></div>
            </Link>
        </li>
        <li className='nav-item' onClick={handleLogout}>
            <Link className='nav-link d-flex flex-column flex-lg-row align-items-center'>
                <BiLogOut size={"100%"} className='sidebar-icon-2'/>
                <div className='ms-lg-3'><span className='sidebar-menu'>Keluar</span></div>
            </Link>
        </li>
    </ul>
  )
}

export default Sidebar