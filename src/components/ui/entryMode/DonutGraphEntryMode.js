import React, { useContext } from 'react';
import { FilterContext } from '../../../services/FilterContext';
import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';

export const DonutGraphEntryMode = () => {

    const { data } = useContext(FilterContext);

    //DATOS Y OPCIONES PARA % ACEPTACIÓN
    const dataAccepted = {
        labels: data.map((e) => e.ID+" - "+e.Description+" - "+e.percenTX_Accepted+"%"),
        datasets: [{
            data: data.map((e) => e.percenTX_Accepted),
            backgroundColor: randomColor({
                hue: '#00FF23',
                count: data.length,
                luminosity: 'dark'
            }),
            borderColor: 'white'
        }]
    }

    const optionsAccepted = {
        responsive: true,
        plugins: {
            legend:{
                align: 'start',
                position: 'left',
                title: {
                    display: true,
                    text: '% de Aprobación',
                    color: 'green',
                    font:{
                        size: 23
                    }
                },
                labels:{
                    color: 'black',
                    boxWidth: 80,
                    font:{
                        size: 17.5
                    }
                }
            }
        }
    }

    //DATOS Y OPCIONES PARA % RECHAZADO
    const dataRejected = {
        labels: data.map((e) => e.ID+" - "+e.Description+" - "+e.percenTX_Rejected+"%"),
        datasets: [{
            data: data.map((e) => e.percenTX_Rejected),
            backgroundColor: randomColor({
                hue: '#FF0000',
                count: data.length,
                luminosity: 'bright'
            }),
            borderColor: 'white'
        }]
    }

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
                        size: 23
                    }
                },
                labels:{
                    color: 'black',
                    boxWidth: 80,
                    font: {
                        size: 17.5
                    }
                }
            }
        }
    }

    return (
        <div className='graphDonut row w-100'>
            <div className='row p-5'>
                <Doughnut 
                data = {dataAccepted}
                options = {optionsAccepted}/>
            </div>
            <div className='row p-5'>
                <Doughnut 
                data = {dataRejected}
                options = {optionsRejected}/>
            </div>
        </div>
    )
}
