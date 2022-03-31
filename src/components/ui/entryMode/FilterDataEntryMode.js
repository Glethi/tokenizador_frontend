import React, { useContext, useEffect, useState } from 'react';
import { getData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';

export const FilterDataEntryMode = () => {

    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
            const response = await getData('entryMode');
            if(response.status === 200){
                setData(response.data);
            }
        }
        loadData()
    }, [])

    const { valFilterEntry, setValFilterEntry } = useContext(FilterContext);
    function sysChanges(values){
        var state = {... valFilterEntry}
        state = values
        setValFilterEntry(state)
    }

    return (
        <div className='form'>
            <div className='row'>
                <label><h4>Filtrar por:</h4></label>
                <div className='col'>
                <select onChange={(ev) => sysChanges(ev.target.value)}>
                    <option value={'allData'} selected={valFilterEntry == 'allData'}>Todos</option>
                    {
                        data.map((e, index) => {
                            return(
                                <option value={e.ID} 
                                key={index} 
                                selected={valFilterEntry == e.ID}>{e.ID+" - "+e.Description}</option>
                            )
                        })
                    }
                </select>
                </div>
            </div>
        </div>
    )
}
