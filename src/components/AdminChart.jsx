import React, { useEffect, useRef, useState } from 'react';
import axios from "axios"

const KontenHotelChart = ({ laporan }) => {
    const chartRef = useRef(null);
    
    const [januari, setJanuari] = useState(0)
    const [februari, setFebruari] = useState(0)
    const [maret, setMaret] = useState(0)
    const [april, setApril] = useState(0)
    const [mei, setMei] = useState(0)
    const [juni, setJuni] = useState(0)
    const [juli, setJuli] = useState(0)
    const [agustus, setAgustus] = useState(0)
    const [september, setSeptember] = useState(0)
    const [oktober, setOktober] = useState(0)
    const [november, setNovember] = useState(0)
    const [desember, setDesember] = useState(0)

    const api = import.meta.env.VITE_APP_API;
    const bulanTahun = import.meta.env.VITE_API_PENGUNJUNG
    const url = `${api}${bulanTahun}/get`

    function getJanuari(){
        axios(`${url}?bulan=1&tahun=2023`)
        .then((res) => {
            setJanuari(res.data.data.length)
        })   
    }

    function getFebruari(){
        axios(`${url}?bulan=2&tahun=2023`)
        .then((res) => {
            setJuli(res.data.data.length)
        })   
    }

    function getMaret(){
        axios(`${url}?bulan=3&tahun=2023`)
        .then((res) => {
            setMaret(res.data.data.length)
        })   
    }

    function getApril(){
        axios(`${url}?bulan=4&tahun=2023`)
        .then((res) => {
            setApril(res.data.data.length)
        })   
    }

    function getMei(){
        axios(`${url}?bulan=5&tahun=2023`)
        .then((res) => {
            setMei(res.data.data.length)
        })   
    }

    function getJuni(){
        axios(`${url}?bulan=6&tahun=2023`)
        .then((res) => {
            setJuni(res.data.data.length)
        })   
    }

    function getJuli(){
        axios(`${url}?bulan=7&tahun=2023`)
        .then((res) => {
            setJuli(res.data.data.length)
        })   
    }

    function getAgustus(){
        axios(`${url}?bulan=8&tahun=2023`)
        .then((res) => {
            setAgustus(res.data.data.length)
        })   
    }

    function getSeptember(){
        axios(`${url}?bulan=9&tahun=2023`)
        .then((res) => {
            setSeptember(res.data.data.length)
        })   
    }

    function getOktober(){
        axios(`${url}?bulan=10&tahun=2023`)
        .then((res) => {
            setOktober(res.data.data.length)
        })   
    }

    function getNovember(){
        axios(`${url}?bulan=11&tahun=2023`)
        .then((res) => {
            setNovember(res.data.data.length)
        })   
    }

    function getDesember(){
        axios(`${url}?bulan=12&tahun=2023`)
        .then((res) => {
            setDesember(res.data.data.length)
        })   
    }

    useEffect(() => {
        getJanuari()
        getFebruari()
        getMaret()
        getApril()
        getMei()
        getJuni()
        getJuli()
        getAgustus()
        getSeptember()
        getOktober()
        getNovember()
        getDesember()

        const data = {
            labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
            datasets: [{
                label: 'Jumlah Pengunjung',
                data: [januari, februari, maret, april, mei, juni, juli, agustus, september, oktober, november, desember],
                backgroundColor: '#000',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 2,
            }]
        };
  
        const config = {
            type: 'line',
            data: data,
            options: {
                scales: {
                    x: {
                        ticks: {
                            color: 'red' // Warna teks sumbu x
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'blue' // Warna teks sumbu y
                        }
                    }
                }
            }
        };
  
      const myChart = new window.Chart(chartRef.current, config);
      return () => myChart.destroy();
    }, [januari, februari, maret, april, mei, juni, juli, agustus, september, oktober, november, desember]);

  
    return (
      <>
        <div className='row'>
            <div className='col-12'>
                <h1 className="konten-admin-head fw-semibold my-0">Grafik Pengunjung Website</h1>
            </div>
        </div>
        <div className='row my-2'>
            <canvas ref={chartRef} style={{height: '110px'}}></canvas>
        </div>
      </>
    );
};

export default KontenHotelChart;
