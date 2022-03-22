import React, { useState, useEffect, useContext } from 'react';
import { getData } from '../../../services/dashService';
import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';
import { FilterContext } from '../../../services/FilterContext';

export const DonutGraphEntryMode = () => {

    const [dataDonut, setDataDonut] = useState([]);
    const { valFilterEntry } = useContext(FilterContext);

    useEffect(() => {
        async function loadData(){
            const response = await getData('entryMode');
            if(response.status === 200 && valFilterEntry == 'allData'){
                setDataDonut(response.data);
            }else{
                setDataDonut([response.data[valFilterEntry]])
            }
        }
        loadData();
    }, [valFilterEntry])

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
            backgroundColor: randomColor({
                hue: '#00FF23',
                count: label.length,
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
                //position: 'left',
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
        labels: label,
        datasets: [{
            data: percenTX_Rejected,
            backgroundColor: randomColor({
                hue: '#FF0000',
                count: label.length,
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
                //position: 'left',
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
        <div className='graphDonut-entryMode row w-100'>
            <div className='col p-4'>
                <Doughnut 
                data = {dataAccepted}
                options = {optionsAccepted}/>
            </div>
            <div className='col p-4'>
                <Doughnut 
                data = {dataRejected}
                options = {optionsRejected}/>
            </div>
        </div>
    )
}
