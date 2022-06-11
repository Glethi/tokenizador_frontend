import React, { useContext, useState, useEffect } from 'react';
import { postData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';
import { FiltersTokenC4 } from './FiltersTokenC4';

export const FormFilterDataC4 = () => {

  const { setFilterC4, valFilterKq2, valFilterCR, valFilterEntry, setC4FormValue, c4FormValue, filterTerm }  = useContext(FilterContext);
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
    setFilterC4({...filter, ...filterTerm, Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry})
  }
  
  return (
    <form className='form'>
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
      <div className='row'>
        <div className='col'>
          <button
            className='filter-botton'
            onClick={(ev) => sendFilter(ev)}>Enviar</button>
        </div>
      </div>
    </form>
  )
}
