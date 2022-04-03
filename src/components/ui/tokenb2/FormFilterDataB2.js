import React, { useState, useContext } from 'react'
import { FilterContext } from '../../../services/FilterContext';

export const FormFilterDataB2 = () => {

    const { dat, setFilter, setFlag } = useContext(FilterContext);

    const [filterB2, setFilterB2] = useState({
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

    const bitM = [...new Set(dat.map((e) => e.Bit_Map))]
    const User_FO = [...new Set(dat.map((e) => e.User_Field_One))]
    const arqc = [...new Set(dat.map((e) => e.ARQC))]
    const Amt_A = [...new Set(dat.map((e) => e.AMT_Auth))]
    const Amt_O = [...new Set(dat.map((e) => e.AMT_Other))]
    const atc = [...new Set(dat.map((e) => e.ATC))]
    const Term_CountryC = [...new Set(dat.map((e) => e.Terminal_Country_Code))]
    const Term_CurrencyC = [...new Set(dat.map((e) => e.Terminal_Currency_Code))]
    const Trans_date = [...new Set(dat.map((e) => e.Transaction_Date))]
    const Trans_type = [...new Set(dat.map((e) => e.Transaction_Type))]
    const Umpr_numb = [...new Set(dat.map((e) => e.Umpedict_Number))]
    const Iss_appData_Length = [...new Set(dat.map((e) => e.Issuing_App_Data_Length))]
    const Iss_appData = [...new Set(dat.map((e) => e.Issuing_App_Data))]
    const tvr = [...new Set(dat.map((e) => e.TVR))]
    const aip = [...new Set(dat.map((e) => e.AIP))]

    function sysChanges(value, prop) {
        var state = {...filterB2}
        state[prop] = value
        setFilterB2(state)
    }

    function sysFlag(f) {
        if (f === 'tokenB2Filter') {
            setFilter(filterB2);
            setFlag(f);
        } else {
            setFilter({});
            setFlag(f);
        }
    }

    return (
        <div className='form'>
            <div className='row p-2 m-1'>
                <div className='col m-2'>
                    <label>KB2_BIT_MAP</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'Bit_Map') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            bitM.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB2_USR_FLD1</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'User_Field_One') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            User_FO.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB2_ARQC</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'ARQC') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            arqc.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB2_AMT_AUTH</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'AMT_Auth') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Amt_A.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB2_AMT_OTHER</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'AMT_Other') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Amt_O.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='col m-2'>
                    <label>KB2_ATC</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'ATC') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            atc.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB2_TERM_CTRY_CDE</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'Terminal_Country_Code') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Term_CountryC.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB2_TRAN_CRNCY_CDE</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'Terminal_Currency_Code') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Term_CurrencyC.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB2_TRAN_DAT</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'Transaction_Date') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Trans_date.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB2_TRAN_TYPE</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'Transaction_Type') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Trans_type.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='col m-2'>
                    <label>KB2_UNPREDICT_NUM</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'Umpedict_Number') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Umpr_numb.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB2_ISS_APPL_DATA_LGTH</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'Issuing_App_Data_Length') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Iss_appData_Length.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB2_ISS_APPL_DATA</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'KB2_ISS_APPL_DATA') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Iss_appData.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB2_TVR</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'TVR') }}>
                        <option value={'NonValue'}>sin valor</option>
                        {
                            tvr.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB2_AIP</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'AIP') }}>
                        <option value={'NonVale'}>Sin valor</option>
                        {
                            aip.map((e, index) => {
                                return (
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
                            onClick={() => { sysFlag('tokenB2Filter') }}>
                            Filtrar</button>
                    </div>
                    <div className='col'>
                        <button className='button-reset'
                            type='button'
                            onClick={() => { sysFlag('tokenC4DataTable') }}>
                            Reset Tabla</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
