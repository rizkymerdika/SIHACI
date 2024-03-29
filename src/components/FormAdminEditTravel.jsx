import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function FormAdminEditTravel() {
    const id_travel = useParams()
    const api = import.meta.env.VITE_APP_API;
    const getTravelById = import.meta.env.VITE_API_GET_TRAVEL_BY_ID
    const updateTravel = import.meta.env.VITE_API_UPDATE_TRAVEL
    const url1 = `${api}${getTravelById}${id_travel.id}`
    const url2 = `${api}${updateTravel}${id_travel.id}`

    const [namaTravel, setNamaTravel] = useState('')
    const [jamBuka, setJamBuka] = useState('')
    const [jamTutup, setJamTutup] = useState('')
    const [tripDanHarga, setTripDanHarga] = useState('')
    const [alamat, setAlamat] = useState('')
    const [nomorTelepon, setNomorTelepon] = useState('')
    const [banner, setBanner] = useState(null)
    const [image, setImage] = useState(null)
    const [deskripsiTravel, setDeskripsiTravel] = useState('')
    const [linkGoogleMaps, setLinkGoogleMaps] = useState('')
    const [linkWebsite, setLinkWebsite] = useState('')
    const [linkInstagram, setLinkInstagram] = useState('')
    const [linkFacebook, setLinkFacebook] = useState('')
    const [linkTwitter, setLinkTwitter] = useState('')
    console.log(tripDanHarga);

    useEffect(() => {
      fetch(url1)
      .then((response) => {
        return response.json()
      })
      .then((res) => {
        setNamaTravel(res.data[0].nama_travel)
        setJamBuka(res.data[0].jam_buka)
        setJamTutup(res.data[0].jam_tutup)
        setTripDanHarga(res.data[0].trip_dan_harga)
        setAlamat(res.data[0].alamat_travel)
        setNomorTelepon(res.data[0].nomor_telepon_travel)
        setBanner(res.data[0].banner_travel)
        setImage(res.data[0].image_travel)
        setDeskripsiTravel(res.data[0].deskripsi_travel)
        setLinkGoogleMaps(res.data[0].link_gmaps)
        setLinkWebsite(res.data[0].link_website)
        setLinkInstagram(res.data[0].link_instagram)
        setLinkFacebook(res.data[0].link_facebook)
        setLinkTwitter(res.data[0].link_twitter)
      })
    }, [])    

    useEffect(() => {
      const editor = CKEDITOR.replace('editor1');
      editor.setData(tripDanHarga);
      editor.on('change', () => {
        setTripDanHarga(editor.getData());
      });
      return () => {
        editor.destroy();
      };
    }, [tripDanHarga])

    function handleEdit(e) {
      e.preventDefault()
      const formData = new FormData();
      formData.append('nama_travel', namaTravel)
      formData.append('jam_buka', jamBuka)
      formData.append('jam_tutup', jamTutup)
      formData.append('trip_dan_harga', tripDanHarga)
      formData.append('alamat_travel', alamat)
      formData.append('nomor_telepon_travel', nomorTelepon)
      if (banner != "") {
        formData.append('banner_travel', banner)
      }
      if(image != "") {
        formData.append('image_travel', image)
      }
      formData.append('deskripsi_travel', deskripsiTravel)
      formData.append('link_gmaps', linkGoogleMaps)
      formData.append('link_website', linkWebsite)
      formData.append('link_instagram', linkInstagram)
      formData.append('link_facebook', linkFacebook)
      formData.append('link_twitter', linkTwitter)
      fetch(url2, {
        method: 'POST',
        body: formData
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Update Data Travel Berhasil");
      })
      .catch((error) => {
        console.log(error);
        alert('Edit Data Travel Gagal');
      });
    }

  return (
    <div className="bg-form-admin">
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-lg-8 login-wrapper my-5">
                <div className="row justify-content-center">
                  <div className="col-11 my-3">
                    <h2 className="fw-bold text-center my-0">Edit Travel</h2>
                  </div>
                  <form className="col-11" onSubmit={handleEdit}>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Nama Travel</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Nama Travel" className="input-form-admin" placeholder="Siliwangi Trans Cianjur" value={namaTravel} onChange={(e) => setNamaTravel(e.target.value)} required/>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Jam Buka</label>
                      <div className="d-flex align-items-center">
                        <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                            <input type="time" name="Jam Buka" className="input-form-admin-2" value={jamBuka} onChange={(e) => setJamBuka(e.target.value)} required/>
                        </div>
                        <span className="s-d" style={{color: 'black'}}>-</span>
                        <div className="input-wrapper-login d-flex justify-content-center flex-fill mt-1">
                            <input type="time" name="Jam Tutup" className="input-form-admin-2" value={jamTutup} onChange={(e) => setJamTutup(e.target.value)} required/>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Trip dan Harga</label>
                      <textarea name="Trip dan Harga" id="editor1" rows="10" cols="80" value={tripDanHarga} onChange={(e) => setTripDanHarga(e.target.value)}></textarea>
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
                        <input type="text" name="Nomor Telepon" className="input-form-admin" placeholder="(0263) 54321" value={nomorTelepon} onChange={(e) => setNomorTelepon(e.target.value)} required/>
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