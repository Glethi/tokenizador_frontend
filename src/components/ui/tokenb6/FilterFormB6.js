import React from 'react';
import Select from 'react-select';

export const FilterFormB6 = ({ sysChanges, setB6FormValue, b6FormValue, dataL, ScpData }) => {
    return (
        <div className='row'>
            <div className='col'>
                <label>KB6_ISS_SCRIPT_DATA_LGTH</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'dataL'); setB6FormValue({ dataL: ev }) }}
                    value={b6FormValue.dataL}
                    options={dataL.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'} />
            </div>
            <div className='col'>
                <label>KB6_ISS_SCRIPT_DATA</label>
                <Select 
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'ScpData'); setB6FormValue({ ScpData: ev })}}
                    value={b6FormValue.ScpData}
                    options={ScpData.map(e => {
                        return(
                            {value:`${e}`, label:`${e}`}
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}/>
            </div>
        </div>
    )
}
