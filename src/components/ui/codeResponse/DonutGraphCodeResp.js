import React, { useContext } from 'react'
import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';
import { FilterContext } from '../../../services/FilterContext';
import numeral from 'numeral';

export const DonutGraphCodeResp = ({data}) => {

const dataDonut = {
    labels: data.map((e) => e.ID+" - "+e.Description+" - "+e.CodeResp_Percent),
    datasets: [{
        data: data.map((e) => numeral(e.CodeResp_Percent).value()),
        backgroundColor: data.map((e) => {
            if(e.ID < '011'){
                return randomColor({
                    hue: '#00FF23',
                    luminosity: 'dark'
                })
            }else{
                return randomColor({
                    hue: '#3D0101',
                    luminosity: 'dark'
                })
            }
        }),
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
                    size: 20
                }
            },
            labels:{
                color: 'black',
                font:{
                    size: 13.5
                }
            }
        }
    }
}

return (
    <div className='graphDonutCodeResp row w-100'>
        <Doughnut
        data = {dataDonut}
        options = {options}
        />
    </div>
)
}
