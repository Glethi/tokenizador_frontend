import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import { Chart, registerables, ArcElement } from "chart.js";
import randomColor from 'randomcolor';
import numeral from 'numeral';
Chart.register(...registerables);
Chart.register(ArcElement);

export const DonutGraphK2q = ({data}) => {

  const dataAccepted = {
      labels: data.map((e) => e.ID +" - "+ e.Description+" - "+e.percenTX_Accepted),
      datasets:[{
          data: data.map((e) => numeral(e.percenTX_Accepted).value()),
          backgroundColor: randomColor({
            hue: '#00FF23', 
            count: data.length,
            luminosity: 'dark'
          }),
          borderColor: 'white'
      }]
  };
  const dataRejected = {
    labels: data.map((e) => e.ID +" - "+ e.Description+" - "+e.percenTX_Rejected),
    datasets:[{
        data: data.map((e) => numeral(e.percenTX_Rejected).value()), 
        backgroundColor: randomColor({
          hue: '#3D0101',
          count: data.length,
          luminosity: 'dark'
        }),
        borderColor: 'white'
    }]
  };

  const optionsAccepted = {
      responsive: true,
      plugins: {
        legend: {
          align: 'start',
          position: 'left',
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
        position: 'left',
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
        <div className='row w-100 p-3'> 
            <Doughnut
            data={dataAccepted}
            options={optionsAccepted}
            />
        </div>
        <div className='row w-100 p-3'>
            <Doughnut
            data={dataRejected} 
            options={optionsRejected}
            />
        </div>
      </div>
    )
}
