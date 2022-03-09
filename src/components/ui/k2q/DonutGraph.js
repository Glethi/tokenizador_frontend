import React, { useState, useEffect } from 'react'
import {Doughnut} from 'react-chartjs-2';
import { Chart, registerables, ArcElement } from "chart.js";
import { getData } from '../../../services/dashService';
import { getRandomColor} from '../../../services/colors';
import * as Icons from "react-icons/bs";
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

const labels = [], perceTX_A = [], perceTX_R = [], colorA = [], colorB = [];
dataPie.map((e) => {
  labels.push(e.TX_Description)
  perceTX_A.push(e.percenTX_Accepted)
  perceTX_R.push(e.percenTX_Rejected)
  colorA.push(getRandomColor())
  colorB.push(getRandomColor())
})

const dataAccepted = {
    labels: labels,
    datasets:[{
        data: perceTX_A,
        backgroundColor: colorA,
        borderColor: 'black'
    }]
};
const dataRejected = {
  labels: labels,
  datasets:[{
      data: perceTX_R, 
      backgroundColor: colorB,
      borderColor: 'black'
  }]
};

const optionsAccepted = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '% de Aprobación',
        color: 'black',
        font:{
            size: 20
        }
      },
      legend: {
          position: 'top',
      }
  }
};

const optionsRejected = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: '% de Rechazo',
      color: 'black',
      font:{
        size: 20,
      }
    },
    legend: {
        position: 'top'
    }
}
};

  return (
    <div className='graphDonut row'>
      <div className='col'> 
          <Doughnut
          data={dataAccepted}
          options={optionsAccepted}
          />
      </div>
      <div className='col'>
          <Doughnut
          data={dataRejected} 
          options={optionsRejected}
          />
      </div>
    </div>
  )
}
