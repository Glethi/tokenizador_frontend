import React, { useContext, useState, useEffect} from 'react'; 
import { postData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';
import { FilterFormC0 } from './FilterFormC0';

export const FormFilterDataC0 = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, setFilterC0, c0FormValue, setC0FormValue, filterTerm } = useContext(FilterContext);
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
    


    const ID_Ecom = [...new Set(data.map(e => e.ID_Ecommerce))].sort()
    const Card_T = [...new Set(data.map(e => e.Card_Type))].sort()
    const CVV2 = [...new Set(data.map(e => e.ID_CVV2))].sort()
    const Info = [...new Set(data.map(e => e.ID_Information))].sort()

    function sysChanges(value, prop){
        var state = {...filter};
        state[prop] = value;
        setFilter(state);
    }

    function sendFilter(ev){
        ev.preventDefault();
        setFilterC0({...filter, ...filterTerm, Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry});
    }

    return (
        <div className='form'>
            <div className='row p-2 m-1'>
                <h5>Filtros Token C0</h5>
                <FilterFormC0
                c0FormValue={c0FormValue}
                sysChanges={sysChanges}
                setC0FormValue={setC0FormValue}
                ID_Ecom={ID_Ecom}
                Card_T={Card_T}
                CVV2={CVV2}
                Info={Info}
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
    )
}
