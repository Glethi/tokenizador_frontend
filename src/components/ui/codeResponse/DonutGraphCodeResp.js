import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { getData } from '../../../services/dashService';
import randomColor from 'randomcolor';

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

const labels = [], percenTX = [], colorBack = [];
dataDonut.map((e) => {
    labels.push(e.ID_CodeResponse +" - "+e.CodeResp_Description)
    percenTX.push(e.CodeResp_Percent)
    if(e.ID_CodeResponse < '011'){
        colorBack.push(randomColor({
            hue: '#00FF23',
            luminosity: 'dark'
        }))
    }else{
        colorBack.push(randomColor({
            hue: '#FF0000',
            luminosity: 'bright'
        }))
    }
})

const data = {
    labels: labels,
    datasets: [{
        data: percenTX,
        backgroundColor: colorBack,
        borderColor: 'white'
    }]
}

const options = {
    responsive: true,
    plugins: {
        legend: {
            align: 'start',
            position: 'left',
            title:{
                display: true,
                text: '% de Aprobación y Rechazo',
                color: 'black',
                font:{
                    size: 25
                }
            },
            labels:{
                color: 'black',
                boxWidth: 50,
                font:{
                    size: 17.5
                }
            }
        }
    }
}

return (
    <div className='graphDonut-CodeResp row w-100'>
        <div className='col p-3'>
            <Doughnut
            data = {data}
            options = {options}
            />
        </div>
    </div>
)
}
