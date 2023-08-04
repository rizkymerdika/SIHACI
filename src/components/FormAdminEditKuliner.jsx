import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function FormAdminEditKuliner() {
    const id_kuliner = useParams()
    const api = import.meta.env.VITE_APP_API;
    const getKulinerById = import.meta.env.VITE_API_GET_KULINER_BY_ID
    const updateKuliner = import.meta.env.VITE_API_UPDATE_KULINER
    const url1 = `${api}${getKulinerById}${id_kuliner.id}`
    const url2 = `${api}${updateKuliner}${id_kuliner.id}`

    const [namaKuliner, setNamaKuliner] = useState('')
    const [kategori, setKategori] = useState('')
    const [alamat, setAlamat] = useState('')
    const [banner, setBanner] = useState(null)
    const [image, setImage] = useState(null)
    const [deskripsiKuliner, setDeskripsiKuliner] = useState('')
    const [linkGoogleMaps, setLinkGoogleMaps] = useState('')
    const [linkInstagram, setLinkInstagram] = useState('')
    const [linkShopee, setLinkShopee] = useState('')
    const [linkTokopedia, setLinkTokopedia] = useState('')

    useEffect(() => {
      fetch(url1)
      .then((response) => {
        return response.json()
      })
      .then((res) => {
        setNamaKuliner(res.data[0].nama_kuliner)
        setKategori(res.data[0].kategori_kuliner)
        setAlamat(res.data[0].alamat_kuliner)
        setBanner(res.data[0].banner_kuliner)
        setImage(res.data[0].image_kuliner)
        setDeskripsiKuliner(res.data[0].deskripsi_kuliner)
        setLinkGoogleMaps(res.data[0].link_gmaps)
        setLinkInstagram(res.data[0].link_instagram)
        setLinkShopee(res.data[0].link_shopee)
        setLinkTokopedia(res.data[0].link_tokopedia)
      })
    }, [])

    function handleEdit(e) {
      e.preventDefault()
      const formData = new FormData();
      formData.append('nama_kuliner', namaKuliner)
      formData.append('kategori_kuliner', kategori)
      formData.append('alamat_kuliner', alamat)
      if (banner != "") {
        formData.append('banner_kuliner', banner)
      }
      if(image != "") {
        formData.append('image_kuliner', image)
      }
      formData.append('deskripsi_kuliner', deskripsiKuliner)
      formData.append('link_gmaps', linkGoogleMaps)
      formData.append('link_instagram', linkInstagram)
      formData.append('link_shopee', linkShopee)
      formData.append('link_tokopedia', linkTokopedia)
      fetch(url2, {
        method: 'POST',
        body: formData
      })
      .then((response) => response.json())
      .then((data) => {
        alert("Update Data Kuliner Berhasil");
      })
      .catch((error) => {
        console.log(error);
        alert('Edit Data Kuliner Gagal');
      });
    }

  return (
    <div className="bg-form-admin">
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-lg-8 login-wrapper my-5">
                <div className="row justify-content-center">
                  <div className="col-11 my-3">
                    <h2 className="fw-bold text-center my-0">Edit Kuliner</h2>
                  </div>
                  <form className="col-11" onSubmit={handleEdit}>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Nama Kuliner</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Nama Kuliner" className="input-form-admin" placeholder="Tauco Cap Meong" value={namaKuliner} onChange={(e) => setNamaKuliner(e.target.value)} required/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Kategori</label>
                      <select name="Kategori" className="input-form-admin-3 mt-1" value={kategori} onChange={(e) => handleSelect(e.target.value)} required>
                        <option>Silahkan Pilih</option>
                        <option value="Tempat Makan">Tempat Makan</option>
                        <option value="Oleh-oleh">Oleh-oleh</option>
                      </select>
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
                        <input type="file" name="Banner" className="input-form-admin"  onChange={(e) => setBanner(e.target.files[0])}/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Image</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="file" name="Image" className="input-form-admin"  onChange={(e) => setImage(e.target.files[0])}/>
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
                    <button type="submit" className="btn-form-admin fw-semibold mt-3 mb-3">Update</button>
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

export default FormAdminEditKuliner