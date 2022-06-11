import React, { useEffect, useContext } from 'react'
import { postData } from '../../services/dashService';
import { FilterContext } from '../../services/FilterContext';
import { BsBarChart, BsTable, BsCreditCard, BsFillBarChartFill } from 'react-icons/bs';
import { FormFilterDataC4 } from "../../components/ui/tokenc4/FormFilterDataC4";
import { TableDataC4 } from "../../components/ui/tokenc4/TableDataC4";
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";
import { CardsToken } from '../../components/ui/CardsToken';

export const TokenC4Screen = () => {
    const { setData, valFilterCR, valFilterEntry, valFilterKq2 } = useContext(FilterContext);
    useEffect(() => {
        async function loadData() {
            const response = await postData('terminalFilter', { Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry })
            if (response.status === 200) {
                setData(response.data);
            }
        }
        loadData();
    }, [valFilterKq2, valFilterCR, valFilterEntry])

    return (
        <div className="token-c4">
            <h2><BsBarChart size={30} />  Análisis por Token C4</h2>
            <div className="token-c4-content">
                <FormFilterDataC4 />
                <h2><BsTable size={30} /> Token C4</h2>
                <TableDataC4 />
                <h2><BsFillBarChartFill size={30}/> Estadísticas</h2>
                <CardsToken />
                <h2><BsCreditCard size={30} /> Terminales</h2>
                <FilterTableData />
            </div>
        </div>
    )
}