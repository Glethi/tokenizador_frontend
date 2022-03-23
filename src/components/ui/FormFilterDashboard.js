import React, { useState, useEffect, useContext } from 'react'
import { getData } from '../../services/dashService';
import { FilterContext } from '../../services/FilterContext';

export const FormFilterDashboard = () => {

    //const [data, setData] = useState([{}]);

    const { 
        valGlobal,
        setValGlobal,
        data,
        setData,
        valFilter, 
        setValFilter,
        valFilterCR, 
        setValFilterCR,
        valFilterEntry,
        setValFilterEntry
    } = useContext(FilterContext);


    function sysChangesEndpoint(values){
        var state = {... valGlobal}
        state = values
        loadData(state)
        setValGlobal(state)
    }

    function sysChanges(values){
        var state = {... valGlobal}
        state = values
        //setValGlobal(state)
        switch(valGlobal){
            case 'kq2':{
                setValFilter(state)
                break
            }
            case 'codeResponse':{
                setValFilterCR(state)
                break
            }
            case 'entryMode':{
                setValFilterEntry(state)
                break
            }
        }
    }

    async function loadData(endPoint){
        const response = await getData(endPoint);
        if(response.status === 200){
            setData(response.data);
        }
    }
    
    function selectedSecond(){
        switch(valGlobal){
            case 'kq2':{
                res = valFilter
                break
            }
            case 'codeResponse':{
                res = valFilterCR
                break
            }
            case 'entryMode':{
                res = valFilterEntry
                break
            }
        }
    }

    return (
        <div className='form'>
            <div className='row'>
                <label><h4>Filtrar por:</h4></label>
                <div className='row'>
                    <div className='col'>
                        <select 
                        onChange={(ev) => {sysChangesEndpoint(ev.target.value)}} 
                        onSelect={valGlobal}> 
                            <option 
                            value={'dashboard'} 
                            selected={valGlobal == 'dashboard'}
                            >Todos</option>
                            <option 
                            value={'kq2'} 
                            selected={valGlobal == 'kq2'}
                            >Medio Acceso</option>
                            <option 
                            value={'codeResponse'} 
                            selected={valGlobal == 'codeResponse'}
                            >Codigo Respuesta</option>
                            <option 
                            value={'entryMode'} 
                            selected={valGlobal == 'entryMode'}
                            >Entry Mode</option>
                        </select>
                    </div>
                    <div className='col'>
                        <select 
                        onChange={(ev) => {sysChanges(ev.target.value); selectedSecond()}} 
                        disabled={valGlobal == 'dashboard'}
                        onSelect={res}>
                            <option 
                            value={'allData'} 
                            selected={valGlobal == 'dashboard'}
                            >Todos</option>
                            {
                                data.map((e, index) => {
                                    return(
                                        <option value={index} key={index} selected={res == index}>{e.ID+" - "+e.Description}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
