import React from 'react';
import Select from 'react-select';

export const FilterTokenB2 = ({sysChanges, setB2FormValue, b2FormValue, bitM, User_FO, arqc, Amt_A, Amt_O, atc, Term_CountryC, Term_CurrencyC, Trans_date, Trans_type, Umpr_numb, Iss_appData_Length, Iss_appData, tvr, aip}) => {
    return (
        <div className='row'>
            <div className='col m-2'>
                <label>KB2_BIT_MAP</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'Bit_Map'); setB2FormValue({ Bit_Map: ev }) }}
                    value={b2FormValue.Bit_Map}
                    options={bitM.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b2'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB2_USR_FLD1</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'User_Field_One'); setB2FormValue({ User_Field_One: ev }) }}
                    value={b2FormValue.User_Field_One}
                    options={User_FO.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b2'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB2_ARQC</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'ARQC'); setB2FormValue({ ARQC: ev }) }}
                    value={b2FormValue.ARQC}
                    options={arqc.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b2'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB2_AMT_AUTH</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'AMT_Auth'); setB2FormValue({ AMT_Auth: ev }) }}
                    value={b2FormValue.AMT_Auth}
                    options={Amt_A.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b2'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB2_AMT_OTHER</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'AMT_Other'); setB2FormValue({ AMT_Other: ev }) }}
                    value={b2FormValue.AMT_Other}
                    options={Amt_O.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b2'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
            </div>
            <div className='col m-2'>
                <label>KB2_ATC</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'ATC'); setB2FormValue({ ATC: ev }) }}
                    value={b2FormValue.ATC}
                    options={atc.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b2'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB2_TERM_CTRY_CDE</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'Terminal_Country_Code'); setB2FormValue({ Terminal_Country_Code: ev }) }}
                    value={b2FormValue.Terminal_Country_Code}
                    options={Term_CountryC.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b2'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB2_TRAN_CRNCY_CDE</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'Terminal_Currency_Code'); setB2FormValue({ Terminal_Currency_Code: ev }) }}
                    value={b2FormValue.Terminal_Currency_Code}
                    options={Term_CurrencyC.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b2'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB2_TRAN_DAT</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'Transaction_Date'); setB2FormValue({ Transaction_Date: ev }) }}
                    value={b2FormValue.Transaction_Date}
                    options={Trans_date.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b2'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB2_TRAN_TYPE</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'Transaction_Type'); setB2FormValue({ Transaction_Type: ev }) }}
                    value={b2FormValue.Transaction_Type}
                    options={Trans_type.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b2'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
            </div>
            <div className='col m-2'>
                <label>KB2_UNPREDICT_NUM</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'Umpedict_Number'); setB2FormValue({ Umpedict_Number: ev }) }}
                    value={b2FormValue.Umpedict_Number}
                    options={Umpr_numb.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b2'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB2_ISS_APPL_DATA_LGTH</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'Issuing_App_Data_Length'); setB2FormValue({ Issuing_App_Data_Length: ev }) }}
                    value={b2FormValue.Issuing_App_Data_Length}
                    options={Iss_appData_Length.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b2'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB2_ISS_APPL_DATA</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'Issuing_App_Data'); setB2FormValue({ Issuing_App_Data: ev }) }}
                    value={b2FormValue.Issuing_App_Data}
                    options={Iss_appData.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b2'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB2_TVR</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'TVR'); setB2FormValue({ TVR: ev }) }}
                    value={b2FormValue.TVR}
                    options={tvr.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b2'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB2_AIP</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'AIP'); setB2FormValue({ AIP: ev }) }}
                    value={b2FormValue.AIP}
                    options={aip.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b2'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
            </div>
        </div>
    )
}
