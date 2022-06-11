import React from 'react';
import Select from 'react-select';

export const FormFilterB5 = ({sysChanges, setB5FormValue, b5FormValue, Iss_Data, arp, Card_up, Addl_Dat, Send_Ca, Send_Da}) => {
    return (
        <div className='row'>
            <div className='col'>
                <label>KB5_ISS_AUTH_DATA_LGTH</label>
                <Select
                closeMenuOnSelect={false}
                isMulti
                onChange={ev => {sysChanges(ev.map(e => e.value), 'Iss_Auth_Data'); setB5FormValue({Iss_Auth_Data: ev})}}
                options={Iss_Data.map(e => {
                    return(
                        {value:`${e}`, label:`${e}`}
                    )
                })}
                className={'select-filter'}
                value={b5FormValue.Iss_Auth_Data}
                placeholder={'Seleccione una opción'}
                noOptionsMessage={() => 'No existe esta opción'}/>
                <label>KB5_ARPC</label>
                <Select 
                closeMenuOnScroll={false}
                isMulti
                onChange={ev => {sysChanges(ev.map(e => e.value), 'arpc'); setB5FormValue({arpc: ev})}}
                options={arp.map(e => {
                    return(
                        {value:`${e}`, label:`${e}`}
                    )
                })}
                className={'select-filter'}
                value={b5FormValue.arpc}
                placeholder={'Seleccione una opción'}
                noOptionsMessage={() => 'No existe esta opción'}/>
            </div>
            <div className='col'>
                <label>KB5_CRD_STAT_UPDT</label>
                <Select 
                closeMenuOnSelect={false}
                isMulti
                onChange={ev => {sysChanges(ev.map(e => e.value), 'Card_update'); setB5FormValue({Card_update: ev})}}
                options={Card_up.map(e => {
                    return(
                        {value:`${e}`, label:`${e}`}
                    )
                })}
                className={'select-filter'}
                value={b5FormValue.Card_update}
                placeholder={'Seleccione una opción'}
                noOptionsMessage={() => 'No existe esta opción'}/>
                <label>KB5_ADDL_DATA</label>
                <Select
                closeMenuOnSelect={false}
                isMulti
                onChange={ev => {sysChanges(ev.map( e => e.value), 'Addl_Data'); setB5FormValue({Addl_Data: ev})}}
                options={Addl_Dat.map(e => {
                    return(
                        {value:`${e}`, label:`${e}`}
                    )
                })}
                className={'select-filter'}
                value={b5FormValue.Addl_Data}
                placeholder={'Seleccione una opción'}
                noOptionsMessage={() => 'No existe esta opción'}/>
            </div>
            <div className='col'>
                <label>KB5_SEND_CRD_BLK</label>
                <Select
                closeMenuOnSelect={false}
                isMulti
                onChange={ev => {sysChanges(ev.map(e => e.value), 'Send_Card'); setB5FormValue({Send_Card: ev})}}
                options={Send_Ca.map(e => {
                    return(
                        {value:`${e}`, label:`${e}`}
                    )
                })}
                className={'select-filter'}
                value={b5FormValue.Send_Card}
                placeholder={'Seleccione una opción'}
                noOptionsMessage={() => 'No existe esta opción'}/>
                <label>KB5_SEND_PUT_DATA</label>
                <Select 
                closeMenuOnSelect={false}
                isMulti
                onChange={ev => {sysChanges(ev.map(e => e.value), 'Send_Data'); setB5FormValue({Send_Data: ev})}}
                options={Send_Da.map(e => {
                    return(
                        {value:`${e}`, label:`${e}`}
                    )
                })}
                className={'select-filter'}
                value={setB5FormValue.Send_Card}
                placeholder={'Seleccione una opción'}
                noOptionsMessage={() => 'No existe esta opción'}/>
            </div>
        </div>
    )
}
