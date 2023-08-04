import {BiSearch} from 'react-icons/bi'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function KontenAdminListAkunHotel() {
    const navigate = useNavigate()
    const api = import.meta.env.VITE_APP_API;
    const getHotel = import.meta.env.VITE_API_GET_HOTEL
    const deleteHotel = import.meta.env.VITE_API_DELETE_HOTEL
    const url = `${api}${getHotel}`
    const url2 = `${api}${deleteHotel}`

    const [akunHotel, setAkunHotel] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [newFilterData, setNewFilterData] = useState([])

    useEffect(() => {
        axios(url)
        .then((res) => {
            setAkunHotel(res.data.data)
        })
    }, [])

    function directEdit(id){  
        navigate(`/admin/listakun/editakunhotel/${id}`)
    }

    function directDelete(id){
        const text = "Apakah Anda yakin ingin menghapus data?";
        if (confirm(text) == true) {
            axios.delete(`${url2}${id}`)
            .then((res) => {
                alert("Hapus Data Berhasil")
            })

            // location.reload()
        }
    }

    function handleSearch() {
        const filterData = akunHotel.filter((item) => {
            return item.nama_user.toLowerCase().includes(searchValue.toLowerCase())
        })
        setNewFilterData(filterData)
    }

  return (
    <div className="mt-3">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="konten-admin-head fw-semibold my-0">List Akun Hotel</h1>
                </div>
            </div>
            <div className="row justify-content-end align-items-center mt-4">
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
                                        <div className='data-title mt-2 mt-sm-0'>
                                            <span>{item.nama_user}</span>
                                        </div>
                                    </div>
                                    <div className='btn-edit-hapus mt-2 mt-sm-0'>
                                        <button className='btn-admin-2 justify-content-center justify-content-sm-start px-2 py-2 mb-2 mb-sm-3' style={{backgroundColor: '#E7B10A'}} onClick={() => directEdit(item.id_user)}>
                                            <AiFillEdit size={"100%"} className='button-icon-2'/>
                                            <div className='mx-2'><span>Edit</span></div>
                                        </button>
                                        <button className='btn-admin-2 justify-content-center justify-content-sm-start px-2 py-2 mt-2 mt-sm-3' style={{backgroundColor: '#B31312'}} onClick={() => directDelete(item.id_user)}>
                                            <AiFillDelete size={"100%"} className='button-icon-2'/>
                                            <div className='mx-2'><span>Hapus</span></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ):
                    (
                        akunHotel.map((item, index) => (
                            <div className='col-lg-6' key={index}>
                                <div className='list-data-wrapper d-flex justify-content-sm-between align-items-center flex-column flex-sm-row'>
                                    <div className='d-flex align-items-center flex-column flex-sm-row'>
                                        <div className='data-title mt-2 mt-sm-0'>
                                            <span>{item.nama_user}</span>
                                        </div>
                                    </div>
                                    <div className='btn-edit-hapus mt-2 mt-sm-0'>
                                        <button className='btn-admin-2 justify-content-center justify-content-sm-start px-2 py-2 mb-2 mb-sm-3' style={{backgroundColor: '#E7B10A'}} onClick={() => directEdit(item.id_user)}>
                                            <AiFillEdit size={"100%"} className='button-icon-2'/>
                                            <div className='mx-2'><span>Edit</span></div>
                                        </button>
                                        <button className='btn-admin-2 justify-content-center justify-content-sm-start px-2 py-2 mt-2 mt-sm-3' style={{backgroundColor: '#B31312'}} onClick={() => directDelete(item.id_user)}>
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

export default KontenAdminListAkunHotel