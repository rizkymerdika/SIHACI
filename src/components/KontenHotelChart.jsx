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
    const bulanTahun = import.meta.env.VITE_API_GET_LAPORAN_TAHUN_BULAN
    const url = `${api}${bulanTahun}${laporan}`

    function getJanuari(){
        axios(`${url}?bulan=januari&tahun=2023`)
        .then((res) => {
            let data = res.data.data[0]
            if (data) {
                let total = data.jumlah_wisatawan_lokal+data.jumlah_wisatawan_asia+data.jumlah_wisatawan_afrika+data.jumlah_wisatawan_amerika_utara+data.jumlah_wisatawan_amerika_selatan+data.jumlah_wisatawan_antartika+data.jumlah_wisatawan_eropa+data.jumlah_wisatawan_australia
                setJanuari(total)
            }
        })   
    }

    function getFebruari(){
        axios(`${url}?bulan=februari&tahun=2023`)
        .then((res) => {
            let data = res.data.data[0]
            if (data) {
                let total = data.jumlah_wisatawan_lokal+data.jumlah_wisatawan_asia+data.jumlah_wisatawan_afrika+data.jumlah_wisatawan_amerika_utara+data.jumlah_wisatawan_amerika_selatan+data.jumlah_wisatawan_antartika+data.jumlah_wisatawan_eropa+data.jumlah_wisatawan_australia
                setFebruari(total)
            }
        })   
    }

    function getMaret(){
        axios(`${url}?bulan=maret&tahun=2023`)
        .then((res) => {
            let data = res.data.data[0]
            if (data) {
                let total = data.jumlah_wisatawan_lokal+data.jumlah_wisatawan_asia+data.jumlah_wisatawan_afrika+data.jumlah_wisatawan_amerika_utara+data.jumlah_wisatawan_amerika_selatan+data.jumlah_wisatawan_antartika+data.jumlah_wisatawan_eropa+data.jumlah_wisatawan_australia
                setMaret(total)
            }
        })   
    }

    function getApril(){
        axios(`${url}?bulan=maret&tahun=2023`)
        .then((res) => {
            let data = res.data.data[0]
            if (data) {
                let total = data.jumlah_wisatawan_lokal+data.jumlah_wisatawan_asia+data.jumlah_wisatawan_afrika+data.jumlah_wisatawan_amerika_utara+data.jumlah_wisatawan_amerika_selatan+data.jumlah_wisatawan_antartika+data.jumlah_wisatawan_eropa+data.jumlah_wisatawan_australia
                setApril(total)
            }
        })   
    }

    function getMei(){
        axios(`${url}?bulan=maret&tahun=2023`)
        .then((res) => {
            let data = res.data.data[0]
            if (data) {
                let total = data.jumlah_wisatawan_lokal+data.jumlah_wisatawan_asia+data.jumlah_wisatawan_afrika+data.jumlah_wisatawan_amerika_utara+data.jumlah_wisatawan_amerika_selatan+data.jumlah_wisatawan_antartika+data.jumlah_wisatawan_eropa+data.jumlah_wisatawan_australia
                setMei(total)
            }
        })   
    }

    function getJuni(){
        axios(`${url}?bulan=maret&tahun=2023`)
        .then((res) => {
            let data = res.data.data[0]
            if (data) {
                let total = data.jumlah_wisatawan_lokal+data.jumlah_wisatawan_asia+data.jumlah_wisatawan_afrika+data.jumlah_wisatawan_amerika_utara+data.jumlah_wisatawan_amerika_selatan+data.jumlah_wisatawan_antartika+data.jumlah_wisatawan_eropa+data.jumlah_wisatawan_australia
                setJuni(total)
            }
        })   
    }

    function getJuli(){
        axios(`${url}?bulan=maret&tahun=2023`)
        .then((res) => {
            let data = res.data.data[0]
            if (data) {
                let total = data.jumlah_wisatawan_lokal+data.jumlah_wisatawan_asia+data.jumlah_wisatawan_afrika+data.jumlah_wisatawan_amerika_utara+data.jumlah_wisatawan_amerika_selatan+data.jumlah_wisatawan_antartika+data.jumlah_wisatawan_eropa+data.jumlah_wisatawan_australia
                setJuli(total)
            }
        })   
    }

    function getAgustus(){
        axios(`${url}?bulan=maret&tahun=2023`)
        .then((res) => {
            let data = res.data.data[0]
            if (data) {
                let total = data.jumlah_wisatawan_lokal+data.jumlah_wisatawan_asia+data.jumlah_wisatawan_afrika+data.jumlah_wisatawan_amerika_utara+data.jumlah_wisatawan_amerika_selatan+data.jumlah_wisatawan_antartika+data.jumlah_wisatawan_eropa+data.jumlah_wisatawan_australia
                setAgustus(total)
            }
        })   
    }

    function getSeptember(){
        axios(`${url}?bulan=maret&tahun=2023`)
        .then((res) => {
            let data = res.data.data[0]
            if (data) {
                let total = data.jumlah_wisatawan_lokal+data.jumlah_wisatawan_asia+data.jumlah_wisatawan_afrika+data.jumlah_wisatawan_amerika_utara+data.jumlah_wisatawan_amerika_selatan+data.jumlah_wisatawan_antartika+data.jumlah_wisatawan_eropa+data.jumlah_wisatawan_australia
                setSeptember(total)
            }
        })   
    }

    function getOktober(){
        axios(`${url}?bulan=maret&tahun=2023`)
        .then((res) => {
            let data = res.data.data[0]
            if (data) {
                let total = data.jumlah_wisatawan_lokal+data.jumlah_wisatawan_asia+data.jumlah_wisatawan_afrika+data.jumlah_wisatawan_amerika_utara+data.jumlah_wisatawan_amerika_selatan+data.jumlah_wisatawan_antartika+data.jumlah_wisatawan_eropa+data.jumlah_wisatawan_australia
                setOktober(total)
            }
        })   
    }

    function getNovember(){
        axios(`${url}?bulan=maret&tahun=2023`)
        .then((res) => {
            let data = res.data.data[0]
            if (data) {
                let total = data.jumlah_wisatawan_lokal+data.jumlah_wisatawan_asia+data.jumlah_wisatawan_afrika+data.jumlah_wisatawan_amerika_utara+data.jumlah_wisatawan_amerika_selatan+data.jumlah_wisatawan_antartika+data.jumlah_wisatawan_eropa+data.jumlah_wisatawan_australia
                setNovember(total)
            }
        })   
    }

    function getDesember(){
        axios(`${url}?bulan=maret&tahun=2023`)
        .then((res) => {
            let data = res.data.data[0]
            if (data) {
                let total = data.jumlah_wisatawan_lokal+data.jumlah_wisatawan_asia+data.jumlah_wisatawan_afrika+data.jumlah_wisatawan_amerika_utara+data.jumlah_wisatawan_amerika_selatan+data.jumlah_wisatawan_antartika+data.jumlah_wisatawan_eropa+data.jumlah_wisatawan_australia
                setDesember(total)
            }
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
                label: 'Pengunjung Hotel',
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
      <div className='row'>
        <canvas className='col-12' ref={chartRef} style={{height: '110px'}}></canvas>
      </div>
    );
};

export default KontenHotelChart;
