import { useState } from "react"

function KontenHotelGPW() {
    const [pwLama, setPwLama] = useState('')
    const [pwBaru, setPwBaru] = useState('')
    const [confirmPwBaru, setConfirmPwBaru] = useState('')

  return (
    <div className="mt-3">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="konten-admin-head fw-semibold my-0">Ganti Password</h1>
                </div>
            </div>
            <div className="row justify-content-center mt-sm-3">
                <div className="col-sm-11 form-gpw">
                    <div className="row my-3 my-sm-2">
                        <div className="col-12">
                            <label>Password Lama</label>
                        </div>
                        <div className="col-12">
                            <div className="gpw-input-wrapper">
                                <input type="password" name="Password Lama" value={pwLama} onChange={(e) => setPwLama(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3 my-sm-2">
                        <div className="col-12">
                            <label>Password Baru</label>
                        </div>
                        <div className="col-12">
                            <div className="gpw-input-wrapper">
                                <input type="password" name="Password Baru" value={pwBaru} onChange={(e) => setPwBaru(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3 my-sm-2">
                        <div className="col-12">
                            <label>Konfirmasi Password Baru</label>
                        </div>
                        <div className="col-12">
                            <div className="gpw-input-wrapper">
                                <input type="password" name="Konfirmasi Password Baru" value={confirmPwBaru} onChange={(e) => setConfirmPwBaru(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-11 text-end my-2 my-sm-4">
                    <button className="btn-admin-3">Simpan Perubahan</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KontenHotelGPW