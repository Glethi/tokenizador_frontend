import React, { useState, useEffect, useContext } from 'react';
import { getData, postData } from '../../../services/dashService';
import { DataContext } from '../../../services/DataContext';

export const FormFilterDataC4 = () => {

  const [data, setData] = useState([]); //Estado del formulario

  //Estado para mandar JSON a la API
  const [dataFilter, setDataFilter] = useState({
    ID_Terminal_Attended: '',
    ID_Terminal: '',
    Terminal_Location: '',
    ID_Cardholder_Presence: '',
    ID_Card_Presence: '',
    ID_Card_Capture: '',
    ID_Status: '',
    Security_Level: '',
    Routing_Indicator: '',
    Terminal_Activation_Cardholder: '',
    ID_Terminal_Data_Transfer: '',
    ID_Cardholder_Method: ''
  });

  useEffect(() => {
    async function loadData(){
      const response = await getData('tokenC4');
      if(response.status === 200){
        setData(response.data);
      }
    }
    loadData();
  }, [])

  const ID_Terminal_Attended = [], ID_Terminal = [], Terminal_Location = [], ID_Cardholder_Presence = [];
  const ID_Card_Presence = [], ID_Card_Capture = [], ID_Status = [], Security_Level = [], Routing_Indicator = [];
  const Terminal_Activation_Cardholder = [], ID_Terminal_Data_Transfer = [], ID_Cardholder_Method = [];
  var ID_Term_At, ID_Term, Term_Loc, ID_CH_Pre, ID_CardPres, ID_Card_Cap, ID_Sts, Sec_Lvl, Rot_Ind;
  var Term_Act_CH, ID_Term_DT, ID_CH_Met;

  data.map((e) => {
    ID_Terminal_Attended.push(e.ID_Terminal_Attended)
    ID_Terminal.push(e.ID_Terminal)
    Terminal_Location.push(e.Terminal_Location)
    ID_Cardholder_Presence.push(e.ID_Cardholder_Presence)
    ID_Card_Presence.push(e.ID_Card_Presence)
    ID_Card_Capture.push(e.ID_Card_Capture)
    ID_Status.push(e.ID_Status)
    Security_Level.push(e.Security_Level)
    Routing_Indicator.push(e.Routing_Indicator)
    Terminal_Activation_Cardholder.push(e.Terminal_Activation_Cardholder)
    ID_Terminal_Data_Transfer.push(e.ID_Terminal_Data_Transfer)
    ID_Cardholder_Method.push(e.ID_Cardholder_Method)
  });

  //Filtrar los datos y solo dejar los necesarios
  ID_Term_At = [... new Set(ID_Terminal_Attended)]
  ID_Term = [... new Set(ID_Terminal)]
  Term_Loc = [... new Set(Terminal_Location)]
  ID_CH_Pre = [... new Set(ID_Cardholder_Presence)]
  ID_CardPres = [... new Set(ID_Card_Presence)]
  ID_Card_Cap = [... new Set(ID_Card_Capture)]
  ID_Sts = [... new Set(ID_Status)]
  Sec_Lvl = [... new Set(Security_Level)]
  Rot_Ind = [... new Set(Routing_Indicator)]
  Term_Act_CH = [... new Set(Terminal_Activation_Cardholder)]
  ID_Term_DT = [... new Set(ID_Terminal_Data_Transfer)]
  ID_CH_Met = [... new Set(ID_Cardholder_Method)]

  //Función que ayuda a ingresar los nuevos datos al estado con el evento
  //onChange del select
  function synChanges(value, prop) {
    var state = {...dataFilter};
    state[prop] = value;
    setDataFilter(state);
  }

  const {setDat} = useContext(DataContext);
  async function sendData(){
    const response = await postData('tokenC4Filter', dataFilter)
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
        <form className='form'>
            <div className='row p-2 m-1'>
                <div className='col m-2'>
                  <label>KC4_TERM_ATTEND_IND</label>
                    <select onChange={(ev) => {synChanges(ev.target.value, 'ID_Terminal_Attended')}}>
                        <option value={''}>Sin valor</option>
                        {
                          ID_Term_At.map((e, index) => {
                            return(
                              <option value={e} key={index}>{e}</option>
                            )
                          })
                        }
                    </select>
                    <label className='' for='ID_Terminal'>KC4_TERM_OPER_IND</label>
                    <select onChange={(ev) => {synChanges(ev.target.value, 'ID_Terminal')}}>
                        <option value={""}>Sin valor</option>
                        {
                          ID_Term.map((e, index) =>{
                            return(
                              <option value={e} key={index}>{e}</option>
                            )
                          })
                        }
                    </select>
                    <label className='' for='Terminal_Location'>KC4_TERM_LOC_IND</label>
                    <select onChange={(ev) => {synChanges(ev.target.value, 'Terminal_Location')}}>
                        <option value={""}>Sin valor</option>
                        {
                          Term_Loc.map((e, index) => {
                            return(
                              <option value={e} key={index}>{e}</option>
                            )
                          })
                        }
                    </select>
                </div>
                    <div className='col m-2'>
                      <label className='' for='ID_Cardholder_Presence'>KC4_CRDHLDR_PRESENT_IND</label>
                        <select onChange={(ev) => {synChanges(ev.target.value, 'ID_Cardholder_Presence')}}>
                            <option value={""}>Sin valor</option>
                            {
                              ID_CH_Pre.map((e, index) => {
                                return(
                                  <option value={e} key={index}>{e}</option>
                                )
                              })
                            }
                        </select>
                        <label className='' for='ID_Card_Presence'>KC4_CRD_PRESENT_IND</label>
                        <select onChange={(ev) => {synChanges(ev.target.value, 'ID_Card_Presence')}}>
                            <option value={""}>Sin valor</option>
                            {
                              ID_CardPres.map((e, index) => {
                                return(
                                  <option value={e} key={index}>{e}</option>
                                )
                              })
                            }
                        </select>
                        <label className='' for='ID_Card_Capture'>KC4_CRD_CAPTR_IND</label>
                        <select onChange={(ev) => {synChanges(ev.target.value, 'ID_Card_Capture')}}>
                            <option value={""}>Sin valor</option>
                            {
                              ID_Card_Cap.map((e, index) => {
                                return(
                                  <option value={e} key={index}>{e}</option>
                                )
                              })
                            }
                        </select>
                    </div>
                  <div className='col m-2'>
                      <label className='' for='ID_Status'>KC4_TXN_STAT_IND</label>
                        <select onChange={(ev) => {synChanges(ev.target.value, 'ID_Status')}}>
                            <option value={""}>Sin valor</option>
                            {
                              ID_Sts.map((e, index) => {
                                return(
                                  <option value={e} key={index}>{e}</option>
                                )
                              })
                            }
                        </select>
                        <label className='' for='Security_Level'>KC4_TXN_SEC_IND</label>
                        <select onChange={(ev) => {synChanges(ev.target.value, 'Security_Level')}}>
                            <option value={""}>Sin valor</option>
                            {
                              Sec_Lvl.map((e, index) => {
                                return(
                                  <option value={e} key={index}>{e}</option>
                                )
                              })
                            }
                        </select>
                        <label className='' for='Routing_Indicator'>KC4_TXN_RTN_IND</label>
                        <select onChange={(ev) => {synChanges(ev.target.value, 'Routing_Indicator')}}>
                          <option value={""}>Sin valor</option>
                          {
                            Rot_Ind.map((e, index) => {
                              return(
                                <option value={e} key={index}>{e}</option>
                              )
                            })
                          }
                        </select>
                    </div>
                    <div className='col m-2'>
                      <label className='' for='Terminal_Activation_Cardholder'>KC4_CRDHLDR_ACTVT_TERM_IND</label>
                        <select onChange={(ev) => {synChanges(ev.target.value, 'Terminal_Activation_Cardholder')}}>
                            <option value={""}>Sin valor</option>
                            {
                              Term_Act_CH.map((e, index) => {
                                return(
                                  <option value={e} key={index}>{e}</option>
                                )
                              })
                            }
                        </select>
                        <label className='' for='ID_Terminal_Data_Transfer'>KC4_TERM_INPUT_CAP_IND</label>
                        <select onChange={(ev) => {synChanges(ev.target.value, 'ID_Terminal_Data_Transfer')}}>
                            <option value={""}>Sin valor</option>
                            {
                              ID_Term_DT.map((e, index) => {
                                return(
                                  <option value={e} key={index}>{e}</option>
                                )
                              })
                            }
                        </select>
                        <label className='' for='ID_Cardholder_Method'>KC4_CRDHLDR_ID_METHOD</label>
                        <select onChange={(ev) => {synChanges(ev.target.value, 'ID_Cardholder_Method')}}>
                            <option value={""}>Sin valor</option>
                            {
                              ID_CH_Met.map((e, index) => {
                                return(
                                  <option value={e} key={index}>{e}</option>
                                )
                              })
                            }
                        </select>
                    </div>
                <div className='col'>
                  <button className='button-filter'
                  type = 'button'
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
        </form>
  )
}
