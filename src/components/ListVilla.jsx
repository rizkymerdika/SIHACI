import { Link } from "react-router-dom"
import Wisataalam7 from "../assets/wisataalam7.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

function ListVilla() {
    const [akomodasi, setAkomodasi] = useState([]);
    const [akomodasiCount, setAkomodasiCount] = useState([]);
    const [pageAfter, setPageAfter] = useState(1);

    const api = `${import.meta.env.VITE_APP_API}`;
    const getAkom = import.meta.env.VITE_API_GET_AKOMODASI
    const getImage = import.meta.env.VITE_API_GET_IMAGE_AKOMODASI
    const image = `${api}${getImage}`;
    const url = `${api}${getAkom}`

    let limit = 10;
    let kategori = 'Villa'

    const getAkomodasi = async () => {
        try{
            const response = await fetch(`${url}?category=${kategori}`)
            const jsonData = await response.json();
            let countData = jsonData.data.length/limit

            if((jsonData.data.length % limit) == 0 ){
                setAkomodasiCount(parseInt(countData))
            } 
            else {
                setAkomodasiCount (parseInt(countData)+1)
            }
        } catch(e){

        }
    }

    const getAllAkomodasi = async (pages) => {
        try{
            const response1 = await fetch(`${url}?limit=${limit}&page=${pages}&category=${kategori}`)
            const jsonData2 = await response1.json();
            setAkomodasi(jsonData2.data)
        } catch (e) {

        }
    }
    
    const handleClick = (page) =>{
        getAllAkomodasi(page)
        setPageAfter(page)
    }

    useEffect(() => {
        AOS.init()
        getAkomodasi()
        getAllAkomodasi(pageAfter)
        
    }, [])

  return (
    <div className="container mt-5">
        <div className="row flex-wrap">
            { 
                akomodasi.map((item,index) => (
                    <div className="col-sm-6 col-lg-4 mb-5" key={index}>
                        <Link to={`/akomodasi/villa/detailakomodasi/${item.id_akomodasi}`}>
                            <div className="card travel-card border-0 m-auto">
                                <img src={`${image}/${item.image_akomodasi}`} alt={item.nama_akomodasi} className="img-travel-outline" />
                                <div className="card-body">
                                    <h4 className="card-title fw-semibold my-0 text-center">{item.nama_akomodasi}</h4>
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
                    Array.from({ length: akomodasiCount }, (_, index) => (
                        <li className="page-item" key={index}>
                            {
                                pageAfter === index+1 ? (
                                    <a className="page-link bg-primary text-white" onClick={() => handleClick(index+1)} href="javascript:;" >{index+1}</a>
                                ) : (
                                    <a className="page-link" onClick={() => handleClick(index+1)} href="javascript:;" key={index}>{index+1}</a>
                                )
                            }
                        </li>
                    ))
                }
                {
                    pageAfter != akomodasiCount ? (
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

export default ListVilla