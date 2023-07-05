import { useState } from "react"
import { Link } from "react-router-dom"

function FormHotelTambahLaporan() {
    const [tanggal, setTanggal] = useState('')
    const [namaHotel, setNamaHotel] = useState('')
    const [klasifikasiHotel, setKlasifikasiHotel] = useState('')
    const [jumlahKamarDimiliki, setJumlahKamarDimiliki] = useState('')
    const [jumlahKamarTerjual, setJumlahKamarTerjual] = useState('')
    const [lokal, setLokal] = useState('')
    const [asia, setAsia] = useState('')
    const [afrika, setAfrika] = useState('')
    const [amerikaUtara, setAmerikaUtara] = useState('')
    const [amerikaSelatan, setAmerikaSelatan] = useState('')
    const [antartika, setAntartika] = useState('')
    const [eropa, setEropa] = useState('')
    const [australia, setAustralia] = useState('')
    const [laki, setLaki] = useState('')
    const [perempuan, setPerempuan] = useState('')
    const [lamaTinggal, setLamaTinggal] = useState('')

    function handleSelect(value) {
        setKlasifikasiHotel(value)
    }

  return (
    <div className="bg-form-admin">
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-lg-8 login-wrapper my-5">
                <div className="row justify-content-center">
                  <div className="col-11 my-3">
                    <h2 className="fw-bold text-center my-0">Tambah Laporan</h2>
                  </div>
                  <form className="col-11">
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Tanggal</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="date" name="Tanggal" className="input-form-admin" value={tanggal} onChange={(e) => setTanggal(e.target.value)} required/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Nama Hotel</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Nama Hotel" className="input-form-admin" placeholder="Hotel Cianjur Cipanas" value={namaHotel} onChange={(e) => setNamaHotel(e.target.value)} required/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Klasifikasi Hotel</label>
                      <select name="Klasifikasi Hotel" className="input-form-admin-3 mt-1" value={klasifikasiHotel} onChange={(e) => handleSelect(e.target.value)} required>
                        <option>Silahkan Pilih</option>
                        <option value="Hotel Bintang">Hotel Bintang</option>
                        <option value="Hotel Non Bintang">Hotel Non Bintang</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Jumlah Kamar (Dimiliki/Terjual)</label>
                      <div className="d-flex align-items-center">
                        <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                            <input type="number" name="Jumlah Kamar Dimiliki" className="input-form-admin-2" placeholder="Dimiliki" value={jumlahKamarDimiliki} onChange={(e) => setJumlahKamarDimiliki(e.target.value)} required/>
                        </div>
                        <span className="s-d" style={{color: 'black'}}>/</span>
                        <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                            <input type="number" name="Jumlah Kamar Terjual" className="input-form-admin-2" placeholder="Terjual" value={jumlahKamarTerjual} onChange={(e) => setJumlahKamarTerjual(e.target.value)} required/>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Jumlah Wisatawan</label>
                      <div className="d-flex align-items-center">
                        <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                            <input type="number" name="Lokal" className="input-form-admin-2" placeholder="Lokal" value={lokal} onChange={(e) => setLokal(e.target.value)} required/>
                        </div>
                        <span className="s-d" style={{color: 'black'}}>/</span>
                        <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                            <input type="number" name="Asia" className="input-form-admin-2" placeholder="Asia" value={asia} onChange={(e) => setAsia(e.target.value)} required/>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                            <input type="number" name="Afrika" className="input-form-admin-2" placeholder="Afrika" value={afrika} onChange={(e) => setAfrika(e.target.value)} required/>
                        </div>
                        <span className="s-d" style={{color: 'black'}}>/</span>
                        <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                            <input type="number" name="Amerika Utara" className="input-form-admin-2" placeholder="Amerika Utara" value={amerikaUtara} onChange={(e) => setAmerikaUtara(e.target.value)} required/>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                            <input type="number" name="Amerika Selatan" className="input-form-admin-2" placeholder="Amerika Selatan" value={amerikaSelatan} onChange={(e) => setAmerikaSelatan(e.target.value)} required/>
                        </div>
                        <span className="s-d" style={{color: 'black'}}>/</span>
                        <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                            <input type="number" name="Antartika" className="input-form-admin-2" placeholder="Antartika" value={antartika} onChange={(e) => setAntartika(e.target.value)} required/>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                            <input type="number" name="Eropa" className="input-form-admin-2" placeholder="Eropa" value={eropa} onChange={(e) => setEropa(e.target.value)} required/>
                        </div>
                        <span className="s-d" style={{color: 'black'}}>/</span>
                        <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                            <input type="number" name="Australia" className="input-form-admin-2" placeholder="Australia" value={australia} onChange={(e) => setAustralia(e.target.value)} required/>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Jumlah Karyawan (Laki-laki/Perempuan)</label>
                      <div className="d-flex align-items-center">
                        <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                            <input type="number" name="Jumlah Karyawan Laki-laki" className="input-form-admin-2" placeholder="Laki-laki" value={laki} onChange={(e) => setLaki(e.target.value)} required/>
                        </div>
                        <span className="s-d" style={{color: 'black'}}>/</span>
                        <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                            <input type="number" name="Jumlah Karyawan Perempuan" className="input-form-admin-2" placeholder="Perempuan" value={perempuan} onChange={(e) => setPerempuan(e.target.value)} required/>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Rata-rata Lama Tinggal</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Rata-rata Lama Tinggal" className="input-form-admin" placeholder="7 Hari" value={lamaTinggal} onChange={(e) => setLamaTinggal(e.target.value)} required/>
                      </div>
                    </div>
                    <button type="submit" className="btn-form-admin fw-semibold mt-3 mb-3">Tambah</button>
                  </form>
                  <div className="col-11 text-center">
                    <p>Kembali ke <Link to={'/hotel'}><span>Beranda</span></Link></p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default FormHotelTambahLaporan