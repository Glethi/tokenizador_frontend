import React, { useContext } from 'react'
import {Doughnut} from 'react-chartjs-2';
import { Chart, registerables, ArcElement } from "chart.js";
import { FilterContext } from '../../../services/FilterContext';
Chart.register(...registerables);
Chart.register(ArcElement);


export const DonutGraph = ({data}) => {

  //const { data } = useContext(FilterContext);

  var percenAccepted = 0, percenRejected = 0, total_TX = 0;

  data.map((e) => {
    total_TX += e.tx;
    if(e.code_Response < '010'){
      percenAccepted += e.tx;
    }else{
      percenRejected += e.tx;
    }
  })

  let accepted = (parseFloat(((percenAccepted / total_TX) * 100)).toFixed(2))
  let rejected = parseFloat(((percenRejected / total_TX) * 100)).toFixed(2)

  let dataDonut = {
      labels:['Aceptadas: '+accepted+ '%', 'Rechazadas: '+rejected+ '%'],
      datasets:[{
          data:[accepted, rejected],
          backgroundColor:['green', 'red'],
          borderColor: 'white'
      }]
  };

  let optionsDonut = {
      responsive: true,
      plugins: {
        legend: {
            align: 'center',
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

  //En caso de que no haya datos, mostrar este mensaje en el canvas de la gráfica.
  if(data.length === 0){
    dataDonut.datasets = [];
    optionsDonut.plugins.legend.title.text = 'No hay datos para mostrar'; 
  }

    return (
      <div className='graphDonut row w-100'> 
          <Doughnut
          data={dataDonut}
          options={optionsDonut}
          />
      </div>
    )
}
