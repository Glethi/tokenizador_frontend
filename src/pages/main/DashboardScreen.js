import React, { useEffect, useContext } from "react";
import { getData, postData } from "../../services/dashService";
import { FilterContext } from "../../services/FilterContext";
import { Cards } from "../../components/ui/Cards";
import { DonutGraph } from "../../components/ui/DonutGraph";
import { BsCardText, BsPercent } from "react-icons/bs";
import { FormFilterDashboard } from "../../components/ui/FormFilterDashboard";

export const DashboardScreen = () => {

    const { setData, 
            valEndpoint, 
            options, 
            valFilterKq2, 
            valFilterCR, 
            valFilterEntry,} = useContext(FilterContext);

    useEffect(() => {
        async function loadData() {
            if(valEndpoint == 'dasboard' && options == 'allData'){
                const response = await getData('dashboard');
                if(response.status == 200){
                    setData(response.data);
                }
            }else{
                var filter = new Object();
                filter.endPoint = valEndpoint
                filter.kq2 = valFilterKq2
                filter.code_Response = valFilterCR
                filter.entry_Mode = valFilterEntry
                const responseFilter = await postData('dashboardFilter', filter);
                if(responseFilter.status === 200){
                    setData(responseFilter.data)
                }
            }
        }
        loadData();
    }, [valEndpoint, options])

    return (
        <div className="dashboard">
            <h2><BsCardText size={20}/> Dashboard del Sector Financiero</h2>
            <div className="dashboard-content">
                <FormFilterDashboard />
                <Cards />
                <h2><BsPercent/> de Aprobación General</h2>
                <DonutGraph />
            </div>
        </div>  
    )
}

