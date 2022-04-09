import React, { useState, useEffect, useContext } from 'react'
import { getData, postData } from '../../services/dashService';
import { FilterContext } from '../../services/FilterContext';

export const FormFilterDashboard = () => {

    const [data, setData] = useState([{}]);

    const { 
        valEndpoint,
        setValEndpoint,
        options,
        setOptions, 
        setValFilterKq2,
        setValFilterCR,
        setValFilterEntry
    } = useContext(FilterContext);

    useEffect(() => {
        async function loadData(){
            const response = await getData(valEndpoint);
            if(response.status === 200){
                setData(response.data);
            }
        }
        loadData()
    }, [valEndpoint])

    function sysChangesEndpoint(values){
        var state = values
        setValEndpoint(state)
    }

    function sysChanges(values){
        var state = values
        switch(valEndpoint){
            case 'kq2':{
                setValFilterKq2(state)
                setOptions(state)
                break
            }
            case 'codeResponse':{
                setValFilterCR(state)
                setOptions(state)
                break
            }
            case 'entryMode':{
                setValFilterEntry(state)
                setOptions(state)
                break
            }
        }
    }

    return (
        <div className='form'>
            <div className='row w-100'>
                <div className='col'>
                    <label><h4>Filtrar por:</h4></label>
                    <select
                        onChange={(ev) => {sysChangesEndpoint(ev.target.value)}}>
                        <option
                            value={'dashboard'}
                            selected={valEndpoint == 'dashboard'}
                        >Todos</option>
                        <option
                            value={'kq2'}
                            selected={valEndpoint == 'kq2'}
                        >Medio Acceso</option>
                        <option
                            value={'codeResponse'}
                            selected={valEndpoint == 'codeResponse'}
                        >Codigo Respuesta</option>
                        <option
                            value={'entryMode'}
                            selected={valEndpoint == 'entryMode'}
                        >Entry Mode</option>
                    </select>
                    <select
                        onChange={(ev) => {sysChanges(ev.target.value)}}
                        disabled={valEndpoint == 'dashboard'}>
                        <option
                            value={'allData'}
                            selected={valEndpoint == 'dashboard'}
                        >Todos</option>
                        {
                            data.map((e, index) => {
                                return (
                                    <option value={e.ID} key={index} selected={options === e.ID}>{e.ID + " - " + e.Description}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}
