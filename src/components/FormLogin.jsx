import { useState } from "react"


function FormLogin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className="bg-login d-flex align-items-center">
        <div className="container">
            <div className="row justify-content-center justify-content-lg-start">
                <div className="col-sm-10 col-md-8 col-lg-5 ms-lg-5 login-wrapper">
                    <div className="row justify-content-center">
                        <div className="col-10 gx-0 mt-4">
                            <h2 className="login-head fw-bold text-center">Selamat Datang di SIHACI</h2>
                        </div>
                        <div className="col-10 gx-0 mt-3">
                            <h4 className="login-subhead fw-semibold text-center">Silahkan Login</h4>
                        </div>
                        <form action="" className="col-10 gx-0">
                            <div className="mb-3">
                                <label className="login-label fw-semibold">Username</label>
                                <div className="input-wrapper-login d-flex justify-content-center mt-1">
                                    <input type="text" name="Username" className="input-login" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="login-label fw-semibold">Password</label>
                                <div className="input-wrapper-login d-flex justify-content-center mt-1">
                                    <input type="password" name="Password" className="input-login" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                </div>
                            </div>
                            <button type="submit" className="btn-login fw-semibold mt-3 mb-5">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormLogin