import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function FormAdminTambahAkomodasi() {
    const api = import.meta.env.VITE_APP_API;
    const akomodasi = import.meta.env.VITE_API_SET_AKOMODASI
    const getHotel = import.meta.env.VITE_API_GET_HOTEL
    const url = `${api}${akomodasi}`
    const url2 = `${api}${getHotel}`

    const [namaHotel, setNamaHotel] = useState('')
    const [kategori, setKategori] = useState('')
    const [hargaTerendah, setHargaTerendah] = useState('')
    const [hargaTertinggi, setHargaTertinggi] = useState('')
    const [nomorTelepon, setNomorTelepon] = useState('')
    const [alamat, setAlamat] = useState('')
    const [banner, setBanner] = useState(null)
    const [image, setImage] = useState(null)
    const [deskripsiHotel, setDeskripsiHotel] = useState('')
    const [linkGoogleMaps, setLinkGoogleMaps] = useState('')
    const [linkWebsite, setLinkWebsite] = useState('')
    const [linkInstagram, setLinkInstagram] = useState('')
    const [linkFacebook, setLinkFacebook] = useState('')
    const [linkTwitter, setLinkTwitter] = useState('')
    const [linkYoutube, setLinkYoutube] = useState('')
    const [akunHotel, setAkunHotel] = useState([])
    // console.log(akunHotel);
    const filterHotel = akunHotel.filter(item => item.nama_user == namaHotel)
    // console.log(filterHotel);

    useEffect(() => {
      axios(url2)
      .then((res) => {
        setAkunHotel(res.data.data)
      })
    }, [])
    

    function handleSelect(value) {
      setKategori(value)
    }

    function handleSubmit(e){
      e.preventDefault()
      const formData = new FormData();
      if (filterHotel != '') {
        formData.append('id_hotel', filterHotel[0].id_user)
      }
      // else{
      //   formData.append('id_hotel',  )
      // }
      formData.append('nama_akomodasi', namaHotel)
      formData.append('kategori_hotel', kategori)
      formData.append('harga_terendah', hargaTerendah)
      formData.append('harga_tertinggi', hargaTertinggi)
      formData.append('nomor_telepon', nomorTelepon)
      formData.append('alamat_akomodasi', alamat)
      formData.append('banner_akomodasi', banner)
      formData.append('image_akomodasi', image)
      formData.append('deskripsi_akomodasi', deskripsiHotel)
      formData.append('link_gmaps', linkGoogleMaps)
      formData.append('link_website', linkWebsite)
      formData.append('link_instagram', linkInstagram)
      formData.append('link_youtube', linkYoutube)
      formData.append('link_twitter', linkTwitter)
      formData.append('link_facebook', linkFacebook)
      fetch(url, {
        method: 'POST',
        body: formData
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Tambah Data Akomodasi Berhasil");
      })
      .catch((error) => {
        console.log(error);
        alert('Tambah Data Akomodasi Gagal');
      });
  
      setNamaHotel('')
      setKategori('')
      setHargaTerendah('')
      setHargaTertinggi('')
      setNomorTelepon('')
      setAlamat('')
      setBanner('')
      setImage('')
      setDeskripsiHotel('')
      setLinkGoogleMaps('')
      setLinkWebsite('')
      setLinkInstagram('')
      setLinkFacebook('')
      setLinkYoutube('')
      setLinkTwitter('')
    }

  return (
    <div className="bg-form-admin">
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-lg-8 login-wrapper my-5">
                <div className="row justify-content-center">
                  <div className="col-11 my-3">
                    <h2 className="fw-bold text-center my-0">Tambah Akomodasi</h2>
                  </div>
                  <form className="col-11" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Nama Akomodasi</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Nama Akomodasi" className="input-form-admin" placeholder="Hotel Cianjur Cipanas" value={namaHotel} onChange={(e) => setNamaHotel(e.target.value)} required/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Kategori</label>
                      <select name="Kategori" className="input-form-admin-3 mt-1" value={kategori} onChange={(e) => handleSelect(e.target.value)} required>
                        <option>Silahkan Pilih</option>
                        <option value="Hotel Bintang">Hotel Bintang</option>
                        <option value="Hotel Non Bintang">Hotel Non Bintang</option>
                        <option value="Villa">Villa</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Rentang Harga per Malam</label>
                      <div className="d-flex align-items-center">
                        <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                            <input type="number" name="Harga per Malam" className="input-form-admin-2" placeholder="20000" value={hargaTerendah} onChange={(e) => setHargaTerendah(e.target.value)} required/>
                        </div>
                        <span className="s-d" style={{color: 'black'}}>-</span>
                        <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                            <input type="number" name="Harga per Malam" className="input-form-admin-2" placeholder="50000" value={hargaTertinggi} onChange={(e) => setHargaTertinggi(e.target.value)} required/>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Nomor Telepon</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Nomor Telepon" className="input-form-admin" placeholder="(0263) 516480" value={nomorTelepon} onChange={(e) => setNomorTelepon(e.target.value)} required/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Alamat</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Alamat" className="input-form-admin" placeholder="Jl. Raya Cipanas No.KM. 81, RW.3, Gadog, Kec. Pacet, Kabupaten Cianjur, Jawa Barat 43253" value={alamat} onChange={(e) => setAlamat(e.target.value)} required/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Banner</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="file" name="Banner" className="input-form-admin" onChange={(e) => setBanner(e.target.files[0])} required/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Image</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="file" name="Image" className="input-form-admin" onChange={(e) => setImage(e.target.files[0])} required/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Deskripsi Akomodasi</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <textarea name="Deskripsi Hotel" className="input-form-admin" rows="8" value={deskripsiHotel} onChange={(e) => setDeskripsiHotel(e.target.value)} required></textarea>
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
                      <label className="label-form-admin fw-semibold">Link Twitter</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Link Twitter" className="input-form-admin" placeholder="https://example.com/" value={linkTwitter} onChange={(e) => setLinkTwitter(e.target.value)}/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Link Youtube</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Link Youtube" className="input-form-admin" placeholder="https://example.com/" value={linkYoutube} onChange={(e) => setLinkYoutube(e.target.value)}/>
                      </div>
                    </div>
                    <button type="submit" className="btn-form-admin fw-semibold mt-3 mb-3">Tambah</button>
                  </form>
                  <div className="col-11 text-center">
                    <p>Kembali ke <Link to={'/admin/akomodasi'}><span>Akomodasi</span></Link></p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default FormAdminTambahAkomodasi