import React, { useState, useEffect, useContext } from 'react'
import {Bar} from 'react-chartjs-2';
import { getData, postData } from '../../../services/dashService';
import numeral from 'numeral';
import { FilterContext } from '../../../services/FilterContext';

export const BarGraph = () => {

    const [dataBar, setDataBar] = useState([{}]);
    const { valFilterKq2 } = useContext(FilterContext);

    useEffect(() => {
    async function loadData(){
        if(valFilterKq2 == 'allData'){
            const response = await getData('kq2');
            if(response.status === 200){
                setDataBar(response.data);
            }
        }
        else{
            const responseFilter = await postData('kq2Filter', { kq2: valFilterKq2 });
            if(responseFilter.status === 200){
                setDataBar(responseFilter.data);
            }
        }
    }
    loadData();
    }, [valFilterKq2])

    //DATOS Y OPCIONES PARA GRÁFICO DE TRANSACCIONES
    const dataTX_Accepted = {
        label: "TX's Aceptadas",
        data: dataBar.map((e) => numeral(e.TX_Accepted).value()),
        backgroundColor:['#2FA40B'],
    };

    const dataTX_Rejected = {
        label: "TX's Rechazadas",
        data: dataBar.map((e) => numeral(e.TX_Rejected).value()),
        backgroundColor:['#FF0000'],
    };

    const dataTX = {
        labels: dataBar.map((e) => e.ID),
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
        data: dataBar.map((e) => numeral(e.accepted_Amount).value()),
        backgroundColor:['#2FA40B']
    }

    const dataAmount_Rejected = {
        label: "Monto Rechazado",
        data: dataBar.map((e) => numeral(e.rejected_Amount).value()),
        backgroundColor:['#FF0000']
    }

    const dataAmount = {
        labels: dataBar.map((e) => e.ID),
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
