import React from 'react'
import Select from 'react-select';

export const FormTerminal = ({formValue, ID_Com, Term_Com, Fiid_Com, Fiid_Tem, Ln_Com, Ln_Tem, Fiid_Ca, Ln_Ca, synChanges, setFormValue}) => { 
    return (
        <div className='row'>
            <div className='col'>
            <label>ID_COMER</label>
            <Select
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => {synChanges(ev.map(e => e.value), 'ID_Comer'); setFormValue({ID_Comer: ev})}}
            value={formValue.ID_Comer}
            options={ID_Com.map(e => {
                return(
                {value: `${e}`, label:`${e}`}
                )
            })}
            className={'select-filter'}
            placeholder={'Seleccione una opción'}
            noOptionsMessage={() => 'No existe esta opción'}
            />
            <label>TERM_COMER</label>
            <Select
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => {synChanges(ev.map(e => e.value), 'Term_Comer'); setFormValue({Term_Comer: ev})}}
            value={formValue.Term_Comer}
            options={Term_Com.map(e => {
            return(
                {value: `${e}`, label: `${e}`}
            )
            })}
            className={'select-filter'}
            placeholder={'Seleccione una opción'}
            noOptionsMessage={() => 'No existe esta opción'}
            />
            </div> 
            <div className='col'>
            <label>FIID_COMER</label>
            <Select
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => {synChanges(ev.map(e => e.value), 'Fiid_Comer'); setFormValue({Fiid_Comer: ev})}}
            value={formValue.Fiid_Comer}
            options={Fiid_Com.map(e => {
                return(
                {value:`${e}`, label:`${e}`}
                )
            })}
            className={'select-filter'}
            placeholder={'Seleccione una opción'}
            noOptionsMessage={() => 'No existe esta opción'}
            />
            <label>FIID_TERM</label>
            <Select
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => {synChanges(ev.map(e => e.value), 'Fiid_Term'); setFormValue({Fiid_Term: ev})}}
            value={formValue.Fiid_Term}
            options={Fiid_Tem.map(e => {
                return(
                {value:`${e}`, label:`${e}`}
                )
            })}
            className={'select-filter'}
            placeholder={'Seleccione una opción'}
            noOptionsMessage={() => 'No existe esta opción'}
            />
            </div>
            <div className='col'>
            <label>LN_COMER</label>
            <Select
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => {synChanges(ev.map(e => e.value), 'Ln_Comer'); setFormValue({Ln_Comer: ev})}}
            value={formValue.Ln_Comer}
            options={Ln_Com.map(e => {
                return(
                {value:`${e}`, label:`${e}`}
                )
            })}
            className={'select-filter'}
            placeholder={'Seleccione una opción'}
            noOptionsMessage={() => 'No existe esta opción'}
            />
            <label>LN_TERM</label>
            <Select
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => {synChanges(ev.map(e => e.value), 'Ln_Term'); setFormValue({Ln_Term: ev})}}
            value={formValue.Ln_Term}
            options={Ln_Tem.map(e => {
                return(
                {value:`${e}`, label:`${e}`}
                )
            })} 
            className={'select-filter'}
            placeholder={'Seleccione una opción'}
            noOptionsMessage={() => 'No existe esta opción'}
            />
            </div>
            <div className='col'>
            <label>FIID_TARJ</label>
            <Select
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => {synChanges(ev.map(e => e.value), 'Fiid_Card'); setFormValue({Fiid_Card: ev})}}
            value={formValue.Fiid_Card}
            options={Fiid_Ca.map(e => {
                return(
                {value:`${e}`, label:`${e}`}
                )
            })} 
            className={'select-filter'}
            placeholder={'Seleccione una opción'}
            noOptionsMessage={() => 'No existe esta opción'}
            />
            <label>LN_TARJ</label>
            <Select
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => {synChanges(ev.map(e => e.value), 'Ln_Card'); setFormValue({Ln_Card: ev})}}
            value={formValue.Ln_Card}
            options={Ln_Ca.map(e => {
                return(
                {value:`${e}`, label:`${e}`}
                )
            })}
            className={'select-filter'}
            placeholder={'Seleccione una opción'}
            noOptionsMessage={() => 'No existe esta opción'}
            />
            </div>
        </div>
    )
}
