import { useState } from "react"
import { Link } from "react-router-dom"

function FormAdminEditEvent() {
    const [namaEvent, setNamaEvent] = useState('')
    const [deskripsiEvent, setDeskripsiEvent] = useState('')

  return (
    <div className="bg-form-admin">
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-lg-8 login-wrapper my-5">
                <div className="row justify-content-center">
                  <div className="col-11 my-3">
                    <h2 className="fw-bold text-center my-0">Edit Event</h2>
                  </div>
                  <form className="col-11">
                    <div className="mb-3">
                      <label className="label-form-admin fw-semibold">Nama Event</label>
                      <div className="input-wrapper-login d-flex justify-content-center mt-1">
                        <input type="text" name="Nama Event" className="input-form-admin" placeholder="Cianjur Anime Fest" value={namaEvent} onChange={(e) => setNamaEvent(e.target.value)} required/>
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