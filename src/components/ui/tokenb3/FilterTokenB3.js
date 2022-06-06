import React from 'react'
import Select from 'react-select'

export const FilterTokenB3 = ({b3FormValue, setB3FormValue, sysChanges, BitM, Term_SN, Check_CH, User_FO, User_FT, Term_TEMV, App_VN, CVM_Res, FN_Length, FN}) => {
    return (
        <div className='row'>
            <div className='col m-2'>
                <label>KB3_BIT_MAP</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'Bit_Map'); setB3FormValue({ Bit_Map: ev }) }}
                    value={b3FormValue.Bit_Map}
                    options={BitM.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b3'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB3_TERM_SRL_NUM</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'Terminal_Serial_Number'); setB3FormValue({ Terminal_Serial_Number: ev }) }}
                    value={b3FormValue.Terminal_Serial_Number}
                    options={Term_SN.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b3'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB3_EMV_TERM_CAP</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'Check_Cardholder'); setB3FormValue({ Check_Cardholder: ev }) }}
                    value={b3FormValue.Check_Cardholder}
                    options={Check_CH.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b3'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
            </div>
            <div className='col m-2'>
                <label>KB3_USR_FLD1</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'User_Field_One'); setB3FormValue({ User_Field_One: ev }) }}
                    value={b3FormValue.User_Field_One}
                    options={User_FO.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b3'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB3_USR_FLD2</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'User_Field_Two'); setB3FormValue({ User_Field_Two: ev }) }}
                    value={b3FormValue.User_Field_Two}
                    options={User_FT.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b3'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB3_EMV_TERM_TYPE</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'Terminal_Type_EMV'); setB3FormValue({ Terminal_Type_EMV: ev }) }}
                    value={setB3FormValue.Terminal_Type_EMV}
                    options={Term_TEMV.map(e => {
                        return (
                            { value: `${e}`, value: `${e}` }
                        )
                    })}
                    className={'select-filter-b3'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
            </div>
            <div className='col m-2'>
                <label>KB3_APP_VER_NUM</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'App_Version_Number'); setB3FormValue({ App_Version_Number: ev }) }}
                    value={b3FormValue.App_Version_Number}
                    options={App_VN.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b3'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB3_CVM_RSLTS</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'CVM_Result'); setB3FormValue({ CVM_Result: ev }) }}
                    value={b3FormValue.CVM_Result}
                    options={CVM_Res.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b3'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>KB3_DF_NAME_LGTH</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { sysChanges(ev.map(e => e.value), 'File_Name_Length'); setB3FormValue({ File_Name_Length: ev }) }}
                    value={b3FormValue.File_Name_Length}
                    options={FN_Length.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-b3'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
            </div>
            <div className='row ml-4'>
                <div className='col m-2'>
                    <label>KB3_DF_NAME</label>
                    <Select
                        closeMenuOnSelect={false}
                        isMulti
                        onChange={ev => { sysChanges(ev.map(e => e.value), 'File_Name'); setB3FormValue({ File_Name: ev }) }}
                        value={b3FormValue.File_Name}
                        options={FN.map(e => {
                            return (
                                { value: `${e}`, label: `${e}` }
                            )
                        })}
                        className={'select-filter-extra'}
                        placeholder={'Seleccione una opción'}
                        noOptionsMessage={() => 'No existe esta opción'}
                    />
                </div>
            </div>
        </div>
    )
}
