import React from 'react'
import Select from 'react-select'
import { findValueTokenC0 } from '../../../catalogs/anexo4i/tokenC0/catalogTokenC0'

export const FilterFormC0 = ({c0FormValue, sysChanges, setC0FormValue, ID_Ecom, Card_T, CVV2, Info}) => {
    return (
        <div className='row'>
            <div className='col'>
                    <label>KC0_INDICADOR_DE_COMERCIO_ELEC</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'ID_Ecommerce'); setC0FormValue({ID_Ecommerce: ev})}}
                    value={c0FormValue.ID_Ecommerce}
                    options={ID_Ecom.map((e) => {
                        const descrip = findValueTokenC0('ID_Ecom', e)
                        return(
                            { value: `${e}`, label: `${e+' - '+descrip}` }
                        )
                    })}
                    className={'select-filter-c0'}
                    placeholder={'Selecione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KC0_TIPO_DE_TARJETA</label>
                    <Select
                    closeMenuOnSelect ={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'Card_Type'); setC0FormValue({Card_Type: ev})}}
                    value={c0FormValue.Card_Type}
                    options={Card_T.map((e) => {
                        const descrip = findValueTokenC0('Card_T', e)
                        return(
                            { value: `${e}`, label: `${e+' - '+descrip}`}
                        )
                    })}
                    className={'select-filter-c0'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                </div>
                <div className='col'>
                    <label>KC0_INDICADOR_DE_CVV2_CVC2_PRE</label>
                    <Select 
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'ID_CVV2'); setC0FormValue({ID_CVV2: ev})}}
                    value={c0FormValue.ID_CVV2}
                    options={CVV2.map((e) => {
                        const descrip = findValueTokenC0('CVV2', e)
                        return(
                            { value: `${e}`, label: `${e+' - '+descrip}` }
                        )
                    })}
                    className={'select-filter-c0'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KC0_SAF</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'ID_Information'); setC0FormValue({ID_Information: ev})}}
                    value={c0FormValue.ID_Information}
                    options={Info.map((e) => {
                        const descrip = findValueTokenC0('Info', e)
                        return(
                            { value: `${e}`, label: `${e+' - '+descrip}` }
                        )
                    })}
                    className={'select-filter-c0'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                </div>
        </div>
    )
}
