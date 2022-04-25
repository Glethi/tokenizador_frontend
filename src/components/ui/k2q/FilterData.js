import React, { useState, useEffect, useContext } from 'react'
import { getData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';

export const FilterData = () => {

    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
            const response = await getData('kq2');
            if(response.status == 200){
                setData(response.data);
            }
        }
        loadData()
    }, [])

    const { valFilterKq2, setValFilterKq2, setOptions } = useContext(FilterContext);
    function sysChanges(values){
        var state = {... valFilterKq2}
        state = values
        setValFilterKq2(state)
        setOptions(state)
    }

    return (
        <div className='filter-kq2'>
            <div className='row'>
                <div className='col'>
                <label>KQ2 Medio Acceso</label><br />
                <select onChange={(ev) => sysChanges(ev.target.value)}>
                    <option value={'allData'} selected={valFilterKq2 == 'allData'}>Sin filtrar</option>
                    {
                        data.map((e, index) => {
                            return(
                                <option 
                                value={e.ID} 
                                key={index} 
                                selected={valFilterKq2 == e.ID}>{e.ID+" - "+e.Description}</option>
                            )
                        })
                    }
                </select>
                </div>
            </div>
        </div>
    )
}
