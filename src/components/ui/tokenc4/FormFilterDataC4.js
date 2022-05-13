import React, { useContext, useState, useEffect } from 'react';
import { postData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';
import { FilterDataCodeResp } from '../codeResponse/FilterDataCodeResp';
import { FilterDataEntryMode } from '../entryMode/FilterDataEntryMode';
import { FilterData } from '../k2q/FilterData';
import Select from 'react-select';

export const FormFilterDataC4 = () => {

  const { setFilterC4, valFilterKq2, valFilterCR, valFilterEntry, setEndpointToken, endpointToken }  = useContext(FilterContext);
  const [data, setData] = useState([{}]);

  const [filter, setFilter] = useState({
    ID_Terminal_Attended: [],
    ID_Terminal: [],
    Terminal_Location: [],
    ID_Cardholder_Presence: [],
    ID_Card_Presence: [],
    ID_Card_Capture: [],
    ID_Status: [],
    Security_Level: [],
    Routing_Indicator: [],
    Terminal_Activation_Cardholder: [],
    ID_Terminal_Data_Transfer: [],
    ID_Cardholder_Method: []
  })

  const [f, setF] = useState({
    ID_Terminal_Attended: []
  })

  useEffect(() => { 
    async function loadData() {
      const response = await postData('tokenC4', {Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry});
      if (response.status === 200) {
        setData(response.data);
      }
    }
    loadData();
  }, [valFilterKq2, valFilterCR, valFilterEntry]);

  //'.sort()' en cada arreglo para ordenar los numeros y los espacios en blanco en el formuarlio. 
  const ID_Term_At = [...new Set(data.map((e) => e.ID_Terminal_Attended))].sort()
  const ID_Term = [...new Set(data.map((e) => e.ID_Terminal))].sort()
  const Term_Loc = [...new Set(data.map((e) => e.Terminal_Location))].sort()
  const ID_CH_Pre = [...new Set(data.map((e) => e.ID_Cardholder_Presence))].sort()
  const ID_CardPres = [...new Set(data.map((e) => e.ID_Card_Presence))].sort()
  const ID_Card_Cap = [...new Set(data.map((e) => e.ID_Card_Capture))].sort()
  const ID_Sts = [...new Set(data.map((e) => e.ID_Status))].sort()
  const Sec_Lvl = [...new Set(data.map((e) => e.Security_Level))].sort()
  const Rot_Ind = [...new Set(data.map((e) => e.Routing_Indicator))].sort()
  const Term_Act_CH = [...new Set(data.map((e) => e.Terminal_Activation_Cardholder))].sort()
  const ID_Term_DT = [...new Set(data.map((e) => e.ID_Terminal_Data_Transfer))].sort()
  const ID_CH_Met = [...new Set(data.map((e) => e.ID_Cardholder_Method))].sort()

  function synChanges(value, prop) {
    let state = { ...filter }
    state[prop] = value;
    setFilter(state);
  }

  function sendFilter(ev) {
    ev.preventDefault();
    setFilterC4({...filter, Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry})
    setEndpointToken(...f)
  }
  
  return (
    <form className='form'>
      <div className="filter row">
        <h5>Principales Filtros</h5>
        <div className="col">
          <FilterData />
        </div>
        <div className="col">
          <FilterDataCodeResp />
        </div>
        <div className="col">
          <FilterDataEntryMode />
        </div>
      </div>
      <div className='row p-2 m-1'>
        <h5>Filtros Token C4</h5>
        <div className='col'>
          <label>KC4_TERM_ATTEND_IND</label>
            <Select
              closeMenuOnSelect={false}
              isMulti
              onChange={ev => {synChanges(ev.map(e => e.value), 'ID_Terminal_Attended'); setEndpointToken({ID_Terminal_Attended: ev})}}
              value = {endpointToken.ID_Terminal_Attended}
              options={ID_Term_At.map((e) => {
                return(
                  { value:`${e}`, label:`${e}`}
                )
              })}
              className={'select-filter'}
              placeholder={'Seleccione una opción'}
              noOptionsMessage={() => 'No existe esa opción'}/>
          <label>KC4_TERM_OPER_IND</label>
            <Select
              closeMenuOnSelect={false}
              isMulti
              onChange={ev => synChanges(ev.map(e => e.value), 'ID_Terminal')}
              options={ID_Term.map((e) => {
                return(
                  { value:`${e}`, label:`${e}`}
                )
              })}
              className={'select-filter'}
              placeholder={'Seleccione una opción'}
              noOptionsMessage={() => 'No existe esa opción'}/>
          <label>KC4_TERM_LOC_IND</label>
            <Select
              closeMenuOnSelect={false}
              isMulti
              onChange={ev => synChanges(ev.map(e => e.value), 'Terminal_Location')}
              options={Term_Loc.map((e) => {
                return(
                  { value:`${e}`, label:`${e}`}
                )
              })}
              className={'select-filter'}
              placeholder={'Seleccione una opción'}
              noOptionsMessage={() => 'No existe esa opción'}/>
        </div>
        <div className='col'>
          <label>KC4_CRDHLDR_PRESENT_IND</label>
            <Select 
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => synChanges(ev.map(e => e.value), 'ID_Cardholder_Presence')}
            options={ID_CH_Pre.map((e) => {
              return(
                { value:`${e}`, label:`${e}`}
              )
            })}
            className={'select-filter'}
            placeholder={'Seleccione una opcion'}
            noOptionsMessage={() => 'No existe esa opción'}/>
          <label>KC4_CRD_PRESENT_IND</label>
          <Select 
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => synChanges(ev.map(e => e.value), 'ID_Card_Presence')}
            options={ID_CardPres.map((e) => {
              return(
                { value:`${e}`, label:`${e}`}
              )
            })}
            className={'select-filter'}
            placeholder={'Seleccione una opcion'}
            noOptionsMessage={() => 'No existe esa opción'}/>
          <label>KC4_CRD_CAPTR_IND</label>
          <Select 
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => synChanges(ev.map(e => e.value), 'ID_Card_Capture')}
            options={ID_Card_Cap.map((e) => {
              return(
                { value:`${e}`, label:`${e}`}
              )
            })}
            className={'select-filter'}
            placeholder={'Seleccione una opcion'}
            noOptionsMessage={() => 'No existe esa opción'}/>
        </div>
        <div className='col'>
          <label>KC4_TXN_STAT_IND</label>
          <Select 
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => synChanges(ev.map(e => e.value), 'ID_Status')}
            options={ID_Sts.map((e) => {
              return(
                { value:`${e}`, label:`${e}`}
              )
            })}
            className={'select-filter'}
            placeholder={'Seleccione una opcion'}
            noOptionsMessage={() => 'No existe esa opción'}/>
          <label>KC4_TXN_SEC_IND</label>
          <Select 
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => synChanges(ev.map(e => e.value), 'Security_Level')}
            options={Sec_Lvl.map((e) => {
              return(
                { value:`${e}`, label:`${e}`}
              )
            })}
            className={'select-filter'}
            placeholder={'Seleccione una opcion'}
            noOptionsMessage={() => 'No existe esa opción'}/>
          <label>KC4_TXN_RTN_IND</label>
          <Select 
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => synChanges(ev.map(e => e.value), 'Routing_Indicator')}
            options={Rot_Ind.map((e) => {
              return(
                { value:`${e}`, label:`${e}`}
              )
            })}
            className={'select-filter'}
            placeholder={'Seleccione una opcion'}
            noOptionsMessage={() => 'No existe esa opción'}/>
        </div>
        <div className='col'>
          <label>KC4_CRDHLDR_ACTVT_TERM_IND</label>
          <Select 
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => synChanges(ev.map(e => e.value), 'Terminal_Activation_Cardholder')}
            options={Term_Act_CH.map((e) => {
              return(
                { value:`${e}`, label:`${e}`}
              )
            })}
            className={'select-filter'}
            placeholder={'Seleccione una opcion'}
            noOptionsMessage={() => 'No existe esa opción'}/>
          <label>KC4_TERM_INPUT_CAP_IND</label>
          <Select 
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => synChanges(ev.map(e => e.value), 'ID_Terminal_Data_Transfer')}
            options={ID_Term_DT.map((e) => {
              return(
                { value:`${e}`, label:`${e}`}
              )
            })}
            className={'select-filter'}
            placeholder={'Seleccione una opcion'}
            noOptionsMessage={() => 'No existe esa opción'}/>
          <label>KC4_CRDHLDR_ID_METHOD</label>
          <Select 
            closeMenuOnSelect={false}
            isMulti
            onChange={ev => synChanges(ev.map(e => e.value), 'ID_Cardholder_Method')}
            options={ID_CH_Met.map((e) => {
              return(
                { value:`${e}`, label:`${e}`}
              )
            })}
            className={'select-filter'}
            placeholder={'Seleccione una opcion'}
            noOptionsMessage={() => 'No existe esa opción'}/>
        </div>
      </div>
      <div className='row w-100'>
        <div className='col'>
          <button
            className='filter-botton'
            onClick={(ev) => sendFilter(ev)}>Enviar</button>
        </div>
      </div>
    </form>
  )
}
