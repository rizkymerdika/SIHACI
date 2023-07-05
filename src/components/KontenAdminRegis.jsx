import { useState } from "react"

function KontenAdminRegis() {
    const [namaHotel, setNamaHotel] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div className="mt-3">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="konten-admin-head fw-semibold my-0">Registrasi Akun Hotel</h1>
                </div>
            </div>
            <div className="row justify-content-center mt-sm-3">
                <div className="col-sm-11 form-registrasi">
                    <div className="row my-3 my-sm-2">
                        <div className="col-12">
                            <label>Nama Hotel</label>
                        </div>
                        <div className="col-12">
                            <div className="gpw-input-wrapper">
                                <input type="text" name="Nama Hotel" value={namaHotel} onChange={(e) => setNamaHotel(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3 my-sm-2">
                        <div className="col-12">
                            <label>Username</label>
                        </div>
                        <div className="col-12">
                            <div className="gpw-input-wrapper">
                                <input type="text" name="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3 my-sm-2">
                        <div className="col-12">
                            <label>Password</label>
                        </div>
                        <div className="col-12">
                            <div className="gpw-input-wrapper">
                                <input type="password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3 my-sm-2">
                        <div className="col-12">
                            <label>Konfirmasi Password</label>
                        </div>
                        <div className="col-12">
                            <div className="gpw-input-wrapper">
                                <input type="password" name="Konfirmasi Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-11 text-end my-2 my-sm-4">
                    <button className="btn-admin-4">Buat Akun</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KontenAdminRegis