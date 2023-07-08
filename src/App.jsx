import './App.css'
import React from 'react'
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
import Beranda from './pages/Beranda'
import ObjekWisata from './pages/ObjekWisata'
import Kuliner from './pages/Kuliner';
import Travel from './pages/Travel';
import Event from './pages/Event';
import Akomodasi from './pages/Akomodasi';
import DetailWisata from './pages/DetailWisata';
import DetailKuliner from './pages/DetailKuliner';
import DetailHotel from './pages/DetailHotel';
import DetailTravel from './pages/DetailTravel';
import DetailEvent from './pages/DetailEvent';
import WALainnya from './pages/WALainnya';
import WBLainnya from './pages/WBLainnya'
import KBDLainnya from './pages/KBDLainnya'
import HBLainnya from './pages/HBLainnya'
import HNBLainnya from './pages/HNBLainnya'
import VillaLainnya from './pages/VillaLainnya'
import KulinerLainnya from './pages/KulinerLainnya'
import Login from './pages/Login'
import AdminHome from './pages/AdminHome'
import AdminOW from './pages/AdminOW'
import AdminAkomodasi from './pages/AdminAkomodasi'
import AdminKuliner from './pages/AdminKuliner'
import AdminTravel from './pages/AdminTravel'
import AdminEvent from './pages/AdminEvent'
import AdminGantiPassword from './pages/AdminGantiPassword'
import RegisAkunHotel from './pages/RegisAkunHotel'
import AdminLaporanHotel from './pages/AdminLaporanHotel'
import AdminDetailLaporanHotel from './pages/AdminDetailLaporanHotel'
import AdminTambahWisata from './pages/AdminTambahWisata'
import AdminEditWisata from './pages/AdminEditWisata'
import AdminTambahAkomodasi from './pages/AdminTambahAkomodasi'
import AdminEditAkomodasi from './pages/AdminEditAkomodasi'
import AdminTambahKuliner from './pages/AdminTambahKuliner'
import AdminEditKuliner from './pages/AdminEditKuliner'
import AdminTambahTravel from './pages/AdminTambahTravel'
import AdminEditTravel from './pages/AdminEditTravel'
import AdminTambahEvent from './pages/AdminTambahEvent'
import AdminEditEvent from './pages/AdminEditEvent'
import HotelHome from './pages/HotelHome'
import HotelGantiPassword from './pages/HotelGantiPassword'
import HotelTambahLaporan from './pages/HotelTambahLaporan'
import HasilSearch from './pages/HasilSearch'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Beranda/>}/>
        <Route path='/objekwisata'>
          <Route index element={<ObjekWisata/>}/>
          <Route path='wisataalam'>
            <Route index element={<WALainnya/>}/>
            <Route path='detailwisata' element={<DetailWisata/>}/>
          </Route>
          <Route path='wisatabuatan'>
            <Route index element={<WBLainnya/>}/>
            <Route path='detailwisata' element={<DetailWisata/>}/>
          </Route>
          <Route path='wisatabudaya'>
            <Route index element={<KBDLainnya/>}/>
            <Route path='detailwisata' element={<DetailWisata/>}/>
          </Route>
        </Route>
        <Route path='/akomodasi'>
          <Route index element={<Akomodasi/>}/>
          <Route path='hotelbintang'>
            <Route index element={<HBLainnya/>}/>
            <Route path='detailakomodasi' element={<DetailHotel/>}/>
          </Route>
          <Route path='hotelnonbintang'>
            <Route index element={<HNBLainnya/>}/>
            <Route path='detailakomodasi' element={<DetailHotel/>}/>
          </Route>
          <Route path='villa'>
            <Route index element={<VillaLainnya/>}/>
            <Route path='detailakomodasi' element={<DetailHotel/>}/>
          </Route>
        </Route>
        <Route path='/kuliner'>
          <Route index element={<Kuliner/>}/>
          <Route path='rekomendasikuliner'>
            <Route index element={<KulinerLainnya/>}/>
            <Route path='detailkuliner' element={<DetailKuliner/>}/>
          </Route>
        </Route>
        <Route path='/travel'>
          <Route index element={<Travel/>}/>
          <Route path='detailtravel' element={<DetailTravel/>}/>
        </Route>
        <Route path='/event'>
          <Route index element={<Event/>}/>
          <Route path='detailevent' element={<DetailEvent/>}/>
        </Route>
        <Route path='/hasilpenelusuran/:id' element={<HasilSearch/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin'>
          <Route index element={<AdminHome/>}/>
          <Route path='objekwisata'>
            <Route index element={<AdminOW/>}/>
            <Route path='tambahwisata' element={<AdminTambahWisata/>}/>
            <Route path='editwisata' element={<AdminEditWisata/>}/>
          </Route>
          <Route path='akomodasi'>
            <Route index element={<AdminAkomodasi/>}/>
            <Route path='tambahakomodasi' element={<AdminTambahAkomodasi/>}/>
            <Route path='editakomodasi' element={<AdminEditAkomodasi/>}/>
          </Route>
          <Route path='kuliner'>
            <Route index element={<AdminKuliner/>}/>
            <Route path='tambahkuliner' element={<AdminTambahKuliner/>}/>
            <Route path='editkuliner' element={<AdminEditKuliner/>}/>
          </Route>
          <Route path='travel'>
            <Route index element={<AdminTravel/>}/>
            <Route path='tambahtravel' element={<AdminTambahTravel/>}/>
            <Route path='edittravel' element={<AdminEditTravel/>}/>
          </Route>
          <Route path='event'>
            <Route index element={<AdminEvent/>}/>
            <Route path='tambahevent' element={<AdminTambahEvent/>}/>
            <Route path='editevent' element={<AdminEditEvent/>}/>
          </Route>
          <Route path='gantipassword' element={<AdminGantiPassword/>}/>
          <Route path='registrasi' element={<RegisAkunHotel/>}/>
          <Route path='listhotel'>
            <Route index element={<AdminLaporanHotel/>}/>
            <Route path='detaillaporan' element={<AdminDetailLaporanHotel/>}/>
          </Route>
        </Route>
        <Route path='hotel'>
          <Route index element={<HotelHome/>}/>
          <Route path='tambahlaporan' element={<HotelTambahLaporan/>}/>
          <Route path='gantipassword' element={<HotelGantiPassword/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
