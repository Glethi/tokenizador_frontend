import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Alignment } from 'react-data-table-component';
import { getRandomColor } from '../../../services/colors';
import { getData } from '../../../services/dashService';

export const DonutGraphCodeResp = () => {

const [dataDonut, setDataDonut] = useState([]);

useEffect(() => {
    async function loadData(){
        const response = await getData('codeResponse');
        if(response.status === 200){
            setDataDonut(response.data);
        }
    }
    loadData();
}, [])

const labels = [], percenTX = [], color = [];
dataDonut.map((e) => {
    labels.push(e.ID_CodeResponse +" "+e.CodeResp_Description)
    percenTX.push(e.CodeResp_Percent)
    color.push(getRandomColor())
})

const data = {
    labels: labels,
    datasets: [{
        data: percenTX,
        backgroundColor: color,
        borderColor: 'black'
    }]
}

const options = {
    responsive: true,
    plugins: {
        title: {
          display: true,
          text: '% de TXs Realizadas',
          color: 'black',
          font:{
            size: 20
            }
        },
        legend: {
            position: 'top',
        }
    }
}

return (
    <div className='graphDonut-CodeResp'>
        <div className='col'>
            <Doughnut
            data = {data}
            options = {options}
            />
        </div>
    </div>
)
}
