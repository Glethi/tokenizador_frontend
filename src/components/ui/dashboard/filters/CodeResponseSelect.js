import React, { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import { getData } from '../../../../services/dashService';
import { FilterContext } from '../../../../services/FilterContext';

export const CodeResponseSelect = () => {

    const { setValFilterCR, optionsCR, setOptionsCR} = useContext(FilterContext);
    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
            const response = await getData('codeResponse');
            if(response.status === 200){
                setData(response.data);
            }
        }
        loadData()
    }, []);

    const options = data.map((e) => {
        return(
            { value: `${e.ID}`, label: `${e.ID} - ${e.Description}` }
        )
    });
    

    return (
        <Select
        closeMenuOnSelect={false}
        onChange={ev => { setValFilterCR(ev.map(e => e.value)); setOptionsCR(ev)}}
        value={optionsCR}
        isMulti
        options={options}
        className={'select'}
        placeholder={'Seleccione o ingrese una opción'}
        noOptionsMessage={() => 'No existe esa opción'} />
    )
}
