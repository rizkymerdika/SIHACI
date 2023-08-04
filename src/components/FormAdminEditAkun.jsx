import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function FormAdminEditAkun() {
    const id_akun = useParams()
    const api = import.meta.env.VITE_APP_API;
    const getHotel = import.meta.env.VITE_API_GET_HOTEL_BY_ID
    const updateHotel = import.meta.env.VITE_API_SET_HOTEL_BY_ID
    const url = `${api}${getHotel}${id_akun.id}`
    const url2 = `${api}${updateHotel}${id_akun.id}`

    const [idUser, setIdUser] = useState('')
    const [namaAkun, setNamaAkun] = useState('')
    const [username, setUsername] = useState('')
    const [passwordLama, setPasswordLama] = useState('')
    const [passwordBaru, setPasswordBaru] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [roleUser, setRoleUser] = useState('')

    useEffect(() => {
        axios(url)
        .then((res) => {
            setIdUser(res.data.data[0].id_user)
            setNamaAkun(res.data.data[0].nama_user)
            setUsername(res.data.data[0].username)
            setPasswordLama(res.data.data[0].password)
            setRoleUser(res.data.data[0].role_user)
        })
    }, [])

    function handleEdit(e) {
        e.preventDefault()
        if (passwordBaru == confirmPassword) {
            const formData = new FormData();
            formData.append('id_user', idUser)
            formData.append('nama_hotel', namaAkun)
            formData.append('username', username)
            formData.append('password', passwordBaru)
            formData.append('role_user', roleUser)
            fetch(url2, {
            method: 'POST',
            body: formData
            })
            .then((response) => response.json())
            .then((data) => {
                alert("Update Data Akun Hotel Berhasil");
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
                alert('Update Data Akun Hotel Gagal');
            });
        }else{
            alert('Password dan Konfirmasi Password Baru Harus Sesuai')
        }
      }

  return (
    <div className="bg-form-admin">
          <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-10 col-lg-8 login-wrapper my-5">
                  <div className="row justify-content-center">
                    <div className="col-11 my-3">
                      <h2 className="fw-bold text-center my-0">Edit Akun Hotel</h2>
                    </div>
                    <form className="col-11" onSubmit={handleEdit}>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Nama Akun</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="text" name="Nama Akun" className="input-form-admin" value={namaAkun} onChange={(e) => setNamaAkun(e.target.value)} required/>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Username</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="text" name="Username" className="input-form-admin" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Password Lama</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="password" name="Password Lama" className="input-form-admin" value={passwordLama} readOnly required/>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Password Baru</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="password" name="Password Baru" className="input-form-admin" value={passwordBaru} onChange={(e) => setPasswordBaru(e.target.value)}/>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="label-form-admin fw-semibold">Konfirmasi Password Baru</label>
                        <div className="input-wrapper-login d-flex justify-content-center mt-1">
                          <input type="password" name="Konfirmasi Password Baru" className="input-form-admin" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </div>
                      </div>
                      <button type="submit" className="btn-form-admin fw-semibold mt-3 mb-3">Update</button>
                    </form>
                    <div className="col-11 text-center kembali-list-akun">
                      <p>Kembali ke <Link to={'/admin/listakun'} className=''><span>List Akun</span></Link></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
    </div>
  )
}

export default FormAdminEditAkun