import React, { useContext, useState } from 'react'; 
import { FilterContext } from '../../../services/FilterContext';

export const FormFilterDataC0 = () => {

    const { dat, setFlag, setFilter } = useContext(FilterContext);
    const [filterC0, setFilterC0] = useState({
        ID_Ecommerce: 'NonValue',
        Card_Type: 'NonValue',
        ID_CVV2: 'NonValue',
        ID_Information: 'NonValue'
    });

    const ID_Ecom = [...new Set(dat.map((e) => e.ID_Ecommerce))]
    const Card_T = [...new Set(dat.map((e) => e.Card_Type))]
    const CVV2 = [...new Set(dat.map((e) => e.ID_CVV2))]
    const Info = [...new Set(dat.map((e) => e.ID_Information))]

    function sysChanges(value, prop){
        var state = {...filterC0};
        state[prop] = value;
        setFilterC0(state);
    }

    function sysFlag(f){
        setFilter(filterC0);
        setFlag(f);
    }

    return (
        <div className='form'>
            <div className='row p-2 m-1'>
                <div className='col m-2'>
                    <label>KC0_INDICADOR_DE_COMERCIO_ELEC</label><br />
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'ID_Ecommerce')}}> 
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            ID_Ecom.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KC0_TIPO_DE_TARJETA</label><br />
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'Card_Type')}}>
                        <option value={'NonValue'}>Sin Valor</option>
                        {
                            Card_T.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='col m-2'>
                    <label>KC0_INDICADOR_DE_CVV2_CVC2_PRE</label><br />
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'ID_CVV2')}}>
                        <option value={'NonValue'}>Sin valor</option>
                        {
                            CVV2.map((e, index) => {
                                return(
                                    <option value={e} key={index}>{e}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>KC0_INDICADOR_DE_INFORMACION_A</label><br />
                    <select onChange={(ev) => {sysChanges(ev.target.value, 'ID_Information')}}>
                        <option value={'NonValue'}>Sin valor</option> 
                        {
                            Info.map((e, index) => {
                                return(
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
                        onClick={() => {sysFlag('tokenC0Filter')}}>
                        Filtrar</button>
                    </div>
                    <div className='col'>
                        <button className='button-reset'
                        type = 'button'
                        onClick={() => {sysFlag('tokenC4DataTable')}}>
                        Reset Tabla</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
