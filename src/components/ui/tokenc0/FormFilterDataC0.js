import React, { useState, useEffect, useContext } from 'react';
import { getData, postData } from '../../../services/dashService';
import { DataContext } from '../../../services/DataContext'; 

export const FormFilterDataC0 = () => {

    const [data, setData] = useState([]);

    const [dataFilter, setDataFilter] = useState({
        ID_Ecommerce: 'NonValue',
        Card_Type: 'NonValue',
        ID_CVV2: 'NonValue',
        ID_Information: 'NonValue'
    })

    useEffect(() => {
        async function loadData(){
            const response = await getData('tokenC0');
            if(response.status === 200){
                setData(response.data)
            }
        }
        loadData();
    }, []);

    const ID_Ecommerce = [], Card_Type = [], ID_CVV2 = [], ID_Information = [];
    var ID_Ecom, Card_T, CVV2, Info;

    data.map((e) => {
        ID_Ecommerce.push(e.ID_Ecommerce)
        Card_Type.push(e.Card_Type)
        ID_CVV2.push(e.ID_CVV2)
        ID_Information.push(e.ID_Information)
    })

    ID_Ecom = [... new Set(ID_Ecommerce)]
    Card_T = [... new Set(Card_Type)]
    CVV2 = [... new Set(ID_CVV2)]
    Info = [... new Set(ID_Information)]

    function sysChanges(value, prop){
        var state = {...dataFilter};
        state[prop] = value;
        setDataFilter(state);
    }

    const {setDat} = useContext(DataContext);
    async function sendData(){
        const response = await postData('tokenC0Filter', dataFilter)
        if(response.status === 200){
            setDat(response.data)
            console.log(dataFilter);
        }
    }

    async function resetData(){
        const response = await getData('tokenC4DataTable')
        if(response.status === 200){
            setDat(response.data)
        }
    }

    return (
        <div className='form'>
            <div className='row p-2 m-1'>
                <div className='col m-2'>
                    <label>KC0_INDICADOR_DE_COMERCIO_ELEC</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'ID_Ecommerce')}}> 
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            ID_Ecom.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                    <label>KC0_TIPO_DE_TARJETA</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'Card_Type')}}>
                        <option value={'NonValue'}>Sin Valor</option>
                        {
                            Card_T.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='col m-2'>
                    <label>KC0_INDICADOR_DE_CVV2_CVC2_PRE</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'ID_CVV2')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            CVV2.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                    <label>KC0_INDICADOR_DE_INFORMACION_A</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'ID_Information')}}>
                        <option value={'NonValue'}>Sin valor</option> 
                        {
                            Info.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='row'>
                    <div className='col'>
                        <button className='button-filter'
                        type='button'
                        onClick={sendData}>
                        Filtrar</button>
                    </div>
                    <div className='col'>
                        <button className='button-reset'
                        type = 'button'
                        onClick={resetData}>
                        Reset Tabla</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
