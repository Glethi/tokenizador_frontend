import React, { useContext, useEffect, useState } from 'react';
import { postData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';
import { FormFilterB5 } from './FormFilterB5';

export const FormFilterDataB5 = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, setFilterB5, b5FormValue, setB5FormValue, filterTerm } = useContext(FilterContext);
    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
            const response = await postData('tokenB5', {Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry})
            if(response.status === 200){
                setData(response.data);
            }
        }loadData();
    }, [valFilterKq2, valFilterCR, valFilterEntry]);

    const [filter, setFilter] = useState({
        Iss_Auth_Data:[],
        arpc:[],
        Card_update:[],
        Addl_Data:[],
        Send_Card:[],
        Send_Data:[],
    });

    const Iss_Data = [...new Set(data.map(e => e.Iss_Auth_Data))].sort()
    const arp = [...new Set(data.map(e => e.arpc))].sort()
    const Card_up = [...new Set(data.map(e => e.Card_Update))].sort()
    const Addl_Dat = [...new Set(data.map(e => e.Addl_Data))].sort()
    const Send_Ca = [...new Set(data.map(e => e.Send_Card))].sort()
    const Send_Da = [...new Set(data.map(e => e.Send_Data))].sort()

    function sysChanges(value, prop){
        let state = {...filter}
        state[prop] = value
        setFilter(state)
    }
    
    function sendFilter(ev){
        ev.preventDefault()
        setFilterB5({...filter, ...filterTerm, Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry})
    }

    return (
        <div className='form'>
            <div className='row p-2 m-1'>
                <h5>Filtros Token B5</h5>
                <FormFilterB5
                sysChanges={sysChanges}
                setB5FormValue={setB5FormValue}
                b5FormValue={b5FormValue}
                Iss_Data={Iss_Data}
                arp={arp}
                Card_up={Card_up}
                Addl_Dat={Addl_Dat}
                Send_Ca={Send_Ca}
                Send_Da={Send_Da}/>
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
