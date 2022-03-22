import React, { useState, useEffect } from 'react'
import {Doughnut} from 'react-chartjs-2';
import { Chart, registerables, ArcElement } from "chart.js";
import { getData } from '../../services/dashService';
Chart.register(...registerables);
Chart.register(ArcElement);


export const DonutGraph = () => {

const [dataDonut, setDataDonut] = useState({});

useEffect(() => {
  async function loadData(){
    const response = await getData('test');
    if(response.status === 200){
      setDataDonut(response.data);
    }
  }
  loadData();
}, [])


const data = {
    labels:['Aceptadas', 'Rechazadas'],
    datasets:[{
        data:[dataDonut.percenAccepted, dataDonut.percenRejected],
        backgroundColor:['green', 'red'],
        borderColor: 'white'
    }]
};

const options = {
    responsive: true,
    plugins: {
      legend: {
          align: 'start',
          position: 'top',
          title: {
            display: true,
            text: 'Transacciones',
            color: 'black',
            font:{
                size: 25
            }
        },
          labels:{
              color: 'black',
              boxWidth: 50,
              font: {
                  size: 17.5
              }
          }
      }
  }
};

  return (
    <div className='graphDonut-dashboard'> 
        <Doughnut
        data={data}
        options={options}/>
    </div>
  )
}
