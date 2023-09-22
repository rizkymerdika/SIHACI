import { Link } from "react-router-dom"


function Header2({header, link1, link2, link3, link4, link5, submenu1, submenu2, submenu3, submenu4, submenu5}) {
  return (
    <div className="header-bg mt-2">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="dropdown">
                        <button className="btn dropdown-toggle fw-semibold px-0 py-3 py-sm-4" id="btn-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">{header}</button>
                        <ul className="dropdown-menu" id="dropdown-menu">
                            <li><Link to={link1} className="dropdown-item">{submenu1}</Link></li>
                            <li><Link to={link2} className="dropdown-item">{submenu2}</Link></li>
                            <li><Link to={link3} className="dropdown-item">{submenu3}</Link></li>
                            <li><Link to={link4} className="dropdown-item">{submenu4}</Link></li>
                            <li><Link to={link5} className="dropdown-item">{submenu5}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header2