import React, { useState, useEffect, useContext } from 'react'
import { getData } from '../../../services/dashService';
import { Bar } from 'react-chartjs-2';
import numeral from 'numeral';
import { FilterContext } from '../../../services/FilterContext';


export const BarGraphEntryMode = () => {

    const [dataBar, setDataBar] = useState([]);
    const { valFilterEntry } = useContext(FilterContext);

    useEffect(() => {
        async function loadData(){
            const response = await getData('entryMode');
            if(response.status === 200 && valFilterEntry == 'allData'){
                setDataBar(response.data);
            }else{
                setDataBar([response.data[valFilterEntry]])
            }
        }
        loadData();
    }, [valFilterEntry])
    
    const label = [], tx_acepted = [], tx_rejected = [], accepted_Amount = [], rejected_Amount = [];
    dataBar.map((e) => {
        label.push(e.ID)
        tx_acepted.push(numeral(e.accepted_TX).value())
        tx_rejected.push(numeral(e.rejected_TX).value())
        accepted_Amount.push(numeral(e.accepted_Amount).value())
        rejected_Amount.push(numeral(e.rejected_Amount).value())
    })

    //DATOA Y OPCIONES PARA GRAFICOS DE TRANSACCIONES
    const dataTX_Accepted = {
        label: "TX's Aceptadas",
        data: tx_acepted,
        backgroundColor: ['#2FA40B']
    };

    const dataTX_Rejected = {
        label: "TX's Rechazadas",
        data: tx_rejected,
        backgroundColor: ['#FF0000']
    };

    const dataTX = {
        labels: label,
        datasets: [dataTX_Accepted, dataTX_Rejected]
    };

    const optionsTX = {
        response: true,
        plugins:{
            legend:{
                labels:{
                    color: 'black',
                    font: {
                        size: 15
                    }
                }
            },
            title:{
                display: true,
                text: 'Transacciones Aceptadas y Rechazadas por Entry Mode',
                align: 'end',
                color: 'black',
                font: {
                    size: 20
                }
            }
        },
        scales:{
            x:{
                ticks:{
                    color: 'black',
                    font: {
                        size: 15
                    }
                }
            },
            y:{
                ticks:{
                    color: 'black',
                    font: {
                        size: 15
                    }
                }
            }
        }
    };

    const dataAmount_Accepted = {
        label: "Monto Aceptado",
        data: accepted_Amount,
        backgroundColor: ['#2FA40B']
    };

    const dataAmount_Rejected = {
        label: "Monto Rechazado",
        data: rejected_Amount,
        backgroundColor: ['#FF0000']
    }

    const dataAmount = {
        labels: label,
        datasets: [dataAmount_Accepted, dataAmount_Rejected]
    }

    const optionsAmount = {
        response: true,
        plugins:{
            legend:{
                labels:{
                    color: 'black',
                    font: {
                        size: 15
                    }
                }
            },
            title:{
                display: true,
                text: 'Monto Aceptado y Rechazado por Entry Mode',
                align: 'end',
                color: 'black',
                font: {
                    size: 20
                }
            }
        },
        scales:{
            x:{
                ticks:{
                    color: 'black',
                    font: {
                        size: 15
                    }
                }
            },
            y:{
                ticks:{
                    color: 'black',
                    font: {
                        size: 15
                    }
                }
            }
        }
    };

    return (
        <div className='graphBar w-100'>
            <div className='col p-3'> 
                <Bar 
                data = {dataTX}
                options = {optionsTX}/>
            </div>
            <div className='col p-3'>
                <Bar 
                data = {dataAmount}
                options = {optionsAmount}/>
            </div>
        </div>
    )
}
