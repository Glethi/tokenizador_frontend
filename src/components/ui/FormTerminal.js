import React, { useEffect, useContext, useState } from 'react';
import { postData } from '../../services/dashService';
import Select from 'react-select';
import { FilterContext } from '../../services/FilterContext';

export const FormTerminal = ({data}) => {

    const { setFilterTerm, setFilterTermValue, filterTermValue, filterTerm} = useContext(FilterContext);

    //Extraer la data del ID_COMER
    const ID_COMER = data.filter(e => e.ID_Comer);
    const ID_Com = ID_COMER.map(e => e.ID_Comer);
    //Extraer la data del TERM_COMER
    const TERM_COMER = data.filter(e => e.Term_Comer)
    const Term_Com = TERM_COMER.map(e => e.Term_Comer)
    //Extraer la data de FIID_COMER
    const FIID_COMER = data.filter(e => e.Fiid_Comer)
    const Fiid_Com = FIID_COMER.map(e => e.Fiid_Comer).sort()
    const Fiid_Com_Des = FIID_COMER.map(e => e.Fiid_Comer+' - '+e.Fiid_Comer_Des).sort()
    //Extraer la data de FIID_TERM
    const FIID_TERM = data.filter(e => e.Fiid_Term)
    const Fiid_Tem = FIID_TERM.map(e => e.Fiid_Term).sort()
    const Fiid_Tem_Des = FIID_TERM.map(e => e.Fiid_Term+' - '+e.Fiid_Term_Des).sort()
    //Extraer la data de LN_COMER
    const LN_COMER = data.filter(e => e.Ln_Comer)
    const Ln_Com = LN_COMER.map(e => e.Ln_Comer).sort()
    const Ln_Com_Des = LN_COMER.map(e => e.Ln_Comer+' - '+e.Ln_Comer_Des).sort()
    //Entraer la data de LN_TERM
    const LN_TERM = data.filter(e => e.Ln_Term)
    const Ln_Tem = LN_TERM.map(e => e.Ln_Term).sort()
    const Ln_Tem_Des = LN_TERM.map(e => e.Ln_Term+' - '+e.Ln_Term_Des).sort()
    //Extraer la data de FIID_TARJ
    const FIID_TARJ = data.filter(e => e.Fiid_Tarj)
    const Fiid_Ca = FIID_TARJ.map(e => e.Fiid_Tarj).sort()
    const Fiid_Ca_Des = FIID_TARJ.map(e => e.Fiid_Tarj+' - '+e.Fiid_Tarj_Des).sort()
    //Extrar la data de LN_TARJ
    const LN_TARJ = data.filter(e => e.Ln_Tarj)
    const Ln_Ca = LN_TARJ.map(e => e.Ln_Tarj).sort()
    const Ln_Ca_Des = LN_TARJ.map(e => e.Ln_Tarj+' - '+e.Ln_Tarj_Des).sort()
    let Fiid_Com_Arr = [], Fiid_Tem_Arr = [], Fiid_Card_Arr = [], Ln_Comer_Arr = [];
    let Ln_Term_Arr = [], Ln_Card_Arr = []

    //Array nuevo para las opciones de FIID_COMER. 
    //Fiid_Com[i] -> Contiene los valores (ID) del FIID de Comercio
    //Fiid_Com_Des[i] -> Contiene los valores (ID + Descripción) del FIID_Comercio 
    for(let i = 0; i < Fiid_Com.length; i++){
        Fiid_Com_Arr.push({ value: Fiid_Com[i], label: Fiid_Com_Des[i] })
    }
    //FIID_TERM
    for(let i = 0; i < Fiid_Tem.length; i++){
        Fiid_Tem_Arr.push({ value: Fiid_Tem[i], label: Fiid_Tem_Des[i] })
    }
    //FIID_TARJ
    for(let i = 0; i < Fiid_Ca.length; i++){
        Fiid_Card_Arr.push({ value: Fiid_Ca[i], label: Fiid_Ca_Des[i] })
    }
    //LN_COMER
    for(let i = 0; i < Ln_Com.length; i++){
        Ln_Comer_Arr.push({ value: Ln_Com[i], label: Ln_Com_Des[i] })
    }
    //LN_TERM
    for(let i = 0; i < Ln_Tem.length; i++){
        Ln_Term_Arr.push({ value: Ln_Tem[i], label:Ln_Tem_Des[i] })
    }
    //LN_TARJ
    for(let i = 0; i < Ln_Ca.length; i++){
        Ln_Card_Arr.push({ value: Ln_Ca[i], label: Ln_Ca_Des[i] })
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
                    options={Ln_Comer_Arr.map(e => e)}
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
                    options={Ln_Term_Arr.map(e => e)}
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
                    options={Fiid_Card_Arr.map(e => e)}
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
                    options={Ln_Card_Arr.map(e => e)}
                    className={'select-filter-float'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                />
            </div>
            </div>
            )
}
