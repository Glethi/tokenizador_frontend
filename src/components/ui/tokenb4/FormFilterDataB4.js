import React, { useState, useContext, useEffect } from 'react'
import { postData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';
import { FilterDataCodeResp } from '../codeResponse/FilterDataCodeResp';
import { FilterDataEntryMode } from '../entryMode/FilterDataEntryMode';
import { FilterData } from '../k2q/FilterData';
import Select from 'react-select';

export const FormFilterDataB4 = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, b4FormValue, setB4FormValue, setFilterB4 } = useContext(FilterContext);
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

    const Ser_EM = [...new Set(data.map((e) => e.Service_EntryMode))].sort()
    const Cap_Term = [...new Set(data.map((e) => e.Capacity_Terminal))].sort()
    const EVM_S = [...new Set(data.map((e) => e.EVM_Status))].sort()
    const Data_S = [...new Set(data.map((e) => e.Data_Suspect))].sort()
    const PAN_N = [...new Set(data.map((e) => e.PAN_Number))].sort()
    const Dev_Info = [...new Set(data.map((e) => e.Device_Info))].sort()
    const Onl_Code = [...new Set(data.map((e) => e.Online_Code))].sort()
    const ARQC_Vr = [...new Set(data.map((e) => e.ARQC_Verification))].sort()
    const ID_Resp_ISO = [...new Set(data.map((e) => e.ID_Response_ISO))].sort()

    function sysChanges(value, prop) {
        var state = { ...filter }
        state[prop] = value
        setFilter(state)
    }

    function sendFilter(ev){
        ev.preventDefault();
        setFilterB4({...filter, Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry});
    }

    return (
        <div className='form'>
            <div className='row p-2 m-1'>
                <h5>Filtros Principales</h5>
                <div className='col m-3'>
                    <FilterData />
                </div>
                <div className='col m-3'>
                    <FilterDataCodeResp />
                </div>
                <div className='col m-3'>
                    <FilterDataEntryMode />
                </div>
            </div>
            <div className='row p-2 m-1'>
                <h5>Filtros Token B4</h5>
                <div className='col m-3'>
                    <label>KB4_PT_SRV_ENTRY_MDE</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'Service_EntryMode'); setB4FormValue({Service_EntryMode: ev})}}
                    value={b4FormValue.Service_EntryMode}
                    options={Ser_EM.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB4_TERM_ENTRY_CAP</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'Capacity_Terminal'); setB4FormValue({Capacity_Terminal: ev})}}
                    value={b4FormValue.Capacity_Terminal}
                    options={Cap_Term.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB4_LAST_EMV_STAT</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'EVM_Status'); setB4FormValue({EVM_Status: ev})}}
                    value={b4FormValue.EVM_Status}
                    options={EVM_S.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB4_DATA_SUSPECT</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'Data_Suspect'); setB4FormValue({Data_Suspect: ev})}}
                    value={b4FormValue.Data_Suspect}
                    options={Data_S.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                </div>
                <div className='col m-3'>
                    <label>KB4_APPL_PAN_SEQ_NUM</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'PAN_Number'); setB4FormValue({PAN_Number:ev})}}
                    value={b4FormValue.PAN_Number}
                    options={PAN_N.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB4_DEV_INFO</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'Device_Info'); setB4FormValue({Device_Info:ev})}}
                    value={b4FormValue.Device_Info}
                    options={Dev_Info.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB4_RSN_ONL_CDE</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'Online_Code'); setB4FormValue({Online_Code:ev})}}
                    value={b4FormValue.Online_Code}
                    options={Onl_Code.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB4_ARQC_VRFY</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'ARQC_Verification'); setB4FormValue({ARQC_Verification:ev})}}
                    value={b4FormValue.ARQC_Verification}
                    options={ARQC_Vr.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />                   
                </div>
                <div className='row ml-4'>
                    <div className='col m-2'>
                        <label>KB4_ISO_RC_IND</label>
                        <Select
                        closeMenuOnSelect={false}
                        isMulti
                        onChange={ev => {sysChanges(ev.map(e => e.value), 'ID_Response_ISO'); setB4FormValue({ID_Response_ISO:ev})}}
                        value={b4FormValue.ID_Response_ISO}
                        options={ID_Resp_ISO.map(e => {
                            return(
                                { value: `${e}`, label: `${e}` }
                            )
                        })}
                        className={'select-filter'}
                        placeholder={'Seleccione una opción'}
                        noOptionsMessage={() => 'No existe esta opción'}
                        />
                    </div>
                </div>
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
