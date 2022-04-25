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
        <div className='filter-entrymode'>
            <div className='row'>
                <div className='col'>
                <label>Entry Mode:</label><br />
                <select onChange={(ev) => sysChanges(ev.target.value)}>
                    <option value={'allData'} selected={valFilterEntry == 'allData'}>Sin filtrar</option>
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
