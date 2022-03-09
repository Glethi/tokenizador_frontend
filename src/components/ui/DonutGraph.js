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
        borderColor: "black"
    }]
};

const options = {
    responsive: true
};

  return (
    <div className='graphDonut-dashboard'> 
        <Doughnut
        data={data}
        options={options}/>
    </div>
  )
}
