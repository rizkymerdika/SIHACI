import FormAdminEditTravel from "../components/FormAdminEditTravel"
import "./Admin.css"
import { Helmet } from "react-helmet"

function AdminEditTravel() {
  return (
    <>
        <Helmet>
            <title>Edit Travel - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminEditTravel/>
    </>
  )
}

export default AdminEditTravel