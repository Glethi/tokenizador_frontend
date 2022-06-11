import React, { useState, useContext, useEffect } from 'react'
import { postData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';
import { FilterTokenB4 } from './FilterTokenB4';

export const FormFilterDataB4 = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, b4FormValue, setB4FormValue, setFilterB4, filterTerm } = useContext(FilterContext);
    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
            const response = await postData('tokenB4', {Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry});
            if(response.status === 200){
                setData(response.data);
            }
        }
        loadData()
    }, [valFilterKq2, valFilterCR, valFilterEntry]);
    
    const [filter, setFilter] = useState({
        Service_EntryMode: [],
        Capacity_Terminal: [],
        EVM_Status: [],
        Data_Suspect: [],
        PAN_Number: [],
        Device_Info: [],
        Online_Code: [],
        ARQC_Verification: [],
        ID_Response_ISO: []
    });

    const Ser_EM = [...new Set(data.map(e => e.Service_EntryMode))].sort()
    const Cap_Term = [...new Set(data.map(e => e.Capacity_Terminal))].sort()
    const EVM_S = [...new Set(data.map(e => e.EVM_Status))].sort()
    const Data_S = [...new Set(data.map(e => e.Data_Suspect))].sort()
    const PAN_N = [...new Set(data.map(e => e.PAN_Number))].sort()
    const Dev_Info = [...new Set(data.map(e => e.Device_Info))].sort()
    const Onl_Code = [...new Set(data.map(e => e.Online_Code))].sort()
    const ARQC_Vr = [...new Set(data.map(e => e.ARQC_Verification))].sort()
    const ID_Resp_ISO = [...new Set(data.map(e => e.ID_Response_ISO))].sort()

    function sysChanges(value, prop) {
        var state = { ...filter }
        state[prop] = value
        setFilter(state)
    }

    function sendFilter(ev){
        ev.preventDefault();
        setFilterB4({...filter, ...filterTerm, Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry});
    }

    return (
        <div className='form'>
            <div className='row p-2 m-1'>
                <h5>Filtros Token B4</h5>
                <FilterTokenB4
                sysChanges={sysChanges}
                setB4FormValue={setB4FormValue}
                b4FormValue={b4FormValue}
                Ser_EM={Ser_EM}
                Cap_Term={Cap_Term}
                EVM_S={EVM_S}
                Data_S={Data_S}
                PAN_N={PAN_N}
                Dev_Info={Dev_Info}
                Onl_Code={Onl_Code}
                ARQC_Vr={ARQC_Vr}
                ID_Resp_ISO={ID_Resp_ISO}
                />
            </div>
            <div className='row'>
                <div className='col'>
                    <button className='filter-botton'
                        type='button'
                        onClick={(ev) => sendFilter(ev)}>
                        Filtrar</button>
                </div>
            </div>
        </div>
    )
}
