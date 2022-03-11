import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';
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

const labels = [], percenTX = [], colorBack = [], colorBorder = [];
var flag = 0;
dataDonut.map((e) => {
    labels.push(e.ID_CodeResponse +" - "+e.CodeResp_Description)
    percenTX.push(e.CodeResp_Percent)
    if(e.ID_CodeResponse < '011'){
        switch(flag){
            case 0:{
                colorBack.push('#3FFE03')
                colorBorder.push('green')
                flag = 1;
                break;
            }
            case 1:{
                colorBack.push('#2FA40B') 
                colorBorder.push('green')
                flag = 0;
                break;
            }
        }
        
    }else{
        switch(flag){
            case 0:{
                colorBack.push('#BB0101')
                colorBorder.push('red')
                flag = 1;
                break;
            }
            case 1:{
                colorBack.push('#FF2929')
                colorBorder.push('red')
                flag = 0;
                break;
            }
        }
    }
})

const data = {
    labels: labels,
    datasets: [{
        data: percenTX,
        backgroundColor: colorBack,
        borderColor: colorBorder
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
