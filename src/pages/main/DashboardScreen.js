import React, { useEffect, useContext, useState } from "react";
import { postData } from "../../services/dashService";
import { FilterContext } from "../../services/FilterContext";
import { Cards } from "../../components/ui/dashboard/Cards";
import { DonutGraph } from "../../components/ui/dashboard/DonutGraph";
import { BsCardText, BsPercent } from "react-icons/bs";
import { FormFilterDashboard } from "../../components/ui/dashboard/FormFilterDashboard";

export const DashboardScreen = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, setData } = useContext(FilterContext);

    useEffect(() => {
    async function loadData() {
        const response = await postData('dashboard', {kq2: valFilterKq2, codeResponse: valFilterCR, entryMode: valFilterEntry});
        if (response.status === 200) {
            setData(response.data)
        }
    }
    loadData();
}, [valFilterKq2, valFilterCR, valFilterEntry])

return (
    <div className="dashboard">
        <h2><BsCardText size={20} /> Dashboard del Sector Financiero</h2>
        <div className="dashboard-content">
            <FormFilterDashboard />
            <Cards />
            <h2><BsPercent /> de Aprobación General</h2>
            <DonutGraph />
        </div>
    </div>
)
}