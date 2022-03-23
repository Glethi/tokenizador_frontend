import React, { useState, useEffect, useContext } from 'react'
import { Bar } from 'react-chartjs-2';
import {getData} from '../../../services/dashService';
import numeral from 'numeral';
import { FilterContext } from '../../../services/FilterContext';

export const BarGraphCodeResp = () => {

    const [dataBar, setDataBar] = useState([]);
    const { valFilterCR } = useContext(FilterContext);

    useEffect(() => {
    async function loadData(){
        const response = await getData('codeResponse');
        if(response.status === 200 && valFilterCR == 'allData'){
            setDataBar(response.data);
        }else{
            setDataBar([response.data[valFilterCR]])
        }
    }
    loadData();
    }, [valFilterCR])

    const label = [], tx = [], amount = [], color = [];
    dataBar.map((e) => {
        label.push(e.ID)
        tx.push(numeral(e.CodeResp_TXS).value())
        amount.push(numeral(e.CodeResp_Amount).value())
        if(e.ID_CodeResponse < '010'){
            color.push('#2FA40B')
        }else{
            color.push('#FF0000')
        }
    })

    //DATOS PARA GRÁFICO DE TRANSACCIONES
    const dataCodeRespTX = {
        data: tx,
        backgroundColor: color,
    }

    const dataTX = {
        labels: label,
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
        data: amount,
        backgroundColor: ['blue']
    }

    const dataAmount = {
        labels: label,
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
