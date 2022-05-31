import React, { useState, useContext, useEffect } from 'react'
import { postData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';
import Select from 'react-select';
import { FilterData } from '../k2q/FilterData';
import { FilterDataCodeResp } from '../codeResponse/FilterDataCodeResp';
import { FilterDataEntryMode } from '../entryMode/FilterDataEntryMode';

export const FormFilterDataB2 = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, b2FormValue, setB2FormValue, setFilterB2 } = useContext(FilterContext);
    const [data, setData] = useState([{}]);
    useEffect(() => {
        async function loadData(){
            const response = await postData('tokenB2', {Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry});
            if(response.status === 200){
                setData(response.data)
            }
        }
        loadData()
    }, [valFilterKq2, valFilterCR, valFilterEntry]);
    

    const [filter, setFilter] = useState({
        Bit_Map: [],
        User_Field_One: [],
        ARQC: [],
        AMT_Auth: [],
        AMT_Other: [],
        ATC: [],
        Terminal_Country_Code: [],
        Terminal_Currency_Code: [],
        Transaction_Date: [],
        Transaction_Type: [],
        Umpedict_Number: [],
        Issuing_App_Data_Length: [],
        Issuing_App_Data: [],
        TVR: [],
        AIP: []
    });

    const bitM = [...new Set(data.map((e) => e.Bit_Map))].sort()
    const User_FO = [...new Set(data.map((e) => e.User_Field_One))].sort()
    const arqc = [...new Set(data.map((e) => e.ARQC))].sort()
    const Amt_A = [...new Set(data.map((e) => e.AMT_Auth))].sort()
    const Amt_O = [...new Set(data.map((e) => e.AMT_Other))].sort()
    const atc = [...new Set(data.map((e) => e.ATC))].sort()
    const Term_CountryC = [...new Set(data.map((e) => e.Terminal_Country_Code))].sort()
    const Term_CurrencyC = [...new Set(data.map((e) => e.Terminal_Currency_Code))].sort()
    const Trans_date = [...new Set(data.map((e) => e.Transaction_Date))].sort()
    const Trans_type = [...new Set(data.map((e) => e.Transaction_Type))].sort()
    const Umpr_numb = [...new Set(data.map((e) => e.Umpedict_Number))].sort()
    const Iss_appData_Length = [...new Set(data.map((e) => e.Issuing_App_Data_Length))].sort()
    const Iss_appData = [...new Set(data.map((e) => e.Issuing_App_Data))].sort()
    const tvr = [...new Set(data.map((e) => e.TVR))].sort()
    const aip = [...new Set(data.map((e) => e.AIP))].sort()

    function sysChanges(value, prop) {
        var state = {...filter}
        state[prop] = value
        setFilter(state)
    }

    function sendFilter(ev){
        ev.preventDefault();
        setFilterB2({...filter, Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry})
    }

    return (
        <div className='form'>
            <div className='row p-2 m-1'>
                <h5>Principales Filtros</h5>
                <div className='col m-2'>
                    <FilterData />
                </div>
                <div className='col m-2'>
                    <FilterDataCodeResp />
                </div>
                <div className='col m-2'>
                    <FilterDataEntryMode />
                </div>
            </div>
            <div className='row p-2 m-1'>
                <h5>Filtros del TokenB2</h5>
                <div className='col m-2'>
                    <label>KB2_BIT_MAP</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'Bit_Map'); setB2FormValue({Bit_Map: ev})}}
                    value={b2FormValue.Bit_Map}
                    options={bitM.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB2_USR_FLD1</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'User_Field_One'); setB2FormValue({User_Field_One: ev})}}
                    value={b2FormValue.User_Field_One}
                    options={User_FO.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB2_ARQC</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'ARQC'); setB2FormValue({ARQC: ev})}}
                    value={b2FormValue.ARQC}
                    options={arqc.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB2_AMT_AUTH</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'AMT_Auth'); setB2FormValue({AMT_Auth: ev})}}
                    value={b2FormValue.AMT_Auth}
                    options={Amt_A.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB2_AMT_OTHER</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'AMT_Other'); setB2FormValue({AMT_Other: ev})}}
                    value={b2FormValue.AMT_Other}
                    options={Amt_O.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                </div>
                <div className='col m-2'>
                    <label>KB2_ATC</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'ATC'); setB2FormValue({ATC: ev})}}
                    value={b2FormValue.ATC}
                    options={atc.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB2_TERM_CTRY_CDE</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'Terminal_Country_Code'); setB2FormValue({Terminal_Country_Code: ev})}}
                    value={b2FormValue.Terminal_Country_Code}
                    options={Term_CountryC.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB2_TRAN_CRNCY_CDE</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'Terminal_Currency_Code'); setB2FormValue({Terminal_Currency_Code: ev})}}
                    value={b2FormValue.Terminal_Currency_Code}
                    options={Term_CurrencyC.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB2_TRAN_DAT</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map( e => e.value), 'Transaction_Date'); setB2FormValue({Transaction_Date: ev})}}
                    value={b2FormValue.Transaction_Date}
                    options={Trans_date.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB2_TRAN_TYPE</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'Transaction_Type'); setB2FormValue({Transaction_Type: ev})}}
                    value={b2FormValue.Transaction_Type}
                    options={Trans_type.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                </div>
                <div className='col m-2'>
                    <label>KB2_UNPREDICT_NUM</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'Umpedict_Number'); setB2FormValue({Umpedict_Number: ev})}}
                    value={b2FormValue.Umpedict_Number}
                    options={Umpr_numb.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB2_ISS_APPL_DATA_LGTH</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'Issuing_App_Data_Length'); setB2FormValue({Issuing_App_Data_Length: ev})}}
                    value={b2FormValue.Issuing_App_Data_Length}
                    options={Iss_appData_Length.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB2_ISS_APPL_DATA</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'Issuing_App_Data'); setB2FormValue({Issuing_App_Data: ev})}}
                    value={b2FormValue.Issuing_App_Data}
                    options={Iss_appData.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB2_TVR</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'TVR'); setB2FormValue({TVR: ev})}}
                    value={b2FormValue.TVR}
                    options={tvr.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KB2_AIP</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'AIP'); setB2FormValue({AIP: ev})}}
                    value={b2FormValue.AIP}
                    options={aip.map(e => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                </div>
                <div className='row'>
                    <div className='col'>
                        <button className='button-filter'
                            type='button'
                            onClick={(ev) => sendFilter(ev)}>
                            Filtrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
