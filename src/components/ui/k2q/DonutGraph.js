import React, { useState, useEffect } from 'react'
import {Doughnut} from 'react-chartjs-2';
import { Chart, registerables, ArcElement } from "chart.js";
import { getData } from '../../../services/dashService';
Chart.register(...registerables);
Chart.register(ArcElement);


export const DonutGraphK2q = () => {

const [dataPie, setDataPie] = useState([]);

useEffect(() => {
  async function loadData(){
    const response = await getData('kq2');
    if(response.status === 200){
      setDataPie(response.data);
    } 
  }
  loadData();
}, [])

const label = [], perceTX_A = [], perceTX_R = [];
dataPie.map((e) => {
  label.push(e.ID +" - "+e.TX_Description)
  perceTX_A.push(e.percenTX_Accepted)
  perceTX_R.push(e.percenTX_Rejected)
})

const dataAccepted = {
    labels: label,
    datasets:[{
        data: perceTX_A,
        backgroundColor: ['#2FA40B', '#3FFE03'],
        borderColor: 'green'
    }]
};
const dataRejected = {
  labels: label,
  datasets:[{
      data: perceTX_R, 
      backgroundColor: ['#BB0101', '#FF2929'],
      borderColor: 'red'
  }]
};

const optionsAccepted = {
    responsive: true,
    plugins: {
      legend: {
        align: 'start',
        title: {
          display: true,
          text: '% de Aprobación',
          color: 'green',
          font:{
            size: 25
        }
      },
        labels:{
          color: 'black',
          boxWidth: 80,
          font:{
            size: 17.5,
          }
        }
      }
    }
};

const optionsRejected = {
  responsive: true,
  plugins: {
    legend: {
      align: 'start',
      title: {
        display: true,
        text: '% de Rechazo',
        color: 'red',
        font:{
          size: 25
      }
    },
      labels:{
        color: 'black',
        boxWidth: 80,
        font:{
          size: 17.5,
        }
      },
    }
}
};

  return (
    <div className='graphDonut row w-100'>
      <div className='col p-3'> 
          <Doughnut
          data={dataAccepted}
          options={optionsAccepted}
          />
      </div>
      <div className='col p-3'>
          <Doughnut
          data={dataRejected} 
          options={optionsRejected}
          />
      </div>
    </div>
  )
}
