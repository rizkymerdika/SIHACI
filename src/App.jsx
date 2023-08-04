import './App.css'
import React, { useEffect, useState } from 'react'
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
import axios from 'axios';
import ScrollToTop from './components/ScrollToTop';
import KulinerLainnya2 from './pages/KulinerLainnya2';
import AdminListAkun from './pages/AdminListAkun';
import AdminEditAkunHotel from './pages/AdminEditAkunHotel';

function App() {

  const [today, setToday] = useState(new Date());
  const [todayAll, setTodayAll] = useState(new Date());
  const [ip, setIp] = useState('');
  const [db, setDb] = useState(false);
  function getToday () {
    let datenow = new Date;
    let day = String(datenow.getDate().length === 1 ? '0' + datenow.getDate() : datenow.getDate());
    let month = String(datenow.getMonth() + 1).length === 1 ? '0' + (datenow.getMonth() + 1) : (datenow.getMonth() + 1);
    let year = datenow.getFullYear();
    setTodayAll(`${year}-${month}-${day}`);
  }
  function getIp(){
    axios('https://ipapi.co/json')
    .then((res) => {
      setIp(res.data.ip);
    })
  }
  useEffect(() => {
    getToday()
    getIp()
    // console.log(today)
    getDatabase();
    setDatabase()
  }, [today, ip, db])

  function getDatabase(){
    axios(`${import.meta.env.VITE_APP_API}${import.meta.env.VITE_API_PENGUNJUNG}/get?ip=${ip}&date=${todayAll}`)
    .then((res) => {
      if(ip != ''){
        if(res.data.data.length > 0){
          setDb(false)
        } else {
          setDb(true)
        }
      }
    })
  }
  function setDatabase(){
    if(db == true){
      axios.post(`${import.meta.env.VITE_APP_API}${import.meta.env.VITE_API_PENGUNJUNG}/store`, {
          "date": today,
          "ip": ip
      })
      .then((res) => {
          
      })
    }
  }


  return (
    <div className='App'>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Beranda/>}/>
        <Route path='/objekwisata'>
          <Route index element={<ObjekWisata/>}/>
          <Route path='wisataalam'>
            <Route index element={<WALainnya/>}/>
            <Route path='detailwisata/:id' element={<DetailWisata/>}/>
          </Route>
          <Route path='wisatabuatan'>
            <Route index element={<WBLainnya/>}/>
            <Route path='detailwisata/:id' element={<DetailWisata/>}/>
          </Route>
          <Route path='wisatabudaya'>
            <Route index element={<KBDLainnya/>}/>
            <Route path='detailwisata/:id' element={<DetailWisata/>}/>
          </Route>
        </Route>
        <Route path='/akomodasi'>
          <Route index element={<Akomodasi/>}/>
          <Route path='hotelbintang'>
            <Route index element={<HBLainnya/>}/>
            <Route path='detailakomodasi/:id' element={<DetailHotel/>}/>
          </Route>
          <Route path='hotelnonbintang'>
            <Route index element={<HNBLainnya/>}/>
            <Route path='detailakomodasi/:id' element={<DetailHotel/>}/>
          </Route>
          <Route path='villa'>
            <Route index element={<VillaLainnya/>}/>
            <Route path='detailakomodasi/:id' element={<DetailHotel/>}/>
          </Route>
        </Route>
        <Route path='/kuliner'>
          <Route index element={<Kuliner/>}/>
          <Route path='tempatmakan'>
            <Route index element={<KulinerLainnya/>}/>
            <Route path='detailkuliner/:id' element={<DetailKuliner/>}/>
          </Route>
          <Route path='oleh-oleh'>
            <Route index element={<KulinerLainnya2/>}/>
            <Route path='detailkuliner/:id' element={<DetailKuliner/>}/>
          </Route>
        </Route>
        <Route path='/travel'>
          <Route index element={<Travel/>}/>
          <Route path='detailtravel/:id' element={<DetailTravel/>}/>
        </Route>
        <Route path='/event'>
          <Route index element={<Event/>}/>
          <Route path='detailevent/:id' element={<DetailEvent/>}/>
        </Route>
        <Route path='/hasilpenelusuran/:id' element={<HasilSearch/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin'>
          <Route index element={<AdminHome/>}/>
          <Route path='objekwisata'>
            <Route index element={<AdminOW/>}/>
            <Route path='tambahwisata' element={<AdminTambahWisata/>}/>
            <Route path='editwisata/:id' element={<AdminEditWisata/>}/>
          </Route>
          <Route path='akomodasi'>
            <Route index element={<AdminAkomodasi/>}/>
            <Route path='tambahakomodasi' element={<AdminTambahAkomodasi/>}/>
            <Route path='editakomodasi/:id' element={<AdminEditAkomodasi/>}/>
          </Route>
          <Route path='kuliner'>
            <Route index element={<AdminKuliner/>}/>
            <Route path='tambahkuliner' element={<AdminTambahKuliner/>}/>
            <Route path='editkuliner/:id' element={<AdminEditKuliner/>}/>
          </Route>
          <Route path='travel'>
            <Route index element={<AdminTravel/>}/>
            <Route path='tambahtravel' element={<AdminTambahTravel/>}/>
            <Route path='edittravel/:id' element={<AdminEditTravel/>}/>
          </Route>
          <Route path='event'>
            <Route index element={<AdminEvent/>}/>
            <Route path='tambahevent' element={<AdminTambahEvent/>}/>
            <Route path='editevent/:id' element={<AdminEditEvent/>}/>
          </Route>
          <Route path='gantipassword' element={<AdminGantiPassword/>}/>
          <Route path='registrasi' element={<RegisAkunHotel/>}/>
          <Route path='listhotel'>
            <Route index element={<AdminLaporanHotel/>}/>
            <Route path='detaillaporan/:id' element={<AdminDetailLaporanHotel/>}/>
          </Route>
          <Route path='listakun'>
            <Route index element={<AdminListAkun/>}/>
            <Route path='editakunhotel/:id' element={<AdminEditAkunHotel/>}/>
          </Route>
        </Route>
        <Route path='hotel/:id'>
          <Route index element={<HotelHome/>}/>
          <Route path='tambahlaporan' element={<HotelTambahLaporan/>}/>
          <Route path='gantipassword' element={<HotelGantiPassword/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
