import {BsPlusLg} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import Kuliner14 from '../assets/kuliner14.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function KontenAdminKuliner() {
    const navigate = useNavigate()
    const api = import.meta.env.VITE_APP_API;
    const getKuliner = import.meta.env.VITE_API_GET_KULINER
    const getImage = import.meta.env.VITE_API_GET_IMAGE_KULINER
    const deleteKuliner = import.meta.env.VITE_API_DELETE_KULINER
    const image = `${api}${getImage}`;
    const url = `${api}${getKuliner}`
    const url2 = `${api}${deleteKuliner}`

    const [kuliner, setKuliner] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [newFilterData, setNewFilterData] = useState([])

    useEffect(() => {
        axios(url)
        .then((res) => {
            setKuliner(res.data.data)
        })
    }, [])
    
    function directTambah() {
        navigate('/admin/kuliner/tambahkuliner')
    }

    function directEdit(id) {
        navigate(`/admin/kuliner/editkuliner/${id}`)
    }

    function directDelete(id){
        const text = "Apakah Anda yakin ingin menghapus data?";
        if (confirm(text) == true) {
            axios.delete(`${url2}${id}`)
            .then((res) => {
                alert("Hapus Data Berhasil")
            })

            location.reload()
        }
    }

    function handleSearch() {
        const filterData = kuliner.filter((item) => {
            return item.nama_kuliner.toLowerCase().includes(searchValue.toLowerCase())
        })
        setNewFilterData(filterData)
    }

  return (
    <div className="mt-3">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="konten-admin-head fw-semibold my-0">Kuliner</h1>
                </div>
            </div>
            <div className="row justify-content-between align-items-center mt-4">
                <div className="col-sm-6 col-md-4 mb-2 mb-sm-0">
                    <button className='btn-admin-1 py-2' onClick={directTambah}>
                        <BsPlusLg size={"100%"} className='button-icon-1 ms-3'/>
                        <div className='w-100 ms-2 me-3 text-start'><span>Tambah Kuliner</span></div>
                    </button>
                </div>
                <div className="col-sm-5 col-md-4 mt-2 mt-sm-0">
                    <form>
                        <div className='input-wrapper-2 d-flex align-items-center justify-content-between'>
                            <input type="text" placeholder='Search' className='search-input-2 border-0' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onChangeCapture={() => handleSearch()}/>
                            <button type='submit' className='button-search-2 border-0'><BiSearch size={'100%'}/></button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='row flex-wrap mt-0 mb-4 gy-4'>
                {
                    searchValue ? (
                        newFilterData.map((item, index) => (
                            <div className='col-lg-6' key={index}>
                                <div className='list-data-wrapper d-flex justify-content-sm-between align-items-center flex-column flex-sm-row'>
                                    <div className='d-flex align-items-center flex-column flex-sm-row'>
                                        <img src={`${image}/${item.image_kuliner}`} alt={item.nama_kuliner} className='admin-img-1'/>
                                        <div className='data-title mt-2 mt-sm-0'>
                                            <span>{item.nama_kuliner}</span>
                                        </div>
                                    </div>
                                    <div className='btn-edit-hapus mt-2 mt-sm-0'>
                                        <button className='btn-admin-2 justify-content-center justify-content-sm-start px-2 py-2 mb-2 mb-sm-3' style={{backgroundColor: '#E7B10A'}} onClick={() => directEdit(item.id_kuliner)}>
                                            <AiFillEdit size={"100%"} className='button-icon-2'/>
                                            <div className='mx-2'><span>Edit</span></div>
                                        </button>
                                        <button className='btn-admin-2 justify-content-center justify-content-sm-start px-2 py-2 mt-2 mt-sm-3' style={{backgroundColor: '#B31312'}} onClick={() => directDelete(item.id_kuliner)}>
                                            <AiFillDelete size={"100%"} className='button-icon-2'/>
                                            <div className='mx-2'><span>Hapus</span></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ):
                    (
                        kuliner.map((item, index) => (
                            <div className='col-lg-6' key={index}>
                                <div className='list-data-wrapper d-flex justify-content-sm-between align-items-center flex-column flex-sm-row'>
                                    <div className='d-flex align-items-center flex-column flex-sm-row'>
                                        <img src={`${image}/${item.image_kuliner}`} alt={item.nama_kuliner} className='admin-img-1'/>
                                        <div className='data-title mt-2 mt-sm-0'>
                                            <span>{item.nama_kuliner}</span>
                                        </div>
                                    </div>
                                    <div className='btn-edit-hapus mt-2 mt-sm-0'>
                                        <button className='btn-admin-2 justify-content-center justify-content-sm-start px-2 py-2 mb-2 mb-sm-3' style={{backgroundColor: '#E7B10A'}} onClick={() => directEdit(item.id_kuliner)}>
                                            <AiFillEdit size={"100%"} className='button-icon-2'/>
                                            <div className='mx-2'><span>Edit</span></div>
                                        </button>
                                        <button className='btn-admin-2 justify-content-center justify-content-sm-start px-2 py-2 mt-2 mt-sm-3' style={{backgroundColor: '#B31312'}} onClick={() => directDelete(item.id_kuliner)}>
                                            <AiFillDelete size={"100%"} className='button-icon-2'/>
                                            <div className='mx-2'><span>Hapus</span></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default KontenAdminKuliner