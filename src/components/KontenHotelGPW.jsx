import { useEffect, useState } from "react"
import axios from "axios"

function KontenHotelGPW() {
    const [pwLama, setPwLama] = useState('')
    const [pwBaru, setPwBaru] = useState('')
    const [confirmPwBaru, setConfirmPwBaru] = useState('')

    const getNamaHotel = localStorage.getItem('nama_user')
    const getUsername = localStorage.getItem('username')
    const getIdUser = localStorage.getItem('id_user')
    const api = import.meta.env.VITE_APP_API
    const getHotel = import.meta.env.VITE_API_GPW_HOTEL
    const url = `${api}${getHotel}${getIdUser}`

    function handleSubmit(e) {
        e.preventDefault()
        
        if (pwLama != pwBaru) {
            if (pwBaru == confirmPwBaru) {
                axios.post(url, {
                    "nama_hotel": getNamaHotel,
                    "username": getUsername,
                    "password": pwBaru
                })
                .then((res) => {
                  alert("Ganti Password Berhasil");
                })
                setPwLama('')
                setPwBaru('')
                setConfirmPwBaru('')
            }
            else{
                alert("Password Baru dan Konfirmasi Password Baru Tidak Sesuai")
            }
        }
        else{
            alert("Password Lama dan Password Baru Tidak Boleh Sama")

        }
    }

  return (
    <div className="mt-3">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="konten-admin-head fw-semibold my-0">Ganti Password</h1>
                </div>
            </div>
            <form className="row justify-content-center mt-sm-3" onSubmit={handleSubmit}>
                <div className="col-sm-11 form-gpw">
                    <div className="row my-3 my-sm-2">
                        <div className="col-12">
                            <label>Password Lama</label>
                        </div>
                        <div className="col-12">
                            <div className="gpw-input-wrapper">
                                <input type="password" name="Password Lama" value={pwLama} onChange={(e) => setPwLama(e.target.value)} required/>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3 my-sm-2">
                        <div className="col-12">
                            <label>Password Baru</label>
                        </div>
                        <div className="col-12">
                            <div className="gpw-input-wrapper">
                                <input type="password" name="Password Baru" value={pwBaru} onChange={(e) => setPwBaru(e.target.value)} required/>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3 my-sm-2">
                        <div className="col-12">
                            <label>Konfirmasi Password Baru</label>
                        </div>
                        <div className="col-12">
                            <div className="gpw-input-wrapper">
                                <input type="password" name="Konfirmasi Password Baru" value={confirmPwBaru} onChange={(e) => setConfirmPwBaru(e.target.value)} required/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-11 text-end my-2 my-sm-4">
                    <button className="btn-admin-3">Simpan Perubahan</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default KontenHotelGPW