import { useState } from "react"
import { Link } from "react-router-dom"

function FormAdminTambahKuliner(){
  const api = import.meta.env.VITE_APP_API;
  const kuliner = import.meta.env.VITE_API_SET_KULINER
  const url = `${api}${kuliner}`

  const [namaKuliner, setNamaKuliner] = useState('')
  const [alamat, setAlamat] = useState('')
  const [banner, setBanner] = useState(null)
  const [image, setImage] = useState(null)
  const [deskripsiKuliner, setDeskripsiKuliner] = useState('')
  const [linkGoogleMaps, setLinkGoogleMaps] = useState('')
  const [linkInstagram, setLinkInstagram] = useState('')
  const [linkShopee, setLinkShopee] = useState('')
  const [linkTokopedia, setLinkTokopedia] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData();
    formData.append('nama_kuliner', namaKuliner)
    formData.append('alamat_kuliner', alamat)
    formData.append('banner_kuliner', banner)
    formData.append('image_kuliner', image)
    formData.append('deskripsi_kuliner', deskripsiKuliner)
    formData.append('link_gmaps', linkGoogleMaps)
    formData.append('link_instagram', linkInstagram)
    formData.append('link_shopee', linkShopee)
    formData.append('link_tokopedia', linkTokopedia)
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Tambah Data Kuliner Berhasil");
    })
    .catch((error) => {
      console.log(error);
      alert('Tambah Data Kuliner Gagal');
    });

    setNamaKuliner('')
    setAlamat('')
    setBanner('')
    setImage('')
    setDeskripsiKuliner('')
    setLinkGoogleMaps('')
    setLinkInstagram('')
    setLinkShopee('')
    setLinkTokopedia('')
  }

  return (
    <div className="bg-form-admin">
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-lg-8 login-wrapper my-5">
                <div className="row justify-content-center">
                  <div className="col-11 my-3">
                    <h2 className="fw-bold text-center my-0">Tambah Kuliner</h2>
                  </div>
                  <form className="col-11" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Nama Kuliner</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Nama Kuliner" className="input-form-admin" placeholder="Tauco Cap Meong" value={namaKuliner} onChange={(e) => setNamaKuliner(e.target.value)} required/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Alamat</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Alamat" className="input-form-admin" placeholder="Cijedil, Kec. Cugenang, Kabupaten Cianjur, Jawa Barat 43252" value={alamat} onChange={(e) => setAlamat(e.target.value)} required/>
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
                      <label className="label-form-admin fw-semibold">Deskripsi Kuliner</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <textarea name="Deskripsi Kuliner" className="input-form-admin" rows="8" value={deskripsiKuliner} onChange={(e) => setDeskripsiKuliner(e.target.value)} required></textarea>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Link Google Maps</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Link Google Maps" className="input-form-admin" placeholder="https://www.google.com/maps/embed?pb=example" value={linkGoogleMaps} onChange={(e) => setLinkGoogleMaps(e.target.value)}/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Link Instagram</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Link Instagram" className="input-form-admin" placeholder="https://example.com/" value={linkInstagram} onChange={(e) => setLinkInstagram(e.target.value)}/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Link Shopee</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Link Shopee" className="input-form-admin" placeholder="https://example.com/" value={linkShopee} onChange={(e) => setLinkShopee(e.target.value)}/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Link Tokopedia</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Link Tokopedia" className="input-form-admin" placeholder="https://example.com/" value={linkTokopedia} onChange={(e) => setLinkTokopedia(e.target.value)}/>
                      </div>
                    </div>
                    <button type="submit" className="btn-form-admin fw-semibold mt-3 mb-3">Tambah</button>
                  </form>
                  <div className="col-11 text-center">
                    <p>Kembali ke <Link to={'/admin/kuliner'}><span>Kuliner</span></Link></p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default FormAdminTambahKuliner