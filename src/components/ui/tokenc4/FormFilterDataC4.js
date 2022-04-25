import React, { useContext, useState, useEffect } from 'react';
import { postData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';
import { FilterDataCodeResp } from '../codeResponse/FilterDataCodeResp';
import { FilterDataEntryMode } from '../entryMode/FilterDataEntryMode';
import { FilterData } from '../k2q/FilterData';

export const FormFilterDataC4 = () => {

  const { filterC4, setFilterC4, valFilterKq2, valFilterCR, valFilterEntry, setEndpointToken } = useContext(FilterContext);

  const [data, setData] = useState([{}]);

  const [filter, setFilter] = useState({
    ID_Terminal_Attended: "NonValue",
    ID_Terminal: "NonValue",
    Terminal_Location: "NonValue",
    ID_Cardholder_Presence: "NonValue",
    ID_Card_Presence: "NonValue",
    ID_Card_Capture: "NonValue",
    ID_Status: "NonValue",
    Security_Level: "NonValue",
    Routing_Indicator: "NonValue",
    Terminal_Activation_Cardholder: "NonValue",
    ID_Terminal_Data_Transfer: "NonValue",
    ID_Cardholder_Method: "NonValue"
  })

  useEffect(() => {
    async function loadData() {
        const response = await postData('tokenC4', {kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry});
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
    var state = { ...filter }
    state[prop] = value;
    setFilter(state);
  }

  function sendFilter(ev) {
    ev.preventDefault();
    setFilterC4({ ...filter, kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry })
    setEndpointToken('tokenC4Filter');
    console.log(filterC4);
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
          <select onChange={(ev) => { synChanges(ev.target.value, 'ID_Terminal_Attended') }}>
            <option value={"NonValue"}>Sin filtrar</option>
            {
              ID_Term_At.map((e, index) => {
                return (
                  <option value={e} key={index}>{e}</option>
                )
              })
            }
          </select>
          <label>KC4_TERM_OPER_IND</label>
          <select onChange={(ev) => { synChanges(ev.target.value, 'ID_Terminal') }}>
            <option value={"NonValue"}>Sin filtrar</option>
            {
              ID_Term.map((e, index) => {
                return (
                  <option value={e} key={index}>{e}</option>
                )
              })
            }
          </select>
          <label>KC4_TERM_LOC_IND</label>
          <select onChange={(ev) => { synChanges(ev.target.value, 'Terminal_Location') }}>
            <option value={"NonValue"}>Sin filtrar</option>
            {
              Term_Loc.map((e, index) => {
                return (
                  <option value={e} key={index}>{e}</option>
                )
              })
            }
          </select>
        </div>
        <div className='col'>
          <label>KC4_CRDHLDR_PRESENT_IND</label>
          <select onChange={(ev) => { synChanges(ev.target.value, 'ID_Cardholder_Presence') }}>
            <option value={"NonValue"}>Sin filtrar</option>
            {
              ID_CH_Pre.map((e, index) => {
                return (
                  <option value={e} key={index}>{e}</option>
                )
              })
            }
          </select>
          <label>KC4_CRD_PRESENT_IND</label>
          <select onChange={(ev) => { synChanges(ev.target.value, 'ID_Card_Presence') }}>
            <option value={"NonValue"}>Sin filtrar</option>
            {
              ID_CardPres.map((e, index) => {
                return (
                  <option value={e} key={index}>{e}</option>
                )
              })
            }
          </select>
          <label>KC4_CRD_CAPTR_IND</label>
          <select onChange={(ev) => { synChanges(ev.target.value, 'ID_Card_Capture') }}>
            <option value={"NonValue"}>Sin filtrar</option>
            {
              ID_Card_Cap.map((e, index) => {
                return (
                  <option value={e} key={index}>{e}</option>
                )
              })
            }
          </select>
        </div>
        <div className='col'>
          <label>KC4_TXN_STAT_IND</label>
          <select onChange={(ev) => { synChanges(ev.target.value, 'ID_Status') }}>
            <option value={"NonValue"}>Sin filtrar</option>
            {
              ID_Sts.map((e, index) => {
                return (
                  <option value={e} key={index}>{e}</option>
                )
              })
            }
          </select>
          <label>KC4_TXN_SEC_IND</label>
          <select onChange={(ev) => { synChanges(ev.target.value, 'Security_Level') }}>
            <option value={"NonValue"}>Sin filtrar</option>
            {
              Sec_Lvl.map((e, index) => {
                return (
                  <option value={e} key={index}>{e}</option>
                )
              })
            }
          </select>
          <label>KC4_TXN_RTN_IND</label>
          <select onChange={(ev) => { synChanges(ev.target.value, 'Routing_Indicator') }}>
            <option value={"NonValue"}>Sin filtrar</option>
            {
              Rot_Ind.map((e, index) => {
                return (
                  <option value={e} key={index}>{e}</option>
                )
              })
            }
          </select>
        </div>
        <div className='col'>
          <label>KC4_CRDHLDR_ACTVT_TERM_IND</label>
          <select onChange={(ev) => { synChanges(ev.target.value, 'Terminal_Activation_Cardholder') }}>
            <option value={"NonValue"}>Sin filtrar</option>
            {
              Term_Act_CH.map((e, index) => {
                return (
                  <option value={e} key={index}>{e}</option>
                )
              })
            }
          </select>
          <label>KC4_TERM_INPUT_CAP_IND</label>
          <select onChange={(ev) => { synChanges(ev.target.value, 'ID_Terminal_Data_Transfer') }}>
            <option value={"NonValue"}>Sin filtrar</option>
            {
              ID_Term_DT.map((e, index) => {
                return (
                  <option value={e} key={index}>{e}</option>
                )
              })
            }
          </select>
          <label>KC4_CRDHLDR_ID_METHOD</label>
          <select onChange={(ev) => { synChanges(ev.target.value, 'ID_Cardholder_Method') }}>
            <option value={"NonValue"}>Sin filtrar</option>
            {
              ID_CH_Met.map((e, index) => {
                return (
                  <option value={e} key={index}>{e}</option>
                )
              })
            }
          </select>
        </div>
      </div>
      <div className='row w-100'>
        <div className='col'>
          <button
            className='filter-botton'
            onClick={(ev) => sendFilter(ev)}>Filtrar</button>
        </div>
      </div>
    </form>
  )
}
