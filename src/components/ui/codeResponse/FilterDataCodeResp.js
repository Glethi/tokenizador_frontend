import React, { useState, useEffect, useContext } from 'react';
import { getData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';

export const FilterDataCodeResp = () => {

    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
            const response = await getData('codeResponse');
            if(response.status === 200){
                setData(response.data);
            }
        }
        loadData()
    }, [])

    const { valFilterCR, setValFilterCR } = useContext(FilterContext);
    function sysChanges(values){
        var state = {... valFilterCR}
        state = values
        setValFilterCR(state)
    }
    return (
        <div className='filter-CodeResponse'>
            <div className='row'>
                <div className='col'>
                <label>Código Respuesta</label><br/>
                <select onChange={(ev) => sysChanges(ev.target.value)}>
                    <option value={'allData'} selected={valFilterCR == 'allData'}>Todos</option>
                    {
                        data.map((e, index) => {
                            return(
                                <option 
                                value={e.ID} 
                                key={index} 
                                selected={valFilterCR == e.ID}>{e.ID+" - "+e.Description}</option>
                            )
                        })
                    }
                </select>
                </div>
            </div>
        </div>
    )
}
