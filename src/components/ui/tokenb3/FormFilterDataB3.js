import React, { useState, useContext } from 'react'
import { FilterContext } from '../../../services/FilterContext';

export const FormFilterDataB3 = () => {

  const { dat, setFlag, setFilter = ({}) } = useContext(FilterContext);

  const [filterB3, setFilterB3] = useState({
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

  const BitM = [...new Set(dat.map((e) => e.Bit_Map))]
  const Term_SN = [...new Set(dat.map((e) => e.Terminal_Serial_Number))]
  const Check_CH = [...new Set(dat.map((e) => e.Check_CardHolder))]
  const User_FO = [...new Set(dat.map((e) => e.User_Field_One))]
  const User_FT = [...new Set(dat.map((e) => e.User_Field_Two))]
  const Term_TEMV = [...new Set(dat.map((e) => e.Terminal_Type_EMV))]
  const App_VN = [...new Set(dat.map((e) => e.App_Version_Number))]
  const CVM_Res = [...new Set(dat.map((e) => e.CVM_Result))]
  const FN_Length = [...new Set(dat.map((e) => e.File_Name_Length))]
  const FN = [...new Set(dat.map((e) => e.File_Name))]

  function sysChanges(value, prop){
    var state = {...filterB3}
    state[prop] = value
    setFilterB3(state)
  }

  function sysFlag(f){
    if(f === 'tokenB3Filter'){
      setFilter(filterB3);
      setFlag(f);
    }else{
      setFilter({});
      setFlag(f);
    }
  }

  return (
    <div className='form'>
        <div className='row p-2 m-1'>
            <div className='col m-2'>
                <label>KB3_BIT_MAP</label><br />
                <select onChange={(ev) => {sysChanges(ev.target.value, 'Bit_Map')}}>
                  <option value={'NonValue'}>Sin valor</option>
                  {
                    BitM.map((e, index) => {
                      return(
                        <option value={e} key={index}>{e}</option>
                      )
                    })
                  }
                  </select><br />
                  <label>KB3_TERM_SRL_NUM</label><br />
                  <select onChange={(ev) => {sysChanges(ev.target.value, 'Terminal_Serial_Number')}}>
                    <option value={'NonValue'}>Sin valor</option>
                    {
                      Term_SN.map((e, index) => {
                        return(
                          <option value={e} key={index}>{e}</option>
                        )
                      })
                    }
                  </select><br />
                  <label>KB3_EMV_TERM_CAP</label><br />
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
                  <label>KB3_USR_FLD1</label><br />
                  <select onChange={(ev) => {sysChanges(ev.target.value, 'User_Field_One')}}>
                    <option value={'NonValue'}>Sin valor</option>
                    {
                      User_FO.map((e, index) =>{
                        return(
                          <option value={e} key={index}>{e}</option>
                        )
                      })
                    }
                  </select><br />
                  <label>KB3_USR_FLD2</label><br />
                  <select onChange={(ev) => {sysChanges(ev.target.value, 'User_Field_Two')}}>
                    <option value={'NonValue'}>Sin valor</option>
                    {
                      User_FT.map((e, index) => {
                        return(
                          <option value={e} key={index}>{e}</option>
                        )
                      })
                    }
                  </select><br />
                  <label>KB3_EMV_TERM_TYPE</label><br />
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
                <label>KB3_APP_VER_NUM</label><br />
                <select onChange={(ev) => {sysChanges(ev.target.value, 'App_Version_Number')}}>
                    <option value={'NonValue'}>Sin valor</option>
                    {
                      App_VN.map((e, index) => {
                        return(
                          <option value={e} key={index}>{e}</option>
                        )
                      })
                    }
                </select><br />
                <label>KB3_CVM_RSLTS</label><br />
                <select onChange={(ev) => {sysChanges(ev.target.value, 'CVM_Result')}}>
                  <option value={'NonValue'}>Sin valor</option>
                  {
                    CVM_Res.map((e, index) =>{
                      return(
                        <option value={e} key={index}>{e}</option>
                      )
                    })
                  }
                </select><br />
                <label>KB3_DF_NAME_LGTH</label><br />
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
            onClick={() => sysFlag('tokenB3Filter')}>
            Filtrar</button>
          </div>
          <div className='col'>
            <button className='button-reset'
            type = 'button'
            onClick={() => sysFlag('tokenC4DataTable')}>
            Reset Tabla</button>
          </div>
        </div>
    </div>
  )
}
