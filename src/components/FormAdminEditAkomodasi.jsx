import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function FormAdminEditAkomodasi() {
    const id_akomodasi = useParams()
    const api = import.meta.env.VITE_APP_API;
    const getAkomById = import.meta.env.VITE_API_GET_AKOMODASI_BY_ID
    const updateAkomodasi = import.meta.env.VITE_API_UPDATE_AKOMODASI
    const url1 = `${api}${getAkomById}${id_akomodasi.id}`
    const url2 = `${api}${updateAkomodasi}${id_akomodasi.id}`

    const [idHotel, setIdHotel] = useState('')
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

    useEffect(() => {
      fetch(url1)
      .then((response) => {
        return response.json()
      })
      .then((res) => {
        setIdHotel(res.data[0].id_hotel)
        setNamaHotel(res.data[0].nama_akomodasi)
        setKategori(res.data[0].kategori_hotel)
        setHargaTerendah(res.data[0].harga_terendah)
        setHargaTertinggi(res.data[0].harga_tertinggi)
        setNomorTelepon(res.data[0].nomor_telepon)
        setAlamat(res.data[0].alamat_akomodasi)
        setBanner(res.data[0].banner_akomodasi)
        setImage(res.data[0].image_akomodasi)
        setDeskripsiHotel(res.data[0].deskripsi_akomodasi)
        setLinkGoogleMaps(res.data[0].link_gmaps)
        setLinkWebsite(res.data[0].link_website)
        setLinkInstagram(res.data[0].link_instagram)
        setLinkFacebook(res.data[0].link_facebook)
        setLinkYoutube(res.data[0].link_youtube)
        setLinkTwitter(res.data[0].link_twitter)
      })
    }, [])

    function handleEdit(e) {
      e.preventDefault()
      const formData = new FormData();
      formData.append('id_hotel', idHotel)
      formData.append('nama_akomodasi', namaHotel)
      formData.append('kategori_hotel', kategori)
      formData.append('harga_terendah', hargaTerendah)
      formData.append('harga_tertinggi', hargaTertinggi)
      formData.append('nomor_telepon', nomorTelepon)
      formData.append('alamat_akomodasi', alamat)
      if (banner != "") {
        formData.append('banner_akomodasi', banner)
      }
      if(image != "") {
        formData.append('image_akomodasi', image)
      }
      formData.append('deskripsi_akomodasi', deskripsiHotel)
      formData.append('link_gmaps', linkGoogleMaps)
      formData.append('link_website', linkWebsite)
      formData.append('link_instagram', linkInstagram)
      formData.append('link_youtube', linkYoutube)
      formData.append('link_twitter', linkTwitter)
      formData.append('link_facebook', linkFacebook)
      fetch(url2, {
        method: 'POST',
        body: formData
      })
      .then((response) => response.json())
      .then((data) => {
        alert("Update Data Akomodasi Berhasil");
      })
      .catch((error) => {
        alert('Edit Data Akomodasi Gagal');
      });
    }

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
                    <h2 className="fw-bold text-center my-0">Edit Akomodasi</h2>
                  </div>
                  <form className="col-11" onSubmit={handleEdit}>
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
                        <input type="file" name="Banner" className="input-form-admin" onChange={(e) => setBanner(e.target.files[0])}/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Image</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="file" name="Image" className="input-form-admin" onChange={(e) => setImage(e.target.files[0])}/>
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
                    <button type="submit" className="btn-form-admin fw-semibold mt-3 mb-3">Update</button>
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

export default FormAdminEditAkomodasi