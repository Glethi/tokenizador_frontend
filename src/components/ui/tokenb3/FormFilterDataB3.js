import React, { useState, useContext, useEffect } from 'react'
import { postData } from '../../../services/dashService';
import { FilterContext } from '../../../services/FilterContext';
import { Kq2Select } from '../dashboard/filters/Kq2Select';
import { CodeResponseSelect } from '../dashboard/filters/CodeResponseSelect';
import { EntryModeSelect } from '../dashboard/filters/EntryModeSelect';
import { FormTerminal } from '../FormTerminal';
import { FilterTokenB3 } from './FilterTokenB3';

export const FormFilterDataB3 = () => {

  const { valFilterKq2, valFilterCR, valFilterEntry, setFilterB3, b3FormValue, setB3FormValue } = useContext(FilterContext);
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
    File_Name: [],
    ID_Comer: [],
    Term_Comer: [],
    Fiid_Comer: [],
    Fiid_Term: [],
    Ln_Comer: [],
    Ln_Term: [],
    Fiid_Card: [],
    Ln_Card:[]
  });

  const BitM = [...new Set(data.map(e => e.Bit_Map))].sort()
  const Term_SN = [...new Set(data.map(e => e.Terminal_Serial_Number))].sort()
  const Check_CH = [...new Set(data.map(e => e.Check_Cardholder))].sort()
  const User_FO = [...new Set(data.map(e => e.User_Field_One))].sort()
  const User_FT = [...new Set(data.map(e => e.User_Field_Two))].sort()
  const Term_TEMV = [...new Set(data.map(e => e.Terminal_Type_EMV))].sort()
  const App_VN = [...new Set(data.map(e => e.App_Version_Number))].sort()
  const CVM_Res = [...new Set(data.map(e => e.CVM_Result))].sort()
  const FN_Length = [...new Set(data.map(e => e.File_Name_Length))].sort()
  const FN = [...new Set(data.map(e => e.File_Name))].sort()
  const ID_Com = [...new Set(data.map(e => e.ID_Comer))].sort()
  const Term_Com = [...new Set(data.map(e => e.Term_Comer))].sort()
  const Fiid_Com = [...new Set(data.map(e => e.Fiid_Comer))].sort()
  const Fiid_Tem = [...new Set(data.map(e => e.Fiid_Term))].sort()
  const Ln_Com = [...new Set(data.map(e => e.Ln_Comer))].sort()
  const Ln_Tem = [... new Set(data.map(e => e.Ln_Term))].sort()
  const Fiid_Ca = [... new Set(data.map(e => e.Fiid_Card))].sort()
  const Ln_Ca = [...new Set(data.map(e => e.Ln_Card))].sort()

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
      <div className='row p-2 m-1'>
        <h5>Filtros Principales</h5>
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
      <hr />
      <div className='row p-2 m-1'>
        <h5>Filtros Terminal</h5>
        <FormTerminal
        formValue={b3FormValue}
        ID_Com={ID_Com}
        Term_Com={Term_Com}
        Fiid_Com={Fiid_Com}
        Fiid_Tem={Fiid_Tem}
        Ln_Com={Ln_Com}
        Ln_Tem={Ln_Tem}
        Fiid_Ca={Fiid_Ca}
        Ln_Ca={Ln_Ca}
        setFormValue={setB3FormValue}
        synChanges={sysChanges}
        />
      </div>
      <hr />
        <div className='row p-2 m-1'>
          <h5>Filtros Token B3</h5>
            <FilterTokenB3 
            b3FormValue={b3FormValue}
            setB3FormValue={setB3FormValue}
            sysChanges={sysChanges}
            BitM={BitM}
            Term_SN={Term_SN}
            Check_CH={Check_CH}
            User_FO={User_FO}
            User_FT={User_FT}
            Term_TEMV={Term_TEMV}
            App_VN={App_VN}
            CVM_Res={CVM_Res}
            FN_Length={FN_Length}
            FN={FN}
            />
        </div>
        <hr />
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
