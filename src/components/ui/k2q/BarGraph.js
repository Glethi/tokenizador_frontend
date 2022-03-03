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

    const dataAccepted = {
        label: "TX's Aceptadas",
        data: dataBar.TX_Accepted,
        backgroundColor:['#4CAF50'],
    };

    const dataRejected = {
        label: "TX's Rechazadas",
        data: dataBar.TX_Rejected,
        backgroundColor:['#FF5252'],
    };

    const data = {
        labels: dataBar.TX_Descriptions,
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
