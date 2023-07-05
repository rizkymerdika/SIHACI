import FormAdminEditEvent from "../components/FormAdminEditEvent"
import "./Admin.css"
import { Helmet } from "react-helmet"

function AdminEditEvent() {
  return (
    <>
        <Helmet>
            <title>Edit Event - Sistem Informasi Hayu Ameng ka Cianjur</title>
        </Helmet>
        <FormAdminEditEvent/>
    </>
  )
}

export default AdminEditEvent