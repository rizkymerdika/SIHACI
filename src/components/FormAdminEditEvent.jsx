import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function FormAdminEditEvent() {
    const id_event = useParams()
    const api = import.meta.env.VITE_APP_API;
    const getEventById = import.meta.env.VITE_API_GET_EVENT_BY_ID
    const updateEvent = import.meta.env.VITE_API_UPDATE_EVENT
    const url1 = `${api}${getEventById}${id_event.id}`
    const url2 = `${api}${updateEvent}${id_event.id}`

    const [namaEvent, setNamaEvent] = useState('')
    const [banner, setBanner] = useState(null)
    const [image, setImage] = useState(null)
    const [deskripsiEvent, setDeskripsiEvent] = useState('')

    useEffect(() => {
      fetch(url1)
      .then((response) => {
        return response.json()
      })
      .then((res) => {
        setNamaEvent(res.data[0].nama_event)
        setBanner(res.data[0].banner_event)
        setImage(res.data[0].image_event)
        setDeskripsiEvent(res.data[0].deskripsi_event)
      })
    }, [])

    function handleEdit(e) {
      e.preventDefault()
      const formData = new FormData();
      formData.append('nama_event', namaEvent)
      if (banner != "") {
        formData.append('banner_event', banner)
      }
      if(image != "") {
        formData.append('image_event', image)
      }
      formData.append('deskripsi_event', deskripsiEvent)
      fetch(url2, {
        method: 'POST',
        body: formData
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Update Data Event Berhasil");
      })
      .catch((error) => {
        console.log(error);
        alert('Edit Data Event Gagal');
      });
    }

  return (
    <div className="bg-form-admin">
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-lg-8 login-wrapper my-5">
                <div className="row justify-content-center">
                  <div className="col-11 my-3">
                    <h2 className="fw-bold text-center my-0">Edit Event</h2>
                  </div>
                  <form className="col-11" onSubmit={handleEdit}>
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Nama Event</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Nama Event" className="input-form-admin" placeholder="Cianjur Anime Fest" value={namaEvent} onChange={(e) => setNamaEvent(e.target.value)} required/>
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
                      <label className="label-form-admin fw-semibold">Deskripsi Event</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <textarea name="Deskripsi Event" className="input-form-admin" rows="8" value={deskripsiEvent} onChange={(e) => setDeskripsiEvent(e.target.value)} required></textarea>
                      </div>
                    </div>
                    <button type="submit" className="btn-form-admin fw-semibold mt-3 mb-3">Update</button>
                  </form>
                  <div className="col-11 text-center">
                    <p>Kembali ke <Link to={'/admin/event'}><span>Event</span></Link></p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default FormAdminEditEvent