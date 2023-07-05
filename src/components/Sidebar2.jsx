import { Link } from 'react-router-dom'
import {MdTravelExplore} from 'react-icons/md'
import {IoHomeSharp} from 'react-icons/io5'
import {BiLogOut} from 'react-icons/bi'
import {RiLockPasswordLine} from 'react-icons/ri'

function Sidebar2({style1, style2}) {
  return (
    <ul className='navbar-nav sidebar ps-0' style={{background: '#19376D'}}>
        <li>
            <div className='d-flex align-items-center justify-content-center pb-2 pt-3'>
                <MdTravelExplore size={'100%'} className='sidebar-icon-1 me-lg-1'/>
                <div className='ms-lg-1'><span className='sidebar-head fw-semibold'>SIHACI</span></div>
            </div>
        </li>
        <li><hr className='my-1'/></li>
        <li className='nav-item'>
            <Link to={"/hotel"} className='nav-link d-flex flex-column flex-lg-row align-items-center' style={{color: style1}}>
                <IoHomeSharp size={'100%'} className='sidebar-icon-2'/>
                <div className='ms-lg-3'><span className='sidebar-menu'>Beranda</span></div>
            </Link>
        </li>
        <li className='nav-item'>
            <Link to={"/hotel/gantipassword"} className='nav-link d-flex flex-column flex-lg-row align-items-center' style={{color: style2}}>
                <RiLockPasswordLine size={"100%"} className='sidebar-icon-2'/>
                <div className='ms-lg-3'><span className='sidebar-menu'>Ganti Password</span></div>
            </Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link d-flex flex-column flex-lg-row align-items-center'>
                <BiLogOut size={"100%"} className='sidebar-icon-2'/>
                <div className='ms-lg-3'><span className='sidebar-menu'>Keluar</span></div>
            </Link>
        </li>
    </ul>
  )
}

export default Sidebar2