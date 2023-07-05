

function Header({header}) {
  return (
    <div className="header-bg mt-2">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className="fw-semibold my-0 py-3 py-sm-4">{header}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header