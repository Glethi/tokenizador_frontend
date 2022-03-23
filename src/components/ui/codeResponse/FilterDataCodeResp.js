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

    const filter = [];
    data.map((e) => {
        filter.push(e.ID+" - "+e.Description)
    })

    const { valFilterCR, setValFilterCR } = useContext(FilterContext);
    function sysChanges(values){
        var state = {... valFilterCR}
        state = values
        setValFilterCR(state)
    }
    return (
        <div className='form'>
            <div className='row'>
                <label><h4>Filtrar por:</h4></label>
                <div className='col'>
                <select onChange={(ev) => sysChanges(ev.target.value)} onSelect={valFilterCR}>
                    <option value={'allData'} selected={valFilterCR == 'allData'}>Todos</option>
                    {
                        filter.map((e, index) => {
                            return(
                                <option value={index} key={index} selected={valFilterCR == index}>{e}</option>
                            )
                        })
                    }
                </select>
                </div>
            </div>
        </div>
    )
}
