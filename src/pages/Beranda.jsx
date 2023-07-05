import './Beranda.css'
import { Helmet } from 'react-helmet'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import WisataCianjur from '../components/WisataCianjur'
import Infowisata from '../components/Infowisata'
import GaleriWisata from '../components/GaleriWisata'
import Footer from '../components/footer'
import EventPariwisata from '../components/EventPariwisata'

function Beranda() {
  return (
    <>
      <Helmet>
        <title>Sistem Informasi Hayu Ameng ka Cianjur</title>
      </Helmet>
      <Nav/>
      <Carousel/>
      <WisataCianjur/>
      <Infowisata/>
      <EventPariwisata/>
      <GaleriWisata/>
      <Footer/>
    </>
  )
}

export default Beranda