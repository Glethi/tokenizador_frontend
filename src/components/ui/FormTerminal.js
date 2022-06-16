import React, { useContext } from 'react'
import Select from 'react-select';
import { FilterContext } from '../../services/FilterContext';

export const FormTerminal = () => {

    const { data, setFilterTerm, setFilterTermValue, filterTermValue, filterTerm } = useContext(FilterContext);

    const ID_Com = [...new Set(data.map(e => e.ID_Comer))].sort()
    const Term_Com = [...new Set(data.map(e => e.Term_Comer))].sort()
    const Fiid_Com = [...new Set(data.map(e => e.Fiid_Comer))].sort()
    const Fiid_Com_Des = [...new Set(data.map(e => e.Fiid_Comer+' - '+e.Fiid_Comer_Des))].sort()
    const Fiid_Tem = [...new Set(data.map(e => e.Fiid_Term))].sort()
    const Ln_Com = [...new Set(data.map(e => e.Ln_Comer))].sort()
    const Ln_Tem = [...new Set(data.map(e => e.Ln_Term))].sort()
    const Fiid_Ca = [...new Set(data.map(e => e.Fiid_Card))].sort()
    const Fiid_Ca_Des = [...new Set(data.map(e => e.Fiid_Card_Des))].sort()
    const Ln_Ca = [...new Set(data.map(e => e.Ln_Card))].sort()
    let Fiid_Com_Arr = []
    let Fiid_Tem_Arr = []

    console.log(Fiid_Ca_Des);

    //Array nuevo para las opciones de FIID_COMER. 
    //Fiid_Com[i] -> Contiene los valores (ID) del FIID de Comercio
    //Fiid_Com_Des[i] -> Contiene los valores (ID + Descripción) del FIID_Comercio 
    for(let i = 0; i < Fiid_Com.length +1; i++){
        Fiid_Com_Arr.push({ value: Fiid_Com[i], label: Fiid_Com_Des[i] })
    }
    for(let i = 0; i < Fiid_Tem.length +1; i++){
        Fiid_Tem_Arr.push({ value: Fiid_Tem[i], label:Fiid_Com_Des[i] })
    }

    return (
        <div className='row'>
            <div className='col'>
                <label>ID_COMER</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { setFilterTerm({...filterTerm, ID_Comer: ev.map(e => e.value)}); setFilterTermValue({...filterTermValue, ID_Comer: ev})}}
                    value={filterTermValue.ID_Comer}
                    options={ID_Com.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-float'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>TERM_COMER</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { setFilterTerm({...filterTerm, Term_Comer: ev.map(e => e.value)}); setFilterTermValue({...filterTermValue, Term_Comer: ev})}}
                    value={filterTermValue.Term_Comer}
                    options={Term_Com.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-float'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
            </div>
            <div className='col'>
                <label>FIID_COMER</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { setFilterTerm({...filterTerm, Fiid_Comer: ev.map(e => e.value)}); setFilterTermValue({...filterTermValue, Fiid_Comer: ev})}}
                    value={filterTermValue.Fiid_Comer}
                    options={Fiid_Com_Arr.map(e => e)}
                    className={'select-filter-float'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>FIID_TERM</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { setFilterTerm({...filterTerm, Fiid_Term: ev.map(e => e.value)}); setFilterTermValue({...filterTermValue, Fiid_Term: ev})}}
                    value={filterTermValue.Fiid_Term}
                    options={Fiid_Tem_Arr.map(e => e)}
                    className={'select-filter-float'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
            </div>
            <div className='col'>
                <label>LN_COMER</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { setFilterTerm({...filterTerm, Ln_Comer: ev.map(e => e.value)}); setFilterTermValue({...filterTermValue, Ln_Comer: ev})}}
                    value={filterTermValue.Ln_Comer}
                    options={Ln_Com.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-float'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>LN_TERM</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { setFilterTerm({...filterTerm, Ln_Term: ev.map(e => e.value)}); setFilterTermValue({...filterTermValue, Ln_Term: ev})}}
                    value={filterTermValue.Ln_Term}
                    options={Ln_Tem.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-float'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
            </div>
            <div className='col'>
                <label>FIID_TARJ</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { setFilterTerm({...filterTerm, Fiid_Card: ev.map(e => e.value)}); setFilterTermValue({...filterTermValue, Fiid_Card: ev})}}
                    value={filterTermValue.Fiid_Card}
                    options={Fiid_Ca.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-float'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
                <label>LN_TARJ</label>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => { setFilterTerm({...filterTerm, Ln_Card: ev.map(e => e.value)}); setFilterTermValue({...filterTermValue, Ln_Card: ev})}}
                    value={filterTermValue.Ln_Card}
                    options={Ln_Ca.map(e => {
                        return (
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter-float'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
            </div>
            </div>
            )
}
