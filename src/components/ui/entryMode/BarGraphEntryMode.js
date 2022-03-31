import React, { useContext } from 'react'
import { Bar } from 'react-chartjs-2';
import numeral from 'numeral';
import { FilterContext } from '../../../services/FilterContext';


export const BarGraphEntryMode = () => {

    const { data } = useContext(FilterContext);

    //DATOS Y OPCIONES PARA GRAFICOS DE TRANSACCIONES
    const dataTX_Accepted = {
        label: "TX's Aceptadas",
        data: data.map((e) => numeral(e.accepted_TX).value()),
        backgroundColor: ['#2FA40B']
    };

    const dataTX_Rejected = {
        label: "TX's Rechazadas",
        data: data.map((e) => numeral(e.rejected_TX).value()),
        backgroundColor: ['#FF0000']
    };

    const dataTX = {
        labels: data.map((e) => e.ID),
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
        data: data.map((e) => numeral(e.accepted_Amount).value()),
        backgroundColor: ['#2FA40B']
    };

    const dataAmount_Rejected = {
        label: "Monto Rechazado",
        data: data.map((e) => numeral(e.rejected_Amount).value()),
        backgroundColor: ['#FF0000']
    }

    const dataAmount = {
        labels: data.map((e) => e.ID),
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
