import React, { useState, useEffect, useContext } from 'react'
import {Bar} from 'react-chartjs-2';
import { getData } from '../../../services/dashService';
import numeral from 'numeral';
import { FilterContext } from '../../../services/FilterContext';

export const BarGraph = () => {

    const [dataBar, setDataBar] = useState([]);
    const { valFilter } = useContext(FilterContext);

    useEffect(() => {
    async function loadData(){
        const response = await getData('kq2');
        if(response.status === 200 && valFilter == 'allData'){
            setDataBar(response.data);
        }else{
            setDataBar([response.data[valFilter]]);
        }
    }
    loadData();
    }, [valFilter])

    const tx_acepted = [], tx_rejected = [], label = [], rejected_Amount = [], accepted_Amount =[];
    dataBar.map((e) =>{
        label.push(e.ID)
        tx_acepted.push(numeral(e.TX_Accepted).value())
        tx_rejected.push(numeral(e.TX_Rejected).value()) 
        rejected_Amount.push(numeral(e.rejected_Amount).value()) 
        accepted_Amount.push(numeral(e.accepted_Amount).value()) 
    })

    //DATOS Y OPCIONES PARA GRÁFICO DE TRANSACCIONES
    const dataTX_Accepted = {
        label: "TX's Aceptadas",
        data: tx_acepted,
        backgroundColor:['#2FA40B'],
    };

    const dataTX_Rejected = {
        label: "TX's Rechazadas",
        data: tx_rejected,
        backgroundColor:['#FF0000'],
    };

    const dataTX = {
        labels: label,
        datasets:[dataTX_Accepted, dataTX_Rejected]
    };

    const optionsTX = {
        responsive: true,
        plugins: {
            legend: {
                labels:{
                    color: 'black',
                    font: {
                        size: 15
                    }
                }
            },
            title:{
                display: true,
                text:  'Transacciones Aceptadas y Rechazadas por Medio Acceso',
                align: 'end',
                color: 'black',
                font:{
                    size: 20,
                }
            }
        },
        scales:{
            x:{
                ticks:{
                    color: 'black',
                    font:{
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

    //DATOS Y OPCIONES PARA GRÁFICO DE MONTO
    const dataAmount_Accepted = {
        label: "Monto Aceptado",
        data: accepted_Amount,
        backgroundColor:['#2FA40B']
    }

    const dataAmount_Rejected = {
        label: "Monto Rechazado",
        data: rejected_Amount,
        backgroundColor:['#FF0000']
    }

    const dataAmount = {
        labels: label,
        datasets:[dataAmount_Accepted, dataAmount_Rejected]
    }

    const optionsAmount = {
        responsive: true,
        plugins: {
            legend: {
                labels:{
                    color: 'black',
                    font: {
                        size: 15
                    }
                }
            },
            title:{
                display: true,
                text: 'Monto Aceptado y Rechazado por Medio Acceso',
                align: 'end',
                color: 'black',
                font:{
                    size: 20,
                }
            }
        },
        scales:{
            x:{
                ticks:{
                    color: 'black',
                    font:{
                        size: 15
                    },
                },
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
                data={dataTX} 
                options={optionsTX}/>
            </div>
            <div className='col p-3'>
                <Bar
                data={dataAmount}
                options={optionsAmount}
                />
            </div>
        </div>
    )
}
