import React, { useState, useContext } from 'react'
import { FilterContext } from '../../../services/FilterContext';

export const FormFilterDataB4 = () => {

    const { dat, setFlag, setFilter } = useContext(FilterContext);

    const [filterB4, setFilterB4] = useState({
        Service_EntryMode: 'NonValue',
        Capacity_Terminal: 'NonValue',
        EVM_Status: 'NonValue',
        Data_Suspect: 'NonValue',
        PAN_Number: 'NonValue',
        Device_Info: 'NonValue',
        Online_Code: 'NonValue',
        ARQC_Verification: 'NonValue',
        ID_Response_ISO: 'NonValue'
    });

    const Ser_EM = [...new Set(dat.map((e) => e.Service_EntryMode))]
    const Cap_Term = [...new Set(dat.map((e) => e.Capacity_Terminal))]
    const EVM_S = [...new Set(dat.map((e) => e.EVM_Status))]
    const Data_S = [...new Set(dat.map((e) => e.Data_Suspect))]
    const PAN_N = [...new Set(dat.map((e) => e.PAN_Number))]
    const Dev_Info = [...new Set(dat.map((e) => e.Device_Info))]
    const Onl_Code = [...new Set(dat.map((e) => e.Online_Code))]
    const ARQC_Vr = [...new Set(dat.map((e) => e.ARQC_Verification))]
    const ID_Resp_ISO = [...new Set(dat.map((e) => e.ID_Response_ISO))]

    function sysChanges(value, prop) {
        var state = { ...filterB4 }
        state[prop] = value
        setFilterB4(state)
    }

    function sysFlag(f) {
        if (f === 'tokenB4Filter') {
            setFilter(filterB4);
            setFlag(f);
        } else {
            setFilter({});
            setFlag(f);
        }
    }


    return (
        <div className='form'>
            <div className='row p-2 m-1'>
                <div className='col m-3'>
                    <label>KB4_PT_SRV_ENTRY_MDE</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'Service_EntryMode') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Ser_EM.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB4_TERM_ENTRY_CAP</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'Capacity_Terminal') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Cap_Term.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB4_LAST_EMV_STAT</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'EVM_Status') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            EVM_S.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB4_DATA_SUSPECT</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'Data_Suspect') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Data_S.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='col m-2'>
                    <label>KB4_APPL_PAN_SEQ_NUM</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'PAN_Number') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            PAN_N.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB4_DEV_INFO</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'Device_Info') }}>
                        <option value={'NonValue'}>Sin Valor</option>
                        {
                            Dev_Info.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB4_RSN_ONL_CDE</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'Online_Code') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Onl_Code.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB4_ARQC_VRFY</label><br />
                    <select onChange={(ev) => { sysChanges(ev.target.value, 'ARQC_Verification') }}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            ARQC_Vr.map((e, index) => {
                                return (
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='row ml-4'>
                    <div className='col m-2'>
                        <label>KB4_ISO_RC_IND</label><br />
                        <select className='extraSelect' onChange={(ev) => { sysChanges(ev.target.value, 'ID_Response_ISO') }}>
                            <option value={'NonValue'}>Sin valor</option>
                            {
                                ID_Resp_ISO.map((e, index) => {
                                    return (
                                        <option value={e} key={index}>{e}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <button className='button-filter'
                        type='button'
                        onClick={() => { sysFlag('tokenB4Filter') }}>
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
    )
}
