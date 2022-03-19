import React, { useState, useEffect, useContext } from 'react'
import { getData, postData } from '../../../services/dashService';
import { DataContext } from '../../../services/DataContext'; 

export const FormFilterDataB2 = () => {

    const [data, setData] = useState([{}]);

    const [dataFilter, setDataFilter] = useState({
        Bit_Map: 'NonValue',
        User_Field_One: 'NonValue',
        ARQC: 'NonValue',
        AMT_Auth: 'NonValue',
        AMT_Other: 'NonValue',
        ATC: 'NonValue',
        Terminal_Country_Code: 'NonValue',
        Terminal_Currency_Code: 'NonValue',
        Transaction_Date: 'NonValue',
        Transaction_Type: 'NonValue',
        Umpedict_Number: 'NonValue',
        Issuing_App_Data_Length: 'NonValue',
        Issuing_App_Data: 'NonValue',
        TVR: 'NonValue',
        AIP: 'NonValue'
    });

    useEffect(() => {
        async function loadData(){
            const response = await getData('tokenB2')
            if(response.status === 200){
                setData(response.data);
            }
        }
        loadData();
    }, []);

    const Bit_Map = [], User_Field_One = [], ARQC = [], AMT_Auth = [], AMT_Other = [], ATC = [];
    const Terminal_Country_Code = [], Terminal_Currency_Code = [], Transaction_Date = [], Transaction_Type = [];
    const Umpedict_Number = [], Issuing_App_Data_Length = [], Issuing_App_Data = [], TVR = [], AIP = [];
    var  bitM, User_FO, arqc, Amt_A, Amt_O, atc, Term_CountryC, Term_CurrencyC, Trans_date, Trans_type;
    var Umpr_numb, Iss_appData_Length, Iss_appData, tvr, aip;

    data.map((e) => {
        Bit_Map.push(e.Bit_Map)
        User_Field_One.push(e.User_Field_One)
        ARQC.push(e.ARQC)
        AMT_Auth.push(e.AMT_Auth)
        AMT_Other.push(e.AMT_Other)
        ATC.push(e.ATC)
        Terminal_Country_Code.push(e.Terminal_Country_Code)
        Terminal_Currency_Code.push(e.Terminal_Currency_Code)
        Transaction_Date.push(e.Transaction_Date)
        Transaction_Type.push(e.Transaction_Type)
        Umpedict_Number.push(e.Umpedict_Number)
        Issuing_App_Data_Length.push(e.Issuing_App_Data_Length)
        Issuing_App_Data.push(e.Issuing_App_Data)
        TVR.push(e.TVR)
        AIP.push(e.AIP)
    });

    bitM = [... new Set(Bit_Map)]
    User_FO= [... new Set(User_Field_One)]
    arqc = [... new Set(ARQC)]
    Amt_A = [... new Set(AMT_Auth)]
    Amt_O = [... new Set(AMT_Other)]
    atc = [... new Set(ATC)]
    Term_CountryC = [... new Set(Terminal_Country_Code)]
    Term_CurrencyC = [... new Set(Terminal_Currency_Code)]
    Trans_date = [... new Set(Transaction_Date)]
    Trans_type = [... new Set(Transaction_Type)]
    Umpr_numb = [... new Set(Umpedict_Number)]
    Iss_appData_Length = [... new Set(Issuing_App_Data_Length)]
    Iss_appData = [... new Set(Issuing_App_Data)]
    tvr = [... new Set(TVR)]
    aip = [... new Set(AIP)]

    function sysChanges(value, prop){
        var state = {... dataFilter}
        state[prop] = value
        setDataFilter(state)
    }

    const {setDat} = useContext(DataContext);
    async function sendData(){
        const response = await postData('tokenB2Filter', dataFilter)
        if(response.status === 200){
            setDat(response.data)
        }
    }

    async function resetData(){
        const response = await getData('tokenC4DataTable')
        if(response.status === 200){
            setDat(response.data)
        }
    }

    return (
        <div className='form'>
            <div className='row p-2 m-1'>
                <div className='col m-2'>
                    <label>KB2_BIT_MAP</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'Bit_Map')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            bitM.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                    <label>KB2_USR_FLD1</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'User_Field_One')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            User_FO.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                    <label>KB2_ARQC</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'ARQC')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            arqc.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                    <label>KB2_AMT_AUTH</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'AMT_Auth')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Amt_A.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                    <label>KB2_AMT_OTHER</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'AMT_Other')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Amt_O.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='col m-2'>
                    <label>KB2_ATC</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'ATC')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            atc.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                    <label>KB2_TERM_CTRY_CDE</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'Terminal_Country_Code')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Term_CountryC.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                    <label>KB2_TRAN_CRNCY_CDE</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'Terminal_Currency_Code')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Term_CurrencyC.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                    <label>KB2_TRAN_DAT</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'Transaction_Date')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Trans_date.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                    <label>KB2_TRAN_TYPE</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'Transaction_Type')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Trans_type.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='col m-2'>
                    <label>KB2_UNPREDICT_NUM</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'Umpedict_Number')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Umpr_numb.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                    <label>KB2_ISS_APPL_DATA_LGTH</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'Issuing_App_Data_Length')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Iss_appData_Length.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                    <label>KB2_ISS_APPL_DATA</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'KB2_ISS_APPL_DATA')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Iss_appData.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                    <label>KB2_TVR</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'TVR')}}>
                        <option value={'NonValue'}>sin valor</option>
                        {
                            tvr.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                    <label>KB2_AIP</label>
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'AIP')}}>
                        <option value={'NonVale'}>Sin valor</option>
                        {
                            aip.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='row'>
                    <div className='col'>
                    <button className='button-filter'
                    type='button'
                    onClick={sendData}>
                    Filtrar</button>
                </div>
                <div className='col'>
                    <button className='button-reset'
                    type = 'button'
                    onClick={resetData}>
                    Reset Tabla</button>
                </div>
            </div>
        </div>
    </div>
    )
}
