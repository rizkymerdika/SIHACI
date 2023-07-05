import { Helmet } from "react-helmet"
import FormLogin from "../components/FormLogin"
import "./Login.css"

function Login() {
  return (
    <>
        <Helmet>
            <title>Login - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormLogin/>
    </>
  )
}

export default Login