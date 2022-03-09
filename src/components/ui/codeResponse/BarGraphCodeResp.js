import { Legend } from 'chart.js';
import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import {getData} from '../../../services/dashService';

export const BarGraphCodeResp = () => {

    const [dataBar, setDataBar] = useState([]);

    useEffect(() => {
    async function loadData(){
        const response = await getData('codeResponse');
        if(response.status === 200){
            setDataBar(response.data);
        }
    }
    loadData();
    }, [])

    const label = [], tx_acepted = [];
    dataBar.map((e) => {
        label.push(e.CodeResp_Description);
        tx_acepted.push(e.CodeResp_TXS);
    })

    const dataCodeResp = {
        label: "TX's Realizadas",
        data: tx_acepted,
        backgroundColor: ['blue'],
        borderRadius: 10,
    }

    const data = {
        labels: label,
        datasets: [dataCodeResp]
    }

    const options = {
        responsive: true,
    }

    return (
        <div className='graphBar w-100'>
            <div className='col'>
                <Bar
                data = {data}
                options = {options} 
                />
            </div>
        </div>
    )
}
