import axios from "axios"
import { useState } from "react"

function KontenAdminRegis() {
    const api = import.meta.env.VITE_APP_API
    const setHotel = import.meta.env.VITE_API_SET_HOTEL
    const url = `${api}${setHotel}`

    const [namaHotel, setNamaHotel] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        
        if (password == confirmPassword) {
            axios.post(url, {
                "nama_hotel": namaHotel,
                "username": username,
                "password": password
            })
            .then((res) => {
                alert("Buat Akun Hotel Berhasil");
                console.log(res);
            })
            setNamaHotel('')
            setUsername('')
            setPassword('')
            setConfirmPassword('')
        }
        else{
            alert("Password dan Konfirmasi Password Tidak Sesuai")
        }
    }

  return (
    <div className="mt-3">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="konten-admin-head fw-semibold my-0">Registrasi Akun Hotel</h1>
                </div>
            </div>
            <form className="row justify-content-center mt-sm-3" onSubmit={handleSubmit}>
                <div className="col-sm-11 form-registrasi">
                    <div className="row my-3 my-sm-2">
                        <div className="col-12">
                            <label>Nama Hotel</label>
                        </div>
                        <div className="col-12">
                            <div className="gpw-input-wrapper">
                                <input type="text" name="Nama Hotel" value={namaHotel} onChange={(e) => setNamaHotel(e.target.value)} required/>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3 my-sm-2">
                        <div className="col-12">
                            <label>Username</label>
                        </div>
                        <div className="col-12">
                            <div className="gpw-input-wrapper">
                                <input type="text" name="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3 my-sm-2">
                        <div className="col-12">
                            <label>Password</label>
                        </div>
                        <div className="col-12">
                            <div className="gpw-input-wrapper">
                                <input type="password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3 my-sm-2">
                        <div className="col-12">
                            <label>Konfirmasi Password</label>
                        </div>
                        <div className="col-12">
                            <div className="gpw-input-wrapper">
                                <input type="password" name="Konfirmasi Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-11 text-end my-2 my-sm-4">
                    <button className="btn-admin-4" type="submit">Buat Akun</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default KontenAdminRegis