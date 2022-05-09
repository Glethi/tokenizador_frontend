import React, { useContext, useState, useEffect } from 'react';
import Select from 'react-select';
import { getData } from '../../../../services/dashService';
import { FilterContext } from '../../../../services/FilterContext';

export const EntryModeSelect = () => {

    const { setValFilterEntry, optionsEntry, setOptionsEntry } = useContext(FilterContext);
    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
            const response = await getData('entryMode');
            if(response.status === 200){
                setData(response.data)
            }
        }
        loadData()
    }, [])

    const options = data.map((e) => {
        return(
            { value: `${e.ID}`, label: `${e.ID} - ${e.Description}` }
        )
    })

    return (
        <Select
        closeMenuOnSelect={false}
        onChange={ev => { setValFilterEntry(ev.map(e => e.value)); setOptionsEntry(ev)}}
        value={optionsEntry}
        isMulti
        options={options}
        className={'select'}
        placeholder={'Seleccione o ingrese una opción'}
        noOptionsMessage={() => 'No existe esa opción'} />    
    )
}
