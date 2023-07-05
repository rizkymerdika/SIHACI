import { useState } from "react"
import { Link } from "react-router-dom"

function FormAdminEditWisata() {
    const [namaWisata, setNamaWisata] = useState('')
    const [kategori, setKategori] = useState('')
    const [jamBukaHariKerja, setJamBukaHariKerja] = useState('')
    const [jamBukaHariLibur, setJamBukaHariLibur] = useState('')
    const [hargaTiketHariKerja, setHargaTiketHariKerja] = useState('')
    const [hargaTiketHariLibur, setHargaTiketHariLibur] = useState('')
    const [alamat, setAlamat] = useState('')
    const [deskripsiWisata, setDeskripsiWisata] = useState('')
    const [linkGoogleMaps, setLinkGoogleMaps] = useState('')
    const [linkWebsite, setLinkWebsite] = useState('')
    const [linkInstagram, setLinkInstagram] = useState('')
    const [linkFacebook, setLinkFacebook] = useState('')
    const [linkYoutube, setLinkYoutube] = useState('')
    const [linkTwitter, setLinkTwitter] = useState('')

    function handleSelect(value) {
      setKategori(value)
    }
  
    return (
      <div className="bg-form-admin">
          <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-10 col-lg-8 login-wrapper my-5">
                  <div className="row justify-content-center">
                    <div className="col-11 my-3">
                      <h2 className="fw-bold text-center my-0">Edit Objek Wisata</h2>
                    </div>
                    <form className="col-11">
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Nama Wisata</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="text" name="Nama Wisata" className="input-form-admin" placeholder="Kebun Raya Cibodas" value={namaWisata} onChange={(e) => setNamaWisata(e.target.value)} required/>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Kategori</label>
                        <select name="Kategori" className="input-form-admin-3 mt-1" value={kategori} onChange={(e) => handleSelect(e.target.value)} required>
                          <option>Silahkan Pilih</option>
                          <option value="Wisata Alam">Wisata Alam</option>
                          <option value="Wisata Buatan">Wisata Buatan</option>
                          <option value="Kebudayaan">Kebudayaan</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Jam Buka (Hari Kerja)</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="text" name="Jam Buka (Hari Kerja)" className="input-form-admin" placeholder="08.00 - 16-00" value={jamBukaHariKerja} onChange={(e) => setJamBukaHariKerja(e.target.value)} required/>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Jam Buka (Akhir Pekan & Libur Nasional)</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="text" name="Jam Buka (Akhir Pekan & Libur Nasional)" className="input-form-admin" placeholder="07.00 - 16-00" value={jamBukaHariLibur} onChange={(e) => setJamBukaHariLibur(e.target.value)} required/>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Harga Tiket (Hari Kerja)</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="number" name="Harga Tiket (Hari Kerja)" className="input-form-admin" placeholder="25000" value={hargaTiketHariKerja} onChange={(e) => setHargaTiketHariKerja(e.target.value)} required/>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Harga Tiket (Akhir Pekan & Libur Nasional)</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="number" name="Harga Tiket (Akhir Pekan & Libur Nasional)" className="input-form-admin" placeholder="30000" value={hargaTiketHariLibur} onChange={(e) => setHargaTiketHariLibur(e.target.value)} required/>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Alamat</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="text" name="Alamat" className="input-form-admin" placeholder="Jl. Kebun Raya Cibodas, Sindangjaya, Kec. Cipanas, Kabupaten Cianjur, Jawa Barat 43253" value={alamat} onChange={(e) => setAlamat(e.target.value)} required/>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Banner</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="file" name="Banner" className="input-form-admin" required/>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Image</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="file" name="Image" className="input-form-admin" required/>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Deskripsi Wisata</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <textarea name="Deskripsi Wisata" className="input-form-admin" rows="8" value={deskripsiWisata} onChange={(e) => setDeskripsiWisata(e.target.value)} required></textarea>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Link Google Maps</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="text" name="Link Google Maps" className="input-form-admin" placeholder="https://www.google.com/maps/embed?pb=example" value={linkGoogleMaps} onChange={(e) => setLinkGoogleMaps(e.target.value)}/>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Link Website</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="text" name="Link Website" className="input-form-admin" placeholder="https://example.com/" value={linkWebsite} onChange={(e) => setLinkWebsite(e.target.value)}/>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Link Instagram</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="text" name="Link Instagram" className="input-form-admin" placeholder="https://example.com/" value={linkInstagram} onChange={(e) => setLinkInstagram(e.target.value)}/>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Link Facebook</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="text" name="Link Facebook" className="input-form-admin" placeholder="https://example.com/" value={linkFacebook} onChange={(e) => setLinkFacebook(e.target.value)}/>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Link YouTube</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="text" name="Link YouTube" className="input-form-admin" placeholder="https://example.com/" value={linkYoutube} onChange={(e) => setLinkYoutube(e.target.value)}/>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Link Twitter</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="text" name="Link Twitter" className="input-form-admin" placeholder="https://example.com/" value={linkTwitter} onChange={(e) => setLinkTwitter(e.target.value)}/>
                        </div>
                      </div>
                      <button type="submit" className="btn-form-admin fw-semibold mt-3 mb-3">Update</button>
                    </form>
                    <div className="col-11 text-center">
                      <p>Kembali ke <Link to={'/admin/objekwisata'}><span>Objek Wisata</span></Link></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    )
}

export default FormAdminEditWisata