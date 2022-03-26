import React, { useState, useEffect, useContext } from 'react'
import {Doughnut} from 'react-chartjs-2';
import { Chart, registerables, ArcElement } from "chart.js";
import { getData, postData } from '../../../services/dashService';
import randomColor from 'randomcolor';
import { FilterContext } from '../../../services/FilterContext';
Chart.register(...registerables);
Chart.register(ArcElement);


export const DonutGraphK2q = () => {

const [dataPie, setDataPie] = useState([]);
const { valFilterKq2 } = useContext(FilterContext);

useEffect(() => {
  async function loadData(){
    if(valFilterKq2 == 'allData'){
      const response = await getData('kq2');
      if(response.status === 200){
        setDataPie(response.data);
      }
    }
    else{
      const responseFilter = await postData('kq2Filter', { kq2: valFilterKq2 });
      if(responseFilter.status === 200){
        setDataPie(responseFilter.data);
      }
    }
  }
  loadData();
}, [valFilterKq2])

const dataAccepted = {
    labels: dataPie.map((e) => e.ID +" - "+ e.Description+" - "+e.percenTX_Accepted+"%"),
    datasets:[{
        data: dataPie.map((e) => e.percenTX_Accepted),
        backgroundColor: randomColor({
          hue: '#00FF23', 
          count: dataPie.length,
          luminosity: 'dark'
        }),
        borderColor: 'white'
    }]
};
const dataRejected = {
  labels: dataPie.map((e) => e.ID +" - "+ e.Description+" - "+e.percenTX_Rejected+"%"),
  datasets:[{
      data: dataPie.map((e) => e.percenTX_Rejected), 
      backgroundColor: randomColor({
        hue: '#FF0000',
        count: dataPie.length,
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
