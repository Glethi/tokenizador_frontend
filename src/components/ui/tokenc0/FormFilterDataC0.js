import React, { useContext, useState, useEffect} from 'react'; 
import { postData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';
import Select from 'react-select';
import { FilterData } from '../k2q/FilterData';
import { FilterDataCodeResp } from '../codeResponse/FilterDataCodeResp';
import { FilterDataEntryMode } from '../entryMode/FilterDataEntryMode';

export const FormFilterDataC0 = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, filterC0, setFilterC0, c0FormValue, setC0FormValue } = useContext(FilterContext);
    const [data, setData] = useState([{}]);
    const [filter, setFilter] = useState({
        ID_Ecommerce: [],
        Card_Type: [],
        ID_CVV2: [],
        ID_Information: []
    }); 

    useEffect(() => {
        async function loadData(){
            const response = await postData('tokenC0', {Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry});
            if(response.status === 200){
                setData(response.data);
            }
        }
        loadData();
    }, [valFilterKq2, valFilterCR, valFilterEntry]);
    


    const ID_Ecom = [...new Set(data.map((e) => e.ID_Ecommerce))].sort()
    const Card_T = [...new Set(data.map((e) => e.Card_Type))].sort()
    const CVV2 = [...new Set(data.map((e) => e.ID_CVV2))].sort()
    const Info = [...new Set(data.map((e) => e.ID_Information))].sort()

    function sysChanges(value, prop){
        var state = {...filter};
        state[prop] = value;
        setFilter(state);
    }

    function sendFilter(ev){
        ev.preventDefault();
        setFilterC0({...filter, Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry});
        console.log(filterC0);
    }

    return (
        <div className='form'>
            <div className='filter row'>
                <h5>Principales Filtros</h5>
                <div className='col'>
                    <FilterData />
                </div>
                <div className='col'>
                    <FilterDataCodeResp />
                </div>
                <div className='col'>
                    <FilterDataEntryMode />
                </div>
            </div>
            <div className='row p-2 m-1'>
                <h5>Filtros Token C0</h5>
                <div className='col'>
                    <label>KC0_INDICADOR_DE_COMERCIO_ELEC</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'ID_Ecommerce'); setC0FormValue({ID_Ecommerce: ev})}}
                    value={c0FormValue.ID_Ecommerce}
                    options={ID_Ecom.map((e) => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Selecione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KC0_TIPO_DE_TARJETA</label>
                    <Select
                    closeMenuOnSelect ={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'Card_Type'); setC0FormValue({Card_Type: ev})}}
                    value={c0FormValue.Card_Type}
                    options={Card_T.map((e) => {
                        return(
                            { value: `${e}`, label: `${e}`}
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                </div>
                <div className='col'>
                    <label>KC0_INDICADOR_DE_CVV2_CVC2_PRE</label>
                    <Select 
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'ID_CVV2'); setC0FormValue({ID_CVV2: ev})}}
                    value={c0FormValue.ID_CVV2}
                    options={CVV2.map((e) => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                    <label>KC0_SAF</label>
                    <Select
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={ev => {sysChanges(ev.map(e => e.value), 'ID_Information'); setC0FormValue({ID_Information: ev})}}
                    value={c0FormValue.ID_Information}
                    options={Info.map((e) => {
                        return(
                            { value: `${e}`, label: `${e}` }
                        )
                    })}
                    className={'select-filter'}
                    placeholder={'Seleccione una opción'}
                    noOptionsMessage={() => 'No existe esta opción'}
                    />
                </div>
                <div className='row'>
                    <div className='col'>
                        <button className='filter-botton'
                        type='button'
                        onClick={(ev) => sendFilter(ev)}>
                        Filtrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
