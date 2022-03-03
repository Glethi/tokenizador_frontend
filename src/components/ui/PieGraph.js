import React, { useState, useEffect } from 'react'
import {Pie} from 'react-chartjs-2';
import { Chart, registerables, ArcElement } from "chart.js";
import { getData } from '../../services/dashService';
Chart.register(...registerables);
Chart.register(ArcElement);


export const PieGraph = () => {

const [dataPie, setDataPie] = useState({});

useEffect(() => {
  async function loadData(){
    const response = await getData('test');
    if(response.status === 200){
      setDataPie(response.data);
    }
  }
  loadData();
}, [])


const data = {
    labels:['Aceptadas', 'Rechazadas'],
    datasets:[{
        data:[dataPie.percenAccepted, dataPie.percenRejected],
        backgroundColor:['#4CAF50 ', '#FF5252'],
        borderColor: ["green", "red"]
    }]
};

const options = {
    responsive: true
};

  return (
    <div className='graphPie'> 
        <Pie 
        data={data}
        options={options}/>
    </div>
  )
}
