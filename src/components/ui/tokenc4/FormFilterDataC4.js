import React, { useContext, useState, useEffect } from 'react';
import { postData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';
import { FilterDataCodeResp } from '../codeResponse/FilterDataCodeResp';
import { FilterDataEntryMode } from '../entryMode/FilterDataEntryMode';
import { FilterData } from '../k2q/FilterData';
import { FormTerminal } from '../FormTerminal';
import { FiltersTokenC4 } from './FiltersTokenC4';

export const FormFilterDataC4 = () => {

  const { setFilterC4, valFilterKq2, valFilterCR, valFilterEntry, setC4FormValue, c4FormValue }  = useContext(FilterContext);
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
    ID_Cardholder_Method: [],
    ID_Comer: [],
    Term_Comer: [],
    Fiid_Comer: [],
    Fiid_Term: [],
    Ln_Comer: [],
    Ln_Term: [],
    Fiid_Card: [],
    Ln_Card:[]
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
  const ID_Com = [...new Set(data.map((e) => e.ID_Comer))].sort()
  const Term_Com = [...new Set(data.map((e) => e.Term_Comer))].sort()
  const Fiid_Com = [...new Set(data.map((e) => e.Fiid_Comer))].sort()
  const Fiid_Tem = [...new Set(data.map((e) => e.Fiid_Term))].sort()
  const Ln_Com = [...new Set(data.map((e) => e.Ln_Comer))].sort()
  const Ln_Tem = [...new Set(data.map((e) => e.Ln_Term))].sort()
  const Fiid_Ca = [...new Set(data.map((e) => e.Fiid_Card))].sort()
  const Ln_Ca = [...new Set(data.map((e) => e.Ln_Card))].sort()

  function synChanges(value, prop) {
    let state = { ...filter }
    state[prop] = value;
    setFilter(state);
  }

  function sendFilter(ev) {
    ev.preventDefault();
    setFilterC4({...filter, Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry})
  }
  
  return (
    <form className='form'>
      <div className='filter row'>
        <h5>Filtros Principales</h5>
        <div className='col'>
          <FilterData />
        </div>
        <div className='col'>
          <FilterDataCodeResp />
        </div>
        <div className='col'>
          <FilterDataEntryMode />
        </div>
      </div>
      <hr />
      <div className='row p-2 m-1'>
        <h5>Filtros Terminales</h5>
          <FormTerminal 
          formValue={c4FormValue}
          ID_Com={ID_Com}
          Term_Com={Term_Com}
          Fiid_Com={Fiid_Com}
          Fiid_Tem={Fiid_Tem}
          Ln_Com={Ln_Com}
          Ln_Tem={Ln_Tem}
          Fiid_Ca={Fiid_Ca}
          Ln_Ca={Ln_Ca}
          synChanges={synChanges}
          setFormValue={setC4FormValue}/>
      </div>
      <hr />
      <div className='row p-2 m-1'>
        <h5>Filtros Token C4</h5>
          <FiltersTokenC4
          c4FormValue={c4FormValue}
          synChanges={synChanges}
          setC4FormValue={setC4FormValue}
          ID_Term_At={ID_Term_At}
          ID_Term={ID_Term}
          Term_Loc={Term_Loc}
          ID_CH_Pre={ID_CH_Pre}
          ID_CardPres={ID_CardPres}
          ID_Card_Cap={ID_Card_Cap}
          ID_Sts={ID_Sts}
          Sec_Lvl={Sec_Lvl}
          Rot_Ind={Rot_Ind}
          Term_Act_CH={Term_Act_CH}
          ID_Term_DT={ID_Term_DT}
          ID_CH_Met={ID_CH_Met}/>
      </div>
      <hr />
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
