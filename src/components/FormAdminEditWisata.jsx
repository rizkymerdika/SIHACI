import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function FormAdminEditWisata() {
    const id_wisata = useParams()
    const api = import.meta.env.VITE_APP_API;
    const getOwById = import.meta.env.VITE_API_GET_OW_BY_ID
    const updateOw = import.meta.env.VITE_API_UPDATE_OW
    const url1 = `${api}${getOwById}${id_wisata.id}`
    const url2 = `${api}${updateOw}${id_wisata.id}`

    const [namaWisata, setNamaWisata] = useState('')
    const [kategori, setKategori] = useState('')
    const [jamBukaHariKerja, setJamBukaHariKerja] = useState('')
    const [jamTutupHariKerja, setJamTutupHariKerja] = useState('')
    const [jamBukaHariLibur, setJamBukaHariLibur] = useState('')
    const [jamTutupHariLibur, setJamTutupHariLibur] = useState('')
    const [hargaTiketHariKerja, setHargaTiketHariKerja] = useState('')
    const [hargaTiketHariLibur, setHargaTiketHariLibur] = useState('')
    const [alamat, setAlamat] = useState('')
    const [banner, setBanner] = useState(null)
    const [image, setImage] = useState(null)
    const [deskripsiWisata, setDeskripsiWisata] = useState('')
    const [linkGoogleMaps, setLinkGoogleMaps] = useState('')
    const [linkWebsite, setLinkWebsite] = useState('')
    const [linkInstagram, setLinkInstagram] = useState('')
    const [linkFacebook, setLinkFacebook] = useState('')
    const [linkYoutube, setLinkYoutube] = useState('')
    const [linkTwitter, setLinkTwitter] = useState('')

    useEffect(() => {
      fetch(url1)
      .then((response) => {
        return response.json()
      })
      .then((res) => {
        setNamaWisata(res.data[0].nama_wisata)
        setKategori(res.data[0].kategori_wisata)
        setJamBukaHariKerja(res.data[0].jam_buka_hari_kerja)
        setJamTutupHariKerja(res.data[0].jam_tutup_hari_kerja)
        setJamBukaHariLibur(res.data[0].jam_buka_weekend)
        setJamTutupHariLibur(res.data[0].jam_tutup_weekend)
        setHargaTiketHariKerja(res.data[0].harga_tiket_hari_kerja)
        setHargaTiketHariLibur(res.data[0].harga_tiket_weekend)
        setAlamat(res.data[0].alamat_wisata)
        setBanner(res.data[0].banner_wisata)
        setImage(res.data[0].image_wisata)
        setDeskripsiWisata(res.data[0].deskripsi_wisata)
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
      formData.append('nama_wisata', namaWisata)
      formData.append('kategori_wisata', kategori)
      formData.append('jam_buka_hari_kerja', jamBukaHariKerja)
      formData.append('jam_tutup_hari_kerja', jamTutupHariKerja)
      formData.append('jam_buka_weekend', jamBukaHariLibur)
      formData.append('jam_tutup_weekend', jamTutupHariLibur)
      formData.append('harga_tiket_hari_kerja', hargaTiketHariKerja)
      formData.append('harga_tiket_weekend', hargaTiketHariLibur)
      formData.append('alamat_wisata', alamat)
      if (banner != "") {
        formData.append('banner_wisata', banner)
      }
      if(image != "") {
        formData.append('image_wisata', image)
      }
      formData.append('deskripsi_wisata', deskripsiWisata)
      formData.append('link_gmaps', linkGoogleMaps)
      formData.append('link_website', linkWebsite)
      formData.append('link_instagram', linkInstagram)
      formData.append('link_facebook', linkFacebook)
      formData.append('link_youtube', linkYoutube)
      formData.append('link_twitter', linkTwitter)
      fetch(url2, {
        method: 'POST',
        body: formData
      })
      .then((response) => response.json())
      .then((data) => {
        alert("Update Data Objek Wisata Berhasil");
      })
      .catch((error) => {
        console.log(error);
        alert('Edit Data Objek Wisata Gagal');
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
                      <h2 className="fw-bold text-center my-0">Edit Objek Wisata</h2>
                    </div>
                    <form className="col-11" onSubmit={handleEdit}>
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
                          <option value="Wisata Budaya">Wisata Budaya</option>
                          <option value="Wisata Sejarah">Wisata Sejarah</option>
                          <option value="Wisata Religius">Wisata Religi</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Jam Buka (Hari Kerja)</label>
                        <div className="d-flex align-items-center">
                          <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                              <input type="time" name="Jam Buka" className="input-form-admin-2" value={jamBukaHariKerja} onChange={(e) => setJamBukaHariKerja(e.target.value)} required/>
                          </div>
                          <span className="s-d" style={{color: 'black'}}>-</span>
                          <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                              <input type="time" name="Jam Tutup" className="input-form-admin-2" value={jamTutupHariKerja} onChange={(e) => setJamTutupHariKerja(e.target.value)} required/>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Jam Buka (Akhir Pekan & Libur Nasional)</label>
                        <div className="d-flex align-items-center">
                          <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                              <input type="time" name="Jam Buka" className="input-form-admin-2" value={jamBukaHariLibur} onChange={(e) => setJamBukaHariLibur(e.target.value)} required/>
                          </div>
                          <span className="s-d" style={{color: 'black'}}>-</span>
                          <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                              <input type="time" name="Jam Tutup" className="input-form-admin-2" value={jamTutupHariLibur} onChange={(e) => setJamTutupHariLibur(e.target.value)} required/>
                          </div>
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