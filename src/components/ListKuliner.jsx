import { Link } from "react-router-dom"
import Wisataalam7 from "../assets/wisataalam7.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

function ListKuliner() {
    const [kuliner, setKuliner] = useState([]);
    const [kulinerCount, setKulinerCount] = useState([]);
    const [pageAfter, setPageAfter] = useState(1);

    const api = `${import.meta.env.VITE_APP_API}`;
    const getKuli = import.meta.env.VITE_API_GET_KULINER
    const getImage = import.meta.env.VITE_API_GET_IMAGE_KULINER
    const image = `${api}${getImage}`;
    const url = `${api}${getKuli}`

    let limit = 10;

    const getKuliner = async () => {
        try{
            const response = await fetch(`${url}`)
            const jsonData = await response.json();
            let countData = jsonData.data.length/limit

            if((jsonData.data.length % limit) == 0 ){
                setKulinerCount(parseInt(countData))
            } 
            else {
                setKulinerCount (parseInt(countData)+1)
            }
        } catch(e){

        }
    }

    const getAllKuliner = async (pages) => {
        try{
            const response1 = await fetch(`${url}?limit=${limit}&page=${pages}`)
            const jsonData2 = await response1.json();
            setKuliner(jsonData2.data)
        } catch (e) {

        }
    }
    
    const handleClick = (page) =>{
        getAllKuliner(page)
        setPageAfter(page)
    }

    useEffect(() => {
        AOS.init()
        getKuliner()
        getAllKuliner(pageAfter)
        
    }, [])

  return (
    <div className="container mt-5">
        <div className="row flex-wrap">
            { 
                kuliner.map((item,index) => (
                    <div className="col-sm-6 mb-5" key={index}>
                        <Link to={`/kuliner/rekomendasikuliner/detailkuliner/${item.id_kuliner}`}>
                            <div className="card travel-card border-0 m-auto">
                                <img src={`${image}/${item.image_kuliner}`} alt={item.nama_kuliner} className="img-travel-outline" />
                                <div className="card-body">
                                    <h4 className="card-title fw-semibold my-0 text-center">{item.nama_kuliner}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                )) 
            }
        </div>

        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {
                    pageAfter != 1 ? (
                        <li className="page-item"><a className="page-link" href="javascript:void();" onClick={() => handleClick(pageAfter-1)} aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                    ) : 
                    (
                        <li className="page-item"><a className="page-link disabled" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                    )
                }
                {
                    Array.from({ length: kulinerCount }, (_, index) => (
                        <li className="page-item"><a className="page-link" onClick={() => handleClick(index+1)} href="javascript:;" key={index}>{index+1}</a></li>
                    ))
                }
                {
                    pageAfter != kulinerCount ? (
                        <li className="page-item"><a className="page-link" href="javascript:void();" onClick={() => handleClick(pageAfter+1)} aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
                    ) : (
                        <li className="page-item"><a className="page-link disabled" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
                    )
                }
            </ul>
        </nav>
    </div>
  )
}

export default ListKuliner