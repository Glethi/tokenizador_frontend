import React, { useState, useContext, useEffect } from 'react'
import { postData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';
import Select from 'react-select';
import { Kq2Select } from '../dashboard/filters/Kq2Select';
import { CodeResponseSelect } from '../dashboard/filters/CodeResponseSelect';
import { EntryModeSelect } from '../dashboard/filters/EntryModeSelect';

export const FormFilterDataB3 = () => {

  const { valFilterKq2, valFilterCR, valFilterEntry, filterB3, setFilterB3, b3FormValue, setB3FormValue } = useContext(FilterContext);
  const [data, setData] = useState([{}]);

  useEffect(() => {
    async function loadData(){
      const response = await postData('tokenB3', {Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry})
      if(response.status === 200){
        setData(response.data);
      }
    }
    loadData();
  }, [valFilterKq2, valFilterCR, valFilterEntry]);
  

  const [filter, setFilter] = useState({
    Bit_Map: [],
    Terminal_Serial_Number: [],
    Check_Cardholder: [],
    User_Field_One: [],
    User_Field_Two: [],
    Terminal_Type_EMV: [],
    App_Version_Number: [],
    CVM_Result: [],
    File_Name_Length: [],
    File_Name: []
  });

  const BitM = [...new Set(data.map((e) => e.Bit_Map))].sort()
  const Term_SN = [...new Set(data.map((e) => e.Terminal_Serial_Number))].sort()
  const Check_CH = [...new Set(data.map((e) => e.Check_Cardholder))].sort()
  const User_FO = [...new Set(data.map((e) => e.User_Field_One))].sort()
  const User_FT = [...new Set(data.map((e) => e.User_Field_Two))].sort()
  const Term_TEMV = [...new Set(data.map((e) => e.Terminal_Type_EMV))].sort()
  const App_VN = [...new Set(data.map((e) => e.App_Version_Number))].sort()
  const CVM_Res = [...new Set(data.map((e) => e.CVM_Result))].sort()
  const FN_Length = [...new Set(data.map((e) => e.File_Name_Length))].sort()
  const FN = [...new Set(data.map((e) => e.File_Name))].sort()

  function sysChanges(value, prop){
    var state = {...filter}
    state[prop] = value
    setFilter(state)
  }

  function sendFilter(ev){
    ev.preventDefault();
    setFilterB3({...filter, Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry})
  }

  return (
    <div className='form'>
      <div className='filter row'>
        <h5>Principales Filtros</h5>
        <div className='col'>
          <label>KQ2 Medio de Acceso</label>
          <Kq2Select />
        </div>
        <div className='col'>
          <label>Código de Respuesta</label>
          <CodeResponseSelect />
        </div>
        <div className='col'>
          <label>Entry Mode</label>
          <EntryModeSelect />
        </div>
      </div>
        <div className='row p-2 m-1'>
          <h5>Filtros Token B3</h5>
            <div className='col m-2'>
              <label>KB3_BIT_MAP</label>
              <Select
              closeMenuOnSelect={false}
              isMulti
              onChange={ev => {sysChanges(ev.map(e => e.value), 'Bit_Map'); setB3FormValue({Bit_Map: ev})}}
              value={b3FormValue.Bit_Map}
              options={BitM.map(e => {
                return(
                  { value: `${e}`, label: `${e}`}
                )
              })}
              className={'select-filter'}
              placeholder={'Seleccione una opción'}
              noOptionsMessage={() => 'No existe esta opción'}
              />
              <label>KB3_TERM_SRL_NUM</label>
              <Select
              closeMenuOnSelect={false}
              isMulti
              onChange={ev => {sysChanges(ev.map(e => e.value), 'Terminal_Serial_Number'); setB3FormValue({Terminal_Serial_Number: ev})}}
              value={b3FormValue.Terminal_Serial_Number}
              options={Term_SN.map(e => {
                return(
                  { value: `${e}`, label: `${e}` }
                )
              })}
              className={'select-filter'}
              placeholder={'Seleccione una opción'}
              noOptionsMessage={() => 'No existe esta opción'}
              />
              <label>KB3_EMV_TERM_CAP</label>
              <Select 
              closeMenuOnSelect={false}
              isMulti
              onChange={ev => {sysChanges(ev.map(e => e.value), 'Check_Cardholder'); setB3FormValue({Check_Cardholder: ev})}}
              value={b3FormValue.Check_Cardholder}
              options={Check_CH.map(e => {
                return(
                  { value: `${e}`, label: `${e}` }
                )
              })}
              className={'select-filter'}
              placeholder={'Seleccione una opción'}
              noOptionsMessage={() => 'No existe esta opción'}
              />
            </div>
            <div className='col m-2'>
              <label>KB3_USR_FLD1</label>
              <Select 
              closeMenuOnSelect={false}
              isMulti
              onChange={ev => {sysChanges(ev.map(e => e.value), 'User_Field_One'); setB3FormValue({User_Field_One: ev})}}
              value={b3FormValue.User_Field_One}
              options={User_FO.map(e => {
                return(
                  { value: `${e}`, label: `${e}` }
                )
              })}
              className={'select-filter'}
              placeholder={'Seleccione una opción'}
              noOptionsMessage={() => 'No existe esta opción'}
              />
              <label>KB3_USR_FLD2</label>
              <Select
              closeMenuOnSelect={false}
              isMulti
              onChange={ev => {sysChanges(ev.map(e => e.value), 'User_Field_Two'); setB3FormValue({User_Field_Two: ev})}}
              value={b3FormValue.User_Field_Two}
              options={User_FT.map(e => {
                return(
                  { value: `${e}`, label: `${e}` }
                )
              })}
              className={'select-filter'}
              placeholder={'Seleccione una opción'}
              noOptionsMessage={() => 'No existe esta opción'}
              />
              <label>KB3_EMV_TERM_TYPE</label>
              <Select
              closeMenuOnSelect={false}
              isMulti
              onChange={ev => {sysChanges(ev.map(e => e.value), 'Terminal_Type_EMV'); setB3FormValue({Terminal_Type_EMV: ev})}}
              value={setB3FormValue.Terminal_Type_EMV}
              options={Term_TEMV.map(e => {
                return(
                  { value: `${e}`, value: `${e}` }
                )
              })}
              className={'select-filter'}
              placeholder={'Seleccione una opción'}
              noOptionsMessage={() => 'No existe esta opción'}
              />
            </div>
            <div className='col m-2'>
              <label>KB3_APP_VER_NUM</label>
              <Select
              closeMenuOnSelect={false}
              isMulti
              onChange={ev => {sysChanges(ev.map(e => e.value), 'App_Version_Number'); setB3FormValue({App_Version_Number: ev})}}
              value={b3FormValue.App_Version_Number}
              options={App_VN.map(e => {
                return(
                  { value: `${e}`, label: `${e}` }
                )
              })}
              className={'select-filter'}
              placeholder={'Seleccione una opción'}
              noOptionsMessage={() => 'No existe esta opción'}
              />
              <label>KB3_CVM_RSLTS</label>
              <Select
              closeMenuOnSelect={false}
              isMulti
              onChange={ev => {sysChanges(ev.map(e => e.value), 'CVM_Result'); setB3FormValue({CVM_Result: ev})}}
              value={b3FormValue.CVM_Result}
              options={CVM_Res.map(e => {
                return(
                  { value: `${e}`, label: `${e}` }
                )
              })}
              className={'select-filter'}
              placeholder={'Seleccione una opción'}
              noOptionsMessage={() => 'No existe esta opción'}
              />
              <label>KB3_DF_NAME_LGTH</label>
              <Select
              closeMenuOnSelect={false}
              isMulti
              onChange={ev => {sysChanges(ev.map(e => e.value), 'File_Name_Length'); setB3FormValue({File_Name_Length: ev})}}
              value={b3FormValue.File_Name_Length}
              options={FN_Length.map(e => {
                return(
                  { value: `${e}`, label: `${e}` }
                )
              })}
              className={'select-filter'}
              placeholder={'Seleccione una opción'}
              noOptionsMessage={() => 'No existe esta opción'}
              />
            </div>
        </div>
        <div className='row ml-4'>
          <div className='col m-2'>
            <label>KB3_DF_NAME</label>
            <Select
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => {sysChanges(ev.map(e => e.value), 'File_Name'); setB3FormValue({File_Name: ev})}}
            value={b3FormValue.File_Name}
            options={FN.map(e => {
              return(
                { value: `${e}`, label: `${e}` }
              )
            })}
            className={'select-filter-extra'}
            placeholder={'Seleccione una opción'}
            noOptionsMessage={() => 'No existe esta opción'}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <button className='filter-botton'
            type='button'
            onClick={ev => sendFilter(ev)}>
            Filtrar</button>
          </div>
        </div>
    </div>
  )
}
