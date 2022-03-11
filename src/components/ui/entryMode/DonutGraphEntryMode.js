import React, { useState, useEffect } from 'react';
import { getData } from '../../../services/dashService';
import { Doughnut } from 'react-chartjs-2';

export const DonutGraphEntryMode = () => {

    const [dataDonut, setDataDonut] = useState([]);

    useEffect(() => {
        async function loadData(){
            const response = await getData('entryMode');
            if(response.status === 200){
                setDataDonut(response.data);
            }
        }
        loadData();
    }, [])

    const label = [], percenTX_Accepted = [], percenTX_Rejected = [];
    dataDonut.map((e) => {
        label.push(e.ID +" - "+e.entryMode_Description)
        percenTX_Accepted.push(e.percenTX_Accepted)
        percenTX_Rejected.push(e.percenTX_Rejected)
    })

    //DATOS Y OPCIONES PARA % ACEPTACIÓN
    const dataAccepted = {
        labels: label,
        datasets: [{
            data: percenTX_Accepted,
            backgroundColor: ['#2FA40B', '#3FFE03'],
            borderColor: 'green'
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
                        size: 25
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
        labels: label,
        datasets: [{
            data: percenTX_Rejected,
            backgroundColor: ['#BB0101', '#FF2929'],
            borderColor: 'red'
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
                        size: 25
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
            <div className='col p-3'>
                <Doughnut 
                data = {dataAccepted}
                options = {optionsAccepted}/>
            </div>
            <div className='col p-3'>
                <Doughnut 
                data = {dataRejected}
                options = {optionsRejected}/>
            </div>
        </div>
    )
}
