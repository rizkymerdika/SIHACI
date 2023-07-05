import { useState } from "react"
import { Link } from "react-router-dom"

function FormAdminEditTravel() {
    const [namaTravel, setNamaTravel] = useState('')
    const [jamBerangkat, setJamBerangkat] = useState('')
    const [tripDanHarga, setTripDanHarga] = useState('')
    const [alamat, setAlamat] = useState('')
    const [nomorTelepon, setNomorTelepon] = useState('')
    const [deskripsiTravel, setDeskripsiTravel] = useState('')
    const [linkGoogleMaps, setLinkGoogleMaps] = useState('')
    const [linkWebsite, setLinkWebsite] = useState('')
    const [linkInstagram, setLinkInstagram] = useState('')
    const [linkFacebook, setLinkFacebook] = useState('')
    const [linkTwitter, setLinkTwitter] = useState('')

  return (
    <div className="bg-form-admin">
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-lg-8 login-wrapper my-5">
                <div className="row justify-content-center">
                  <div className="col-11 my-3">
                    <h2 className="fw-bold text-center my-0">Edit Travel</h2>
                  </div>
                  <form className="col-11">
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Nama Travel</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Nama Travel" className="input-form-admin" placeholder="Siliwangi Trans Cianjur" value={namaTravel} onChange={(e) => setNamaTravel(e.target.value)} required/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Jam Keberangkatan</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Jam Keberangkatan" className="input-form-admin" placeholder="05.00 - 21.00" value={jamBerangkat} onChange={(e) => setJamBerangkat(e.target.value)} required/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Trip dan Harga</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <textarea name="Trip dan Harga" className="input-form-admin" rows="8" value={tripDanHarga} onChange={(e) => setTripDanHarga(e.target.value)} required placeholder="Contoh Penulisan
Cianjur - Jakarta: Rp. 95.000
Cianjur - Bandung: Rp. 55.000"></textarea>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Alamat</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Alamat" className="input-form-admin" placeholder="Jl. Dr. Muwardi No.133, Muka, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat" value={alamat} onChange={(e) => setAlamat(e.target.value)} required/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Nomor Telepon</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="number" name="Nomor Telepon" className="input-form-admin" placeholder="(0263) 54321" value={nomorTelepon} onChange={(e) => setNomorTelepon(e.target.value)} required/>
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
                      <label className="label-form-admin fw-semibold">Deskripsi Travel</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <textarea name="Deskripsi Travel" className="input-form-admin" rows="8" value={deskripsiTravel} onChange={(e) => setDeskripsiTravel(e.target.value)} required></textarea>
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
                        <input type="text" name="Link Instagram" className="input-form-admin" placeholder="https://example.com/" value={linkWebsite} onChange={(e) => setLinkWebsite(e.target.value)}/>
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
                      <label className="label-form-admin fw-semibold">Link Twitter</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Link Twitter" className="input-form-admin" placeholder="https://example.com/" value={linkTwitter} onChange={(e) => setLinkTwitter(e.target.value)}/>
                      </div>
                    </div>
                    <button type="submit" className="btn-form-admin fw-semibold mt-3 mb-3">Update</button>
                  </form>
                  <div className="col-11 text-center">
                    <p>Kembali ke <Link to={'/admin/travel'}><span>Travel</span></Link></p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default FormAdminEditTravel