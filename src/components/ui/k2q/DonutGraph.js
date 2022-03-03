import React, { useState, useEffect } from 'react'
import {Doughnut} from 'react-chartjs-2';
import { Chart, registerables, ArcElement } from "chart.js";
import { getData } from '../../../services/dashService';
Chart.register(...registerables);
Chart.register(ArcElement);


export const PieGraphK2q = () => {

const [dataPie, setDataPie] = useState({});

useEffect(() => {
  async function loadData(){
    const response = await getData('kq2');
    if(response.status === 200){
      setDataPie(response.data);
    } 
  }
  loadData();
}, [])

const dataAccepted = {
    labels: dataPie.TX_Descriptions,
    datasets:[{
        data: dataPie.percenTX_Accepted,
        backgroundColor: ["#76FC7C", "#A3FFF4"],
        borderColor: ["#01FD0D", "#01FFE0"]
    }]
};
const dataRejected = {
  labels: dataPie.TX_Descriptions,
  datasets:[{
      data: dataPie.percenTX_Rejected,
      backgroundColor: ["#FB4E56", "#FCA656"],
      borderColor: ["#F9000C", "#FE7B00"]
  }]
};

const options = {
    responsive: true
};

  return (
    <div className='graphDonut row w-100'>
      <div className='col'>
        <h4>Aceptación</h4> 
          <Doughnut
          data={dataAccepted}
          options={options}
          />
      </div>
      <div className='col'>
        <h4>Rechazo</h4>
          <Doughnut
          data={dataRejected} 
          options={options}
          />
      </div>
    </div>
  )
}
