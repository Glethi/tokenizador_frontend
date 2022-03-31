import React, { useState, useEffect, useContext } from 'react'
import { getData, postData } from '../../../services/dashService';
import { DataContext } from '../../../services/DataContext';

export const FormFilterDataB4 = () => {

    const [data, setData] = useState([{}]);

    const [dataFilter, setDataFilter] = useState({
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

    useEffect(() => {
        async function loadData(){
            const response = await getData('tokenB4');
            if(response.status === 200){
                setData(response.data);
            }
        }
        loadData();
    }, []);

    const Service_EntryMode = [], Capacity_Terminal = [], EVM_Status = [], Data_Suspect = [], PAN_Number = [];
    const Device_Info = [], Online_Code = [], ARQC_Verification = [], ID_Response_ISO = [];
    var Ser_EM, Cap_Term, EVM_S, Data_S, PAN_N, Dev_Info, Onl_Code, ARQC_Vr, ID_Resp_ISO;
    data.map((e) =>{
        Service_EntryMode.push(e.Service_EntryMode)
        Capacity_Terminal.push(e.Capacity_Terminal)
        EVM_Status.push(e.EVM_Status)
        Data_Suspect.push(e.Data_Suspect)
        PAN_Number.push(e.PAN_Number)
        Device_Info.push(e.Device_Info)
        Online_Code.push(e.Online_Code)
        ARQC_Verification.push(e.ARQC_Verification)
        ID_Response_ISO.push(e.ID_Response_ISO)
    });

    Ser_EM = [... new Set(Service_EntryMode)]
    Cap_Term = [... new Set(Capacity_Terminal)]
    EVM_S = [... new Set(EVM_Status)]
    Data_S = [... new Set(Data_Suspect)]
    PAN_N = [... new Set(PAN_Number)]
    Dev_Info = [... new Set(Device_Info)]
    Onl_Code = [... new Set(Online_Code)]
    ARQC_Vr = [... new Set(ARQC_Verification)]
    ID_Resp_ISO = [... new Set(ID_Response_ISO)]

    function sysChanges(value, prop){
        var state = {...dataFilter}
        state[prop] = value
        setDataFilter(state)
    }

    
    const {setDat} = useContext(DataContext)
    async function sendData(){
        const response = await postData('tokenB4Filter', dataFilter)
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
                <div className='col m-3'>
                    <label>KB4_PT_SRV_ENTRY_MDE</label><br />
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'Service_EntryMode')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Ser_EM.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB4_TERM_ENTRY_CAP</label><br />
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'Capacity_Terminal')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Cap_Term.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB4_LAST_EMV_STAT</label><br />
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'EVM_Status')}}> 
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            EVM_S.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB4_DATA_SUSPECT</label><br />
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'Data_Suspect')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Data_S.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='col m-2'>
                    <label>KB4_APPL_PAN_SEQ_NUM</label><br />
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'PAN_Number')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            PAN_N.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB4_DEV_INFO</label><br />
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'Device_Info')}}> 
                        <option value={'NonValue'}>Sin Valor</option>
                        { 
                            Dev_Info.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB4_RSN_ONL_CDE</label><br />
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'Online_Code')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            Onl_Code.map((e, index) =>{
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KB4_ARQC_VRFY</label><br />
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'ARQC_Verification')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            ARQC_Vr.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='row ml-4'>
                    <div className='col m-2'>
                        <label>KB4_ISO_RC_IND</label><br/>
                        <select className='extraSelect' onChange={(ev) => {sysChanges(ev.target.value, 'ID_Response_ISO')}}>
                            <option value={'NonValue'}>Sin valor</option>
                            {
                                ID_Resp_ISO.map((e, index) =>{
                                    return(
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
    )
}
