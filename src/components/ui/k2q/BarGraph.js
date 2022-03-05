import React, { useState, useEffect } from 'react'
import {Bar} from 'react-chartjs-2';
import { getData } from '../../../services/dashService';

export const BarGraph = () => {

    const [dataBar, setDataBar] = useState([]);

    useEffect(() => {
      async function loadData(){
          const response = await getData('kq2');
          if(response.status === 200){
              setDataBar(response.data);
          }
      }
      loadData();
    }, [])

    const tx_acepted = [], tx_rejected = [], label = [];
    dataBar.map((e) =>{
        label.push(e.TX_Description)
        tx_acepted.push(e.TX_Accepted)
        tx_rejected.push(e.TX_Rejected)
    })


    const dataAccepted = {
        label: "TX's Aceptadas",
        data: tx_acepted,
        backgroundColor:['#4CAF50'],
    };

    const dataRejected = {
        label: "TX's Rechazadas",
        data: tx_rejected,
        backgroundColor:['#FF5252'],
    };

    const data = {
        labels: label,
        datasets:[dataAccepted, dataRejected]
    };

    const options = {
        responsive: true,
    };

  return (
    <div className='graphBar w-100'>
        <div className='col'>
            <Bar
            data={data} 
            options={options}/>
        </div>
    </div>
  )
}
