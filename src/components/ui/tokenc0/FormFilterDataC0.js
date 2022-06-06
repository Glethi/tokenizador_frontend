import React, { useContext, useState, useEffect} from 'react'; 
import { postData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';
import Select from 'react-select';
import { FilterData } from '../k2q/FilterData';
import { FilterDataCodeResp } from '../codeResponse/FilterDataCodeResp';
import { FilterDataEntryMode } from '../entryMode/FilterDataEntryMode';
import { FormTerminal } from '../FormTerminal';
import { FilterFormC0 } from './FilterFormC0';

export const FormFilterDataC0 = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, filterC0, setFilterC0, c0FormValue, setC0FormValue } = useContext(FilterContext);
    const [data, setData] = useState([{}]);
    const [filter, setFilter] = useState({
        ID_Ecommerce: [],
        Card_Type: [],
        ID_CVV2: [],
        ID_Information: [],
        ID_Comer: [],
        Term_Comer: [],
        Fiid_Comer: [],
        Fiid_Term: [],
        Ln_Comer: [],
        Ln_Term: [],
        Fiid_Card: [],
        Ln_Card:[]
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
    const ID_Com = [...new Set(data.map(e => e.ID_Comer))].sort()
    const Term_Com = [...new Set(data.map(e => e.Term_Comer))].sort()
    const Fiid_Com = [...new Set(data.map(e => e.Fiid_Comer))].sort()
    const Fiid_Tem = [...new Set(data.map(e => e.Fiid_Term))].sort()
    const Ln_Com = [...new Set(data.map(e => e.Ln_Comer))].sort()
    const Ln_Tem = [...new Set(data.map(e => e.Ln_Term))].sort()
    const Fiid_Ca = [...new Set(data.map(e => e.Fiid_Card))].sort()
    const Ln_Ca = [...new Set(data.map(e => e.Ln_Card))].sort()

    function sysChanges(value, prop){
        var state = {...filter};
        state[prop] = value;
        setFilter(state);
    }

    function sendFilter(ev){
        ev.preventDefault();
        setFilterC0({...filter, Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry});
    }

    return (
        <div className='form'>
            <div className='filter row'>
                <h5>Filtros Principales</h5>
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
            <hr />
            <div className='row p-2 m-1'>
                <h5>Filtros Terminales</h5>
                <FormTerminal 
                formValue={c0FormValue}
                ID_Com={ID_Com}
                Term_Com={Term_Com}
                Fiid_Com={Fiid_Com}
                Fiid_Tem={Fiid_Tem}
                Ln_Com={Ln_Com}
                Ln_Tem={Ln_Tem}
                Fiid_Ca={Fiid_Ca}
                Ln_Ca={Ln_Ca}
                synChanges={sysChanges}
                setFormValue={setC0FormValue}
                />
            </div>
            <hr />
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
                <hr />
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
