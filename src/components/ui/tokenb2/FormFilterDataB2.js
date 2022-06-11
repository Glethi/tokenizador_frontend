import React, { useState, useContext, useEffect } from 'react'
import { postData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';
import { FilterTokenB2 } from './FilterTokenB2';

export const FormFilterDataB2 = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, b2FormValue, setB2FormValue, setFilterB2, filterTerm } = useContext(FilterContext);
    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData() {
            const response = await postData('tokenB2', { Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry });
            if (response.status === 200) {
                setData(response.data)
            }
        }
        loadData()
    }, [valFilterKq2, valFilterCR, valFilterEntry]);

    const [filter, setFilter] = useState({
        Bit_Map: [],
        User_Field_One: [],
        ARQC: [],
        AMT_Auth: [],
        AMT_Other: [],
        ATC: [],
        Terminal_Country_Code: [],
        Terminal_Currency_Code: [],
        Transaction_Date: [],
        Transaction_Type: [],
        Umpedict_Number: [],
        Issuing_App_Data_Length: [],
        Issuing_App_Data: [],
        TVR: [],
        AIP: [],
    });

    const bitM = [...new Set(data.map(e => e.Bit_Map))].sort()
    const User_FO = [...new Set(data.map(e => e.User_Field_One))].sort()
    const arqc = [...new Set(data.map(e => e.ARQC))].sort()
    const Amt_A = [...new Set(data.map(e => e.AMT_Auth))].sort()
    const Amt_O = [...new Set(data.map(e => e.AMT_Other))].sort()
    const atc = [...new Set(data.map(e => e.ATC))].sort()
    const Term_CountryC = [...new Set(data.map(e => e.Terminal_Country_Code))].sort()
    const Term_CurrencyC = [...new Set(data.map(e => e.Terminal_Currency_Code))].sort()
    const Trans_date = [...new Set(data.map(e => e.Transaction_Date))].sort()
    const Trans_type = [...new Set(data.map(e => e.Transaction_Type))].sort()
    const Umpr_numb = [...new Set(data.map(e => e.Umpedict_Number))].sort()
    const Iss_appData_Length = [...new Set(data.map(e => e.Issuing_App_Data_Length))].sort()
    const Iss_appData = [...new Set(data.map(e => e.Issuing_App_Data))].sort()
    const tvr = [...new Set(data.map(e => e.TVR))].sort()
    const aip = [...new Set(data.map(e => e.AIP))].sort()

    function sysChanges(value, prop) {
        var state = { ...filter }
        state[prop] = value
        setFilter(state)
    }

    function sendFilter(ev) {
        ev.preventDefault();
        setFilterB2({ ...filter, ...filterTerm, Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry })
    }

    return (
        <div className='form'>
            <div className='row p-2 m-1'>
                <h5>Filtros del TokenB2</h5>
                <FilterTokenB2
                sysChanges={sysChanges}
                setB2FormValue={setB2FormValue}
                b2FormValue={b2FormValue}
                bitM={bitM}
                User_FO={User_FO}
                arqc={arqc}
                Amt_A={Amt_A}
                Amt_O={Amt_O}
                atc={atc}
                Term_CountryC={Term_CountryC}
                Term_CurrencyC={Term_CurrencyC}
                Trans_date={Trans_date}
                Trans_type={Trans_type}
                Umpr_numb={Umpr_numb}
                Iss_appData_Length={Iss_appData_Length}
                Iss_appData={Iss_appData}
                tvr={tvr}
                aip={aip}
                />
            </div>
            <div className='row'>
                <div className='col'>
                    <button className='button-filter'
                        type='button'
                        onClick={(ev) => sendFilter(ev)}>
                        Filtrar</button>
                </div>
            </div>
        </div>
    )
}
