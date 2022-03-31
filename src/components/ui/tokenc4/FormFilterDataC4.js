import React, { useContext, useState } from 'react';
import { FilterContext } from '../../../services/FilterContext';

export const FormFilterDataC4 = () => {

  const { dat, setFlag, setFilter = ({}) } = useContext(FilterContext);

  const [filterC4, setFilterC4] = useState({
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

  const ID_Term_At = [...new Set(dat.map((e) => e.ID_Terminal_Attended))]
  const ID_Term = [...new Set(dat.map((e) => e.ID_Terminal))]
  const Term_Loc = [...new Set(dat.map((e) => e.Terminal_Location))]
  const ID_CH_Pre = [...new Set(dat.map((e) => e.ID_Cardholder_Presence))]
  const ID_CardPres = [...new Set(dat.map((e) => e.ID_Card_Presence))]
  const ID_Card_Cap = [...new Set(dat.map((e) => e.ID_Card_Capture))]
  const ID_Sts = [...new Set(dat.map((e) => e.ID_Status))]
  const Sec_Lvl = [...new Set(dat.map((e) => e.Security_Level))]
  const Rot_Ind = [...new Set(dat.map((e) => e.Routing_Indicator))]
  const Term_Act_CH = [...new Set(dat.map((e) => e.Terminal_Activation_Cardholder))]
  const ID_Term_DT = [...new Set(dat.map((e) => e.ID_Terminal_Data_Transfer))]
  const ID_CH_Met = [...new Set(dat.map((e) => e.ID_Cardholder_Method))]

  function synChanges(value, prop) {
    var state = {...filterC4}
    state[prop] = value;
    setFilterC4(state);
  }

  function sysFlag(f){
    setFilter(filterC4);
    setFlag(f);
  }

  return (
    <form className='form'>
      <div className='row p-2 m-1'>
        <div className='col'>
          <label>KC4_TERM_ATTEND_IND</label>
          <select onChange={(ev) => { synChanges(ev.target.value, 'ID_Terminal_Attended') }}>
            <option value={''}>Sin valor</option>
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
            <option value={""}>Sin valor</option>
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
            <option value={""}>Sin valor</option>
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
            <option value={""}>Sin valor</option>
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
            <option value={""}>Sin valor</option>
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
            <option value={""}>Sin valor</option>
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
            <option value={""}>Sin valor</option>
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
            <option value={""}>Sin valor</option>
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
            <option value={""}>Sin valor</option>
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
            <option value={""}>Sin valor</option>
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
            <option value={""}>Sin valor</option>
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
            <option value={""}>Sin valor</option>
            {
              ID_CH_Met.map((e, index) => {
                return (
                  <option value={e} key={index}>{e}</option>
                )
              })
            }
          </select>
        </div>
        <div className='row'>
          <div className='col'>
            <button className='button-filter'
              type='button'
              onClick={() => {sysFlag('tokenC4Filter')}}>
              Filtrar</button>
          </div>
          <div className='col'>
            <button className='button-reset'
              type='button'
              onClick={() => {sysFlag('tokenC4DataTable')}}>
              Reset Tabla</button>
          </div>
        </div>
      </div>
    </form>
  )
}
