import React, { useState, useEffect, useContext } from 'react'
import { getData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';

export const FilterData = () => {

    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
            const response = await getData('kq2')
            if(response.status == 200){
                setData(response.data)
            }
        }
        loadData()
    }, [])
    
    const filter = [];
    data.map((e) => {
        filter.push(e.ID +" - "+ e.TX_Description)
    })

    const { valFilter, setValFilter } = useContext(FilterContext);
    function sysChanges(values){
        var state = {... valFilter}
        state = values
        setValFilter(state)
    }

    return (
        <div className='form'>
            <div className='row'>
                <label><h4>Filtrar por:</h4></label>
                <div className='col'>
                <select onChange={(ev) => sysChanges(ev.target.value)} onSelect={valFilter}>
                    <option value={'allData'} selected={valFilter == 'allData'}>Todos</option>
                    {
                        filter.map((e, index) => {
                            return(
                                <option value={index} key={index} selected={valFilter == index}>{e}</option>
                            )
                        })
                    }
                </select>
                </div>
            </div>
        </div>
    )
}
