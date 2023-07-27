import {BsPlusLg} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import Event5 from '../assets/event5.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function KontenAdminEvent() {
    const navigate = useNavigate()
    const api = import.meta.env.VITE_APP_API;
    const getEvent = import.meta.env.VITE_API_GET_EVENT
    const getImage = import.meta.env.VITE_API_GET_IMAGE_EVENT
    const deleteEvent = import.meta.env.VITE_API_DELETE_EVENT
    const image = `${api}${getImage}`;
    const url = `${api}${getEvent}`
    const url2 = `${api}${deleteEvent}`

    const [event, setEvent] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [newFilterData, setNewFilterData] = useState([])

    useEffect(() => {
        axios(url)
        .then((res) => {
            setEvent(res.data.data)
        })
    }, [])

    function directTambah() {
        navigate('/admin/event/tambahevent')
    }

    function directEdit(id) {
        navigate(`/admin/event/editevent/${id}`)
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
        const filterData = event.filter((item) => {
            return item.nama_event.toLowerCase().includes(searchValue.toLowerCase())
        })
        setNewFilterData(filterData)
    }

  return (
    <div className="mt-3">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="konten-admin-head fw-semibold my-0">Event</h1>
                </div>
            </div>
            <div className="row justify-content-between align-items-center mt-4">
                <div className="col-sm-5 col-md-4 col-lg-3 mb-2 mb-sm-0">
                    <button className='btn-admin-1 py-2' onClick={directTambah}>
                        <BsPlusLg size={"100%"} className='button-icon-1 ms-3'/>
                        <div className='w-100 ms-2 me-3 text-start'><span>Tambah Event</span></div>
                    </button>
                </div>
                <div className="col-sm-5 col-md-4 mt-2 mt-sm-0">
                    <div>
                        <div className='input-wrapper-2 d-flex align-items-center justify-content-between'>
                            <input type="text" placeholder='Search' className='search-input-2 border-0' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onChangeCapture={() => handleSearch()}/>
                            <button type='submit' className='button-search-2 border-0'><BiSearch size={'100%'}/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row flex-wrap mt-0 mb-4 gy-4'>
                {
                    searchValue ? (
                        newFilterData.map((item, index) => (
                            <div className='col-lg-6' key={index}>
                                <div className='list-data-wrapper d-flex justify-content-sm-between align-items-center flex-column flex-sm-row'>
                                    <div className='d-flex align-items-center flex-column flex-sm-row'>
                                        <img src={`${image}/${item.image_event}`} alt={item.nama_event} className='admin-img-1'/>
                                        <div className='data-title mt-2 mt-sm-0'>
                                            <span>{item.nama_event}</span>
                                        </div>
                                    </div>
                                    <div className='btn-edit-hapus mt-2 mt-sm-0'>
                                        <button className='btn-admin-2 justify-content-center justify-content-sm-start px-2 py-2 mb-2 mb-sm-3' style={{backgroundColor: '#E7B10A'}} onClick={() => directEdit(item.id_event)}>
                                            <AiFillEdit size={"100%"} className='button-icon-2'/>
                                            <div className='mx-2'><span>Edit</span></div>
                                        </button>
                                        <button className='btn-admin-2 justify-content-center justify-content-sm-start px-2 py-2 mt-2 mt-sm-3' style={{backgroundColor: '#B31312'}} onClick={() => directDelete(item.id_event)}>
                                            <AiFillDelete size={"100%"} className='button-icon-2'/>
                                            <div className='mx-2'><span>Hapus</span></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ):
                    (
                        event.map((item, index) => (
                            <div className='col-lg-6' key={index}>
                                <div className='list-data-wrapper d-flex justify-content-sm-between align-items-center flex-column flex-sm-row'>
                                    <div className='d-flex align-items-center flex-column flex-sm-row'>
                                        <img src={`${image}/${item.image_event}`} alt={item.nama_event} className='admin-img-1'/>
                                        <div className='data-title mt-2 mt-sm-0'>
                                            <span>{item.nama_event}</span>
                                        </div>
                                    </div>
                                    <div className='btn-edit-hapus mt-2 mt-sm-0'>
                                        <button className='btn-admin-2 justify-content-center justify-content-sm-start px-2 py-2 mb-2 mb-sm-3' style={{backgroundColor: '#E7B10A'}} onClick={() => directEdit(item.id_event)}>
                                            <AiFillEdit size={"100%"} className='button-icon-2'/>
                                            <div className='mx-2'><span>Edit</span></div>
                                        </button>
                                        <button className='btn-admin-2 justify-content-center justify-content-sm-start px-2 py-2 mt-2 mt-sm-3' style={{backgroundColor: '#B31312'}} onClick={() => directDelete(item.id_event)}>
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

export default KontenAdminEvent