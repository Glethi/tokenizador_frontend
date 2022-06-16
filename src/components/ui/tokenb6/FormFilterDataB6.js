import React, { useContext, useEffect, useState } from 'react';
import { postData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';
import { FilterFormB6 } from './FilterFormB6';

export const FormFilterDataB6 = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, setFilterB6, b6FormValue, setB6FormValue, filterTerm } = useContext(FilterContext);
    const [data, setData] = useState([{}]);
    const [filter, setFilter] = useState({
        dataL:[],
        SctData:[],
    })

    useEffect(() => {
        async function loadData(){
            const response = await postData('tokenB6', {Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry});
            if(response.status === 200){
                setData(response.data);
            }
        }
        loadData();
    }, [valFilterKq2, valFilterCR, valFilterEntry])

    const dataL = [...new Set(data.map(e => e.dataLength))].sort();
    const ScpData = [...new Set(data.map(e => e.scriptData))].sort();

    function sysChanges(value, prop){
        let state = {...filter}
        state[prop] = value
        setFilter(state);
    }
    function sendFilter(ev){
        ev.preventDefault()
        setFilterB6({...filter, ...filterTerm, Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry})
    }
    
    return (
        <div className='form'>
            <div className='row p-2 m-1'>
                <h5>Filtros Token B6</h5>
                <FilterFormB6 
                sysChanges={sysChanges}
                b6FormValue={b6FormValue}
                setB6FormValue={setB6FormValue}
                dataL={dataL}
                ScpData={ScpData}
                />
            </div>
            <div className='row'>
                <div className='col'>
                <button className='filter-botton'
                    type='button'
                    onClick={ev => sendFilter(ev)}>Enviar</button>
                </div>
            </div>
        </div>
    )
}
