import React from 'react'
import Select from 'react-select';

export const FiltersTokenC4 = ({c4FormValue, synChanges, setC4FormValue, ID_Term_At, ID_Term, Term_Loc, ID_CH_Pre, ID_CardPres, ID_Card_Cap, ID_Sts, Sec_Lvl, Rot_Ind, Term_Act_CH, ID_Term_DT, ID_CH_Met}) => {
    return (
        <div className='row'>
            <div className='col'>
            <label>KC4_TERM_ATTEND_IND</label>
                <Select
                closeMenuOnSelect={false}
                isMulti
                onChange={ev => {synChanges(ev.map(e => e.value), 'ID_Terminal_Attended'); setC4FormValue({ID_Terminal_Attended: ev})}}
                value = {c4FormValue.ID_Terminal_Attended}
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
                onChange={ev => {synChanges(ev.map(e => e.value), 'ID_Terminal'); setC4FormValue({ID_Terminal: ev})}}
                value={c4FormValue.ID_Terminal}
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
                onChange={ev => {synChanges(ev.map(e => e.value), 'Terminal_Location'); setC4FormValue({Terminal_Location: ev})}}
                value={c4FormValue.Terminal_Location}
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
                onChange={ev => {synChanges(ev.map(e => e.value), 'ID_Cardholder_Presence'); setC4FormValue({ID_Cardholder_Presence: ev})}}
                value={c4FormValue.ID_Cardholder_Presence}
                options={ID_CH_Pre.map((e) => {
                return(
                    { value:`${e}`, label:`${e}`}
                )
                })}
                className={'select-filter'}
                placeholder={'Seleccione una opción'}
                noOptionsMessage={() => 'No existe esa opción'}/>
            <label>KC4_CRD_PRESENT_IND</label>
            <Select 
                closeMenuOnSelect={false}
                isMulti
                onChange={ev => {synChanges(ev.map(e => e.value), 'ID_Card_Presence'); setC4FormValue({ID_Card_Presence: ev})}}
                value={c4FormValue.ID_Card_Presence}
                options={ID_CardPres.map((e) => {
                return(
                    { value:`${e}`, label:`${e}`}
                )
                })}
                className={'select-filter'}
                placeholder={'Seleccione una opción'}
                noOptionsMessage={() => 'No existe esa opción'}/>
            <label>KC4_CRD_CAPTR_IND</label>
            <Select 
                closeMenuOnSelect={false}
                isMulti
                onChange={ev => {synChanges(ev.map(e => e.value), 'ID_Card_Capture'); setC4FormValue({ID_Card_Capture: ev})}}
                value={c4FormValue.ID_Card_Capture}
                options={ID_Card_Cap.map((e) => {
                return(
                    { value:`${e}`, label:`${e}`}
                )
                })}
                className={'select-filter'}
                placeholder={'Seleccione una opción'}
                noOptionsMessage={() => 'No existe esa opción'}/>
            </div>
            <div className='col'>
            <label>KC4_TXN_STAT_IND</label>
            <Select 
                closeMenuOnSelect={false}
                isMulti
                onChange={ev => {synChanges(ev.map(e => e.value), 'ID_Status'); setC4FormValue({ID_Status: ev})}}
                value={c4FormValue.ID_Status}
                options={ID_Sts.map((e) => {
                return(
                    { value:`${e}`, label:`${e}`}
                )
                })}
                className={'select-filter'}
                placeholder={'Seleccione una opción'}
                noOptionsMessage={() => 'No existe esa opción'}/>
            <label>KC4_TXN_SEC_IND</label>
            <Select 
                closeMenuOnSelect={false}
                isMulti
                onChange={ev => {synChanges(ev.map(e => e.value), 'Security_Level'); setC4FormValue({Security_Level: ev})}}
                value={c4FormValue.Security_Level}
                options={Sec_Lvl.map((e) => {
                return(
                    { value:`${e}`, label:`${e}`}
                )
                })}
                className={'select-filter'}
                placeholder={'Seleccione una opción'}
                noOptionsMessage={() => 'No existe esa opción'}/>
            <label>KC4_TXN_RTN_IND</label>
            <Select 
                closeMenuOnSelect={false}
                isMulti
                onChange={ev => {synChanges(ev.map(e => e.value), 'Routing_Indicator'); setC4FormValue({Routing_Indicator: ev})}}
                value={c4FormValue.Routing_Indicator}
                options={Rot_Ind.map((e) => {
                return(
                    { value:`${e}`, label:`${e}`}
                )
                })}
                className={'select-filter'}
                placeholder={'Seleccione una opción'}
                noOptionsMessage={() => 'No existe esa opción'}/>
            </div>
            <div className='col'>
            <label>KC4_CRDHLDR_ACTVT_TERM_IND</label>
            <Select 
                closeMenuOnSelect={false}
                isMulti
                onChange={ev => {synChanges(ev.map(e => e.value), 'Terminal_Activation_Cardholder'); setC4FormValue({Terminal_Activation_Cardholder: ev})}}
                value={c4FormValue.Terminal_Activation_Cardholder}
                options={Term_Act_CH.map((e) => {
                return(
                    { value:`${e}`, label:`${e}`}
                )
                })}
                className={'select-filter'}
                placeholder={'Seleccione una opción'}
                noOptionsMessage={() => 'No existe esa opción'}/>
            <label>KC4_TERM_INPUT_CAP_IND</label>
            <Select 
                closeMenuOnSelect={false}
                isMulti
                onChange={ev => {synChanges(ev.map(e => e.value), 'ID_Terminal_Data_Transfer'); setC4FormValue({ID_Terminal_Data_Transfer: ev})}}
                value={c4FormValue.ID_Terminal_Data_Transfer}
                options={ID_Term_DT.map((e) => {
                return(
                    { value:`${e}`, label:`${e}`}
                )
                })}
                className={'select-filter'}
                placeholder={'Seleccione una opción'}
                noOptionsMessage={() => 'No existe esa opción'}/>
            <label>KC4_CRDHLDR_ID_METHOD</label>
            <Select 
                closeMenuOnSelect={false}
                isMulti
                onChange={ev => {synChanges(ev.map(e => e.value), 'ID_Cardholder_Method'); setC4FormValue({ID_Cardholder_Method: ev})}}
                value={c4FormValue.ID_Cardholder_Method}
                options={ID_CH_Met.map((e) => {
                return(
                    { value:`${e}`, label:`${e}`}
                )
                })}
                className={'select-filter'}
                placeholder={'Seleccione una opción'}
                noOptionsMessage={() => 'No existe esa opción'}/>
            </div>
        </div>
    )
}
