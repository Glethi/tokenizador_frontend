import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select';
import { getData } from '../../../../services/dashService';
import { FilterContext } from '../../../../services/FilterContext';

export const Kq2Select = () => {

    const { setValFilterKq2, optionsKq2, setOptionsKq2 } = useContext(FilterContext);
    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
            const response = await getData('kq2');
            if(response.status === 200){
                setData(response.data);
            }
        }
        loadData()
    }, []);

    const options = data.map((e) => {
        return (
            { value: `${e.ID}`, label: `${e.ID} - ${e.Description}` }
        )
    });

    return (
        <Select
        closeMenuOnSelect={false}
        onChange={ev => { setValFilterKq2(ev.map(e => e.value)); setOptionsKq2(ev)}}
        value = {optionsKq2}
        isMulti
        options={options}
        className={'select'}
        placeholder={'Seleccione o ingrese una opción'}
        noOptionsMessage={() => 'No existe esa opción'} />
    )
}
