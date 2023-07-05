import React from 'react'

function KontenAdminHome() {
  return (
    <div className='mt-3'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className="konten-admin-head fw-semibold my-0">Jumlah Data</h1>
                </div>
            </div>
            <div className='row flex-wrap mt-2 gy-3'>
                <div className='col-sm-6 col-lg-4'>
                    <div className='jumlah-data-wrapper d-flex justify-content-between'>
                        <div>
                            <span>Objek Wisata</span>
                            <span>: </span>
                        </div>
                        <div>
                            <span title='jumlah-angka'>100</span>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-lg-4'>
                    <div className='jumlah-data-wrapper d-flex justify-content-between'>
                        <div>
                            <span>Akomodasi</span>
                            <span>: </span>
                        </div>
                        <div>
                            <span title='jumlah-angka'>100</span>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-lg-4'>
                    <div className='jumlah-data-wrapper d-flex justify-content-between'>
                        <div>
                            <span>Kuliner</span>
                            <span>: </span>
                        </div>
                        <div>
                            <span title='jumlah-angka'>100</span>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-lg-4'>
                    <div className='jumlah-data-wrapper d-flex justify-content-between'>
                        <div>
                            <span>Travel</span>
                            <span>: </span>
                        </div>
                        <div>
                            <span title='jumlah-angka'>100</span>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-lg-4'>
                    <div className='jumlah-data-wrapper d-flex justify-content-between'>
                        <div>
                            <span>Event</span>
                            <span>: </span>
                        </div>
                        <div>
                            <span title='jumlah-angka'>100</span>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-lg-4'>
                    <div className='jumlah-data-wrapper d-flex justify-content-between'>
                        <div>
                            <span>Akun Hotel</span>
                            <span>: </span>
                        </div>
                        <div>
                            <span title='jumlah-angka'>100</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KontenAdminHome