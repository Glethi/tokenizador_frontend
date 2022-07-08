import React, { useEffect, useContext, useState } from "react";
import { postData, getData } from "../../services/dashService";
import { FilterContext } from "../../services/FilterContext";
import { Cards } from "../../components/ui/dashboard/Cards";
import { DonutGraph } from "../../components/ui/dashboard/DonutGraph";
import { BsCardText, BsPercent, BsFillCaretDownFill, BsFillCaretUpFill, BsBank2, BsArrowLeftRight, BsFillCreditCard2BackFill } from "react-icons/bs";
import { FaStoreAlt } from 'react-icons/fa';
import { MdPointOfSale } from 'react-icons/md';
import { BiChip } from 'react-icons/bi';
import { FormFilterDashboard } from "../../components/ui/dashboard/FormFilterDashboard";
import { CardsFiidComer } from "../../components/ui/dashboard/cardsFiid_Ln/Fiid_Comer/CardsFiidComer";
import { CardsFiidTerm } from "../../components/ui/dashboard/cardsFiid_Ln/Fiid_Term/CardsFiidTerm";
import { CardsFiidTarj } from "../../components/ui/dashboard/cardsFiid_Ln/Fiid_Tarj/CardsFiidTarj";
import { CardsLnComer } from "../../components/ui/dashboard/cardsFiid_Ln/Ln_Comer/CardsLnComer";
import { CardsLnTerm } from "../../components/ui/dashboard/cardsFiid_Ln/Ln_Term/CardsLnTerm";
import { CardsLnTarj } from "../../components/ui/dashboard/cardsFiid_Ln/Ln_Tarj/CardsLnTarj";

export const DashboardScreen = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, filterTerm } = useContext(FilterContext);
    const [data, setData] = useState([{}]);
    const [dataFalg, setDataFlag] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
    const [catalog, setCatalog] = useState([{}]);
    const [pagination, setPagination] = useState(0);
    
    //Obtener objetos para el dashboard
    useEffect(() => {
        async function loadData() {
        setDataFlag(true);
        const response = await postData('dashboard', { kq2: valFilterKq2, codeResponse: valFilterCR, entryMode: valFilterEntry, ...filterTerm});
        if (response.status === 200) {
            setData(response.data)
            setDataFlag(false)
        }
    }
    loadData();
}, [valFilterKq2, valFilterCR, valFilterEntry, filterTerm]);

    //Obtener el catalogo de las tarjetas de FIID y LN
    useEffect(() => {
        async function getCatalog(){
            const response = await getData('getCatalogs');
            if(response.status === 200){
                setCatalog(response.data);
            }
        }
        getCatalog()
    }, [])

    console.log(data);
return (
    <div className="dashboard">
        <h2><BsCardText size={20} /> Dashboard del Sector Financiero</h2>
        <div className="dashboard-content">
            <FormFilterDashboard/>
            <Cards data = {data} flag={dataFalg}/>
            {
                <button
                onClick={() => setShowDetails(!showDetails)}
                className={'btn-plusinfo'}
                >Detalles { showDetails ? <BsFillCaretUpFill size={15}/> : <BsFillCaretDownFill size={15}/>}</button> 
            }
            {
                showDetails ?
                <div className="col pagination">
                    <button 
                    className={pagination === 0 ? "col btn-pag active" : "col btn-pag"} 
                    onClick={() => setPagination(0)}><BsBank2 size={20}/> <BsArrowLeftRight size={15}/> <FaStoreAlt size={20}/>
                    <br/>FIID Comercios</button>

                    <button 
                    className={pagination === 1 ? "col btn-pag active" : "col btn-pag"} 
                    onClick={() => setPagination(1)}><BsBank2 size={20}/> <BsArrowLeftRight size={15}/> <MdPointOfSale size={20}/>
                    <br/>FIID Terminales</button>

                    <button 
                    className={pagination === 2 ? "col btn-pag active" : "col btn-pag"} 
                    onClick={() => setPagination(2)}><BsBank2 size={20}/> <BsArrowLeftRight size={15}/> <BsFillCreditCard2BackFill size={20}/>
                    <br/>FIID Tarjetas</button>

                    <button 
                    className={pagination === 3 ? "col btn-pag active" : "col btn-pag"}   
                    onClick={() => setPagination(3)}><BiChip size={20}/> <BsArrowLeftRight size={15}/> <FaStoreAlt size={20}/>
                    <br/>LN Comercios</button>

                    <button 
                    className={pagination === 4 ? "col btn-pag active" : "col btn-pag"}
                    onClick={() => setPagination(4)}><BiChip size={20}/> <BsArrowLeftRight size={15}/> <MdPointOfSale size={20}/>
                    <br/>LN Terminales</button>
                    <button 
                    className={pagination === 5 ? "col btn-pag active" : "col btn-pag"} 
                    onClick={() => setPagination(5)}><BiChip size={20}/> <BsArrowLeftRight size={15}/> <BsFillCreditCard2BackFill size={20}/>
                    <br />LN Tarjetas</button>
                </div>
                :<></>
            }
            {
                pagination === 0 && showDetails ? <CardsFiidComer data={data} catalog={catalog}/> 
                :pagination === 1 && showDetails ? <CardsFiidTerm data={data} catalog={catalog}/> 
                :pagination === 2 && showDetails ? <CardsFiidTarj data={data} catalog={catalog}/> 
                :pagination === 3 && showDetails ? <CardsLnComer data={data} catalog={catalog}/>
                :pagination === 4 && showDetails ? <CardsLnTerm data={data} catalog={catalog}/> 
                :pagination === 5 && showDetails ? <CardsLnTarj data={data} catalog={catalog}/> : <></>
            }
            <h2><BsPercent /> de Aprobación General</h2>
            <DonutGraph data = {data}/>
        </div>
    </div>
)
}