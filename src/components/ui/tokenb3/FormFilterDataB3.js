import React, { useState, useEffect, useContext } from 'react'
import { getData, postData } from '../../../services/dashService';
import { DataContext } from '../../../services/DataContext'; 

export const FormFilterDataB3 = () => {

  const [data, setData] = useState([{}]);

  const [dataFilter, setDataFilter] = useState({
    Bit_Map: 'NonValue',
    Terminal_Serial_Number: 'NonValue',
    Check_Cardholder: 'NonValue',
    User_Field_One: 'NonValue',
    User_Field_Two: 'NonValue',
    Terminal_Type_EMV: 'NonValue',
    App_Version_Number: 'NonValue',
    CVM_Result: 'NonValue',
    File_Name_Length: 'NonValue',
    File_Name: 'NonValue'
  });

  useEffect(() => {
    async function loadData(){
      const response = await getData('tokenB3')
      if(response.status == 200){
        setData(response.data);
      }
    }
    loadData();
  }, []);

  const Bit_Map = [], Terminal_Serial_Number = [], Check_CardHolder = [], User_Field_One = [], User_Field_Two = [];
  const Terminal_Type_EMV = [], App_Version_Number = [], CVM_Result = [], File_Name_Length = [], File_Name = [];
  var BitM, Term_SN, Check_CH, User_FO, User_FT, Term_TEMV, App_VN, CVM_Res, FN_Length, FN;
  data.map((e) => {
    Bit_Map.push(e.Bit_Map)
    Terminal_Serial_Number.push(e.Terminal_Serial_Number)
    Check_CardHolder.push(e.Check_CardHolder)
    User_Field_One.push(e.User_Field_One)
    User_Field_Two.push(e.User_Field_Two)
    Terminal_Type_EMV.push(e.Terminal_Type_EMV)
    App_Version_Number.push(e.App_Version_Number)
    CVM_Result.push(e.CVM_Result)
    File_Name_Length.push(e.File_Name_Length)
    File_Name.push(e.File_Name)
  })

  BitM = [... new Set(Bit_Map)]
  Term_SN = [... new Set(Terminal_Serial_Number)]
  Check_CH = [... new Set(Check_CardHolder)]
  User_FO = [... new Set(User_Field_One)]
  User_FT = [... new Set(User_Field_Two)]
  Term_TEMV = [... new Set(Terminal_Type_EMV)]
  App_VN = [... new Set(App_Version_Number)]
  CVM_Res = [... new Set(CVM_Result)]
  FN_Length = [... new Set(File_Name_Length)]
  FN = [... new Set(File_Name)]

  function sysChanges(value, prop){
    var state = {... dataFilter}
    state[prop] = value
    setDataFilter(state)
  }
  
  const {setDat} = useContext(DataContext);
  async function sendData(){
    const response = await postData('tokenB3Filter', dataFilter)
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
                <label>KB3_BIT_MAP</label>
                <select onChange={(ev) => {sysChanges(ev.target.value, 'Bit_Map')}}>
                  <option value={'NonValue'}>Sin valor</option>
                  {
                    BitM.map((e, index) => {
                      return(
                        <option value={e} key={index}>{e}</option>
                      )
                    })
                  }
                  </select>
                  <label>KB3_TERM_SRL_NUM</label>
                  <select onChange={(ev) => {sysChanges(ev.target.value, 'Terminal_Serial_Number')}}>
                    <option value={'NonValue'}>Sin valor</option>
                    {
                      Term_SN.map((e, index) => {
                        return(
                          <option value={e} key={index}>{e}</option>
                        )
                      })
                    }
                  </select>
                  <label>KB3_EMV_TERM_CAP</label>
                  <select onChange={(ev) => {sysChanges(ev.target.value, 'Check_Cardholder')}}>
                    <option value={'NonValue'}>Sin valor</option>
                    {
                      Check_CH.map((e, index) => {
                        return(
                          <option value={e} key={index}>{e}</option>
                        )
                      })
                    }
                  </select>
            </div>
            <div className='col m-2'>
                  <label>KB3_USR_FLD1</label>
                  <select onChange={(ev) => {sysChanges(ev.target.value, 'User_Field_One')}}>
                    <option value={'NonValue'}>Sin valor</option>
                    {
                      User_FO.map((e, index) =>{
                        return(
                          <option value={e} key={index}>{e}</option>
                        )
                      })
                    }
                  </select>
                  <label>KB3_USR_FLD2</label>
                  <select onChange={(ev) => {sysChanges(ev.target.value, 'User_Field_Two')}}>
                    <option value={'NonValue'}>Sin valor</option>
                    {
                      User_FT.map((e, index) => {
                        return(
                          <option value={e} key={index}>{e}</option>
                        )
                      })
                    }
                  </select>
                  <label>KB3_EMV_TERM_TYPE</label>
                  <select onChange={(ev) => {sysChanges(ev.target.value, 'Terminal_TypeEMV')}}>
                    <option value={'NonValue'}>Sin valor</option>
                    {
                      Term_TEMV.map((e, index) => {
                        return(
                          <option value={e} key={index}>{e}</option>
                        )
                      })
                    }
                  </select>
            </div>
            <div className='col m-2'>
                <label>KB3_APP_VER_NUM</label>
                <select oncChange={(ev) => {sysChanges(ev.target.value, 'App_Version_Number')}}>
                    <option value={'NonValue'}>Sin valor</option>
                    {
                      App_VN.map((e, index) => {
                        return(
                          <option value={e} key={index}>{e}</option>
                        )
                      })
                    }
                </select>
                <label>KB3_CVM_RSLTS</label>
                <select onChange={(ev) => {sysChanges(ev.target.value, 'CVM_Result')}}>
                  <option value={'NonValue'}>Sin valor</option>
                  {
                    CVM_Res.map((e, index) =>{
                      return(
                        <option value={e} key={index}>{e}</option>
                      )
                    })
                  }
                </select>
                <label>KB3_DF_NAME_LGTH</label>
                <select onChange={(ev) => {sysChanges(ev.target.value, 'File_Name_Length')}}>
                  <option value={'NonValue'}>Sin valor</option>
                  {
                    FN_Length.map((e, index) => {
                      return(
                        <option value={e} key={index}>{e}</option>
                      )
                    })
                  }
                </select>
            </div>
        </div>
        <div className='row ml-4'>
          <div className='col m-2'>
            <label>KB3_DF_NAME</label><br/>
              <select className='extraSelect' onChange={(ev) => {sysChanges(ev.target.value, 'File_Name')}}>
                <option value={'NonValue'}>Sin valor</option>
                {
                  FN.map((e, index) => {
                    return(
                      <option value={e} key={index}>{e}</option>
                    )
                  })
                }
              </select>
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
