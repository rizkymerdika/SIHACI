import { Link } from 'react-router-dom'

function KontenAdminListHotel() {
  return (
    <div className="mt-3">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="konten-admin-head fw-semibold my-0">List Hotel</h1>
                </div>
            </div>
            <div className="row flex-wrap mt-3">
                <div className="col-12">
                    <p className="konten-admin-list-hotel-head fw-semibold my-0">Hotel Bintang</p>
                    <hr className="my-1"/>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <ul className="list-hotel">
                        <li><Link to={'/admin/listhotel/detaillaporan'}>Hotel Cianjur Cipanas</Link></li>
                    </ul>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <ul className="list-hotel">
                        <li><Link>Hotel Cianjur Cipanas</Link></li>
                    </ul>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <ul className="list-hotel">
                        <li><Link>Hotel Cianjur Cipanas</Link></li>
                    </ul>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <ul className="list-hotel">
                        <li><Link>Hotel Cianjur Cipanas</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row flex-wrap mt-3">
            <div className="col-12">
                    <p className="konten-admin-list-hotel-head fw-semibold my-0">Hotel Non Bintang</p>
                    <hr className="my-1"/>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <ul className="list-hotel">
                        <li><Link>Woodhill Villa Kota Bunga</Link></li>
                    </ul>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <ul className="list-hotel">
                        <li><Link>Woodhill Villa Kota Bunga</Link></li>
                    </ul>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <ul className="list-hotel">
                        <li><Link>Woodhill Villa Kota Bunga</Link></li>
                    </ul>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <ul className="list-hotel">
                        <li><Link>Woodhill Villa Kota Bunga</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row flex-wrap mt-3">
            <div className="col-12">
                    <p className="konten-admin-list-hotel-head fw-semibold my-0">Villa</p>
                    <hr className="my-1"/>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <ul className="list-hotel">
                        <li><Link>ARRA Lembah Pinus Hotel</Link></li>
                    </ul>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <ul className="list-hotel">
                        <li><Link>ARRA Lembah Pinus Hotel</Link></li>
                    </ul>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <ul className="list-hotel">
                        <li><Link>ARRA Lembah Pinus Hotel</Link></li>
                    </ul>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <ul className="list-hotel">
                        <li><Link>ARRA Lembah Pinus Hotel</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KontenAdminListHotel