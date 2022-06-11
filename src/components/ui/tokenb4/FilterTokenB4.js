import React from 'react';
import Select from 'react-select';

export const FilterTokenB4 = ({sysChanges, setB4FormValue, b4FormValue, Ser_EM, Cap_Term, EVM_S, Data_S, PAN_N, Dev_Info, Onl_Code, ARQC_Vr, ID_Resp_ISO}) => {
    return (
        <div className='row'>
            <div className='col m-3'>
                <label>KB4_PT_SRV_ENTRY_MDE</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'Service_EntryMode'); setB4FormValue({ Service_EntryMode: ev }) }}
                    value={b4FormValue.Service_EntryMode}
                    options={Ser_EM.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b4'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB4_TERM_ENTRY_CAP</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'Capacity_Terminal'); setB4FormValue({ Capacity_Terminal: ev }) }}
                    value={b4FormValue.Capacity_Terminal}
                    options={Cap_Term.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b4'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB4_LAST_EMV_STAT</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'EVM_Status'); setB4FormValue({ EVM_Status: ev }) }}
                    value={b4FormValue.EVM_Status}
                    options={EVM_S.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b4'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB4_DATA_SUSPECT</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'Data_Suspect'); setB4FormValue({ Data_Suspect: ev }) }}
                    value={b4FormValue.Data_Suspect}
                    options={Data_S.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b4'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
            </div>
            <div className='col m-3'>
                <label>KB4_APPL_PAN_SEQ_NUM</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'PAN_Number'); setB4FormValue({ PAN_Number: ev }) }}
                    value={b4FormValue.PAN_Number}
                    options={PAN_N.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b4'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB4_DEV_INFO</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'Device_Info'); setB4FormValue({ Device_Info: ev }) }}
                    value={b4FormValue.Device_Info}
                    options={Dev_Info.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b4'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB4_RSN_ONL_CDE</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'Online_Code'); setB4FormValue({ Online_Code: ev }) }}
                    value={b4FormValue.Online_Code}
                    options={Onl_Code.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b4'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB4_ARQC_VRFY</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'ARQC_Verification'); setB4FormValue({ ARQC_Verification: ev }) }}
                    value={b4FormValue.ARQC_Verification}
                    options={ARQC_Vr.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b4'}
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
                        onChange={ev => { sysChanges(ev.map(e => e.value), 'ID_Response_ISO'); setB4FormValue({ ID_Response_ISO: ev }) }}
                        value={b4FormValue.ID_Response_ISO}
                        options={ID_Resp_ISO.map(e => {
                            return (
                                { value: `${e}`, label: `${e}` }
                            )
                        })}
                        className={'select-filter-b4'}
                        placeholder={'Seleccione una opción'}
                        noOptionsMessage={() => 'No existe esta opción'}
                    />
                </div>
            </div>
        </div>
    )
}
