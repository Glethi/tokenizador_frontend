import React, { useEffect, useContext, useState } from 'react'
import {Doughnut} from 'react-chartjs-2';
import { Chart, registerables, ArcElement } from "chart.js";
import { getData, postData } from '../../services/dashService';
import { FilterContext } from '../../services/FilterContext';
Chart.register(...registerables);
Chart.register(ArcElement);


export const DonutGraph = () => {

const [dataDonut, setDataDonut] = useState([{}]);
const { valEndpoint, options, valFilterKq2, valFilterCR, valFilterEntry } = useContext(FilterContext);

useEffect(() => {
  async function loadData(){
    if(valEndpoint === 'dashboard' && options === 'allData'){
      const response = await getData('dashboard');
      if(response.status === 200){
        setDataDonut(response.data);
      }
    }
    else{
      var filter = new Object();
            filter.endPoint = valEndpoint
            filter.kq2 = valFilterKq2
            filter.code_Response = valFilterCR
            filter.entry_Mode = valFilterEntry
            const responseFilter = await postData('dashboardFilter', filter);
            if(responseFilter.status === 200){
                setDataDonut(responseFilter.data)
            }
    }
  }
  loadData();
}, [valEndpoint, options])

var percenAccepted = 0, percenRejected = 0, total_TX = 0;
dataDonut.map((e) => {
  total_TX += e.tx;
  if(e.code_Response < '010'){
    percenAccepted += e.tx;
  }else{
    percenRejected += e.tx;
  }
})

const accepted = (parseFloat(((percenAccepted / total_TX) * 100)).toFixed(2))
const rejected = parseFloat(((percenRejected / total_TX) * 100)).toFixed(2)

const data = {
    labels:['Aceptadas: '+accepted+ '%', 'Rechazadas: '+rejected+ '%'],
    datasets:[{
        data:[accepted, rejected],
        backgroundColor:['green', 'red'],
        borderColor: 'white'
    }]
};

const optionsDonut = {
    responsive: true,
    plugins: {
      legend: {
          align: 'start',
          position: 'left',
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
        options={optionsDonut}/>
    </div>
  )
}
