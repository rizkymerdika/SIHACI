import Banner from "./Banner"
import Banner5 from "../assets/banner5.png"
import Event5 from "../assets/event5.png"

function KontenEvent() {
  return (
    <>
        <Banner image={Banner5}/>
        <div className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="content-2-head fw-semibold">Cianjur Anime Fest</h1>
                    </div>
                </div>
                <div className="row py-4 py-sm-5 px-3 konten-outline">
                    <div className="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
                        <p className='my-0 content-2-text'>Budaya Jepang kini cukup populer di Indonesia. Mulai dari Anime, Cosplay, hingga aneka kulinernya seolah tak pernah sepi peminat. Maka dari itu, tidak heran jika perlahan Jepang Event atau acara Jepang kini mulai membarak di beberapa daerah Indonesia, salah satunya di Kabupaten Cianjur. Mengutip akun Instagram @citimall.cianjur, kini Citimall Cianjur 2 akan segera menghadirkan acara seru ala festival Jepang yaitu Jejepangan Cianjur Anime Fest. Event tersebut akan digelar di Atrium Citimall Cianjur 2 pada Sabtu, 6 Mei 2023. Kompetisi Jepang Event atau Jejepangan tersebut akan menampilkan Cosplay Competition, Anisong Competition, Band Parade, Dance & Idol Performance, dan masih banyak lagi. Acara tersebut pastinya membuat para netizen berkomentar positif dan menyambut antusias event Jejepangan.</p>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 d-block text-center">
                        <img src={Event5} alt='Cianjur Anime Fest' width={"100%"} className="img-wisata-outline"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default KontenEvent