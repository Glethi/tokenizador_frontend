import React, { useContext } from 'react'
import { Bar } from 'react-chartjs-2';
import numeral from 'numeral';
import { FilterContext } from '../../../services/FilterContext';

export const BarGraphCodeResp = () => {

    const { data } = useContext(FilterContext);

    //DATOS PARA GRÁFICO DE TRANSACCIONES
    const dataCodeRespTX = {
        data: data.map((e) => numeral(e.CodeResp_TXS).value()),
        backgroundColor: data.map((e) => {
            if(e.ID < '010'){
                return '#2FA40B'
            }else{
                return '#FF0000'
            }
        }),
    }

    const dataTX = {
        labels: data.map((e) => e.ID),
        datasets: [dataCodeRespTX]
    }

    const optionsTX = {
        responsive: true,
        plugins:{
            legend:{
                display: false
            },
            title:{
                display: true,
                text: 'Transacciones Aceptadas y Rechazadas por Código de Respuesta',
                align: 'end',
                color: 'black',
                font:{
                    size: 20
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
                    font:{
                        size: 15
                    }
                }
            }
        }
    }

    //DATOS PARA GRÁFICO DE MONTO
    const dataCodeRespAmount = {
        data: data.map((e) => numeral(e.CodeResp_Amount).value()),
        backgroundColor: ['blue']
    }

    const dataAmount = {
        labels: data.map((e) => e.ID),
        datasets: [dataCodeRespAmount]
    }

    const optionsAmount = {
        responsive: true,
        plugins:{
            legend:{
                display: false
            },
            title:{
                display: true,
                text: 'Monto por Código de Respuesta',
                align: 'end',
                color: 'black',
                font:{
                    size: 20
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
                    font:{
                        size: 15
                    }
                }
            }
        }
    }

    return (
        <div className='graphBar w-100'>
            <div className='col p-3'>
                <Bar
                data = {dataTX}
                options = {optionsTX} 
                />
            </div>
            <div className='col p-3'>
                <Bar 
                data = {dataAmount}
                options = {optionsAmount}
                />
            </div>
        </div>
    )
}
