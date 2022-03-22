import React, { useState, useEffect, useContext } from 'react'
import {Doughnut} from 'react-chartjs-2';
import { Chart, registerables, ArcElement } from "chart.js";
import { getData } from '../../../services/dashService';
import randomColor from 'randomcolor';
import { FilterContext } from '../../../services/FilterContext';
Chart.register(...registerables);
Chart.register(ArcElement);


export const DonutGraphK2q = () => {

const [dataPie, setDataPie] = useState([]);
const { valFilter } = useContext(FilterContext);

useEffect(() => {
  async function loadData(){
    const response = await getData('kq2');
    if(response.status === 200 && valFilter == 'allData'){
      setDataPie(response.data);
    }else{
      setDataPie([response.data[valFilter]])
    }
  }
  loadData();
}, [valFilter])

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
        backgroundColor: randomColor({
          hue: '#00FF23', 
          count: label.length,
          luminosity: 'dark'
        }),
        borderColor: 'white'
    }]
};
const dataRejected = {
  labels: label,
  datasets:[{
      data: perceTX_R, 
      backgroundColor: randomColor({
        hue: '#FF0000',
        count: label.length,
        luminosity: 'bright'
      }),
      borderColor: 'white'
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
