import React, { useEffect, useContext, useState } from "react";
import { postData, getData } from "../../services/dashService";
import { FilterContext } from "../../services/FilterContext";
import { Cards } from "../../components/ui/dashboard/Cards";
import { DonutGraph } from "../../components/ui/dashboard/DonutGraph";
import { BsCardText, BsPercent, BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { FormFilterDashboard } from "../../components/ui/dashboard/FormFilterDashboard";
import { CardsFiid } from "../../components/ui/dashboard/cardsFiid_Ln/CardsFiid";

export const DashboardScreen = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, filterTerm } = useContext(FilterContext);
    const [data, setData] = useState([{}]);
    const [showDetails, setShowDetails] = useState(false);
    const [catalog, setCatalog] = useState([{}]);
    
    //Obtener objetos para el dashboard
    useEffect(() => {
        async function loadData() {
        const response = await postData('dashboard', { kq2: valFilterKq2, codeResponse: valFilterCR, entryMode: valFilterEntry, ...filterTerm});
        if (response.status === 200) {
            setData(response.data)
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

return (
    <div className="dashboard">
        <h2><BsCardText size={20} /> Dashboard del Sector Financiero</h2>
        <div className="dashboard-content">
            <FormFilterDashboard/>
            <Cards data = {data}/>
            {
                <button
                onClick={() => setShowDetails(!showDetails)}
                className={'btn-plusinfo'}
                >Detalles { showDetails ? <BsFillCaretUpFill size={15}/> : <BsFillCaretDownFill size={15}/>}</button> 
            }
            {
                showDetails ?
                <CardsFiid data={data} catalog={catalog}/>
                :<></>
            }
            <h2><BsPercent /> de Aprobación General</h2>
            <DonutGraph data = {data}/>
        </div>
    </div>
)
}