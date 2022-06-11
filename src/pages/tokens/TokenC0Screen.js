import React, { useContext, useEffect } from 'react';
import { BsBarChart, BsFillBarChartFill, BsTable, BsCreditCard } from 'react-icons/bs';
import { FormFilterDataC0 } from "../../components/ui/tokenc0/FormFilterDataC0";
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";
import { TableDataC0 } from "../../components/ui/tokenc0/TableDataC0";
import { CardsToken } from '../../components/ui/CardsToken';
import { postData } from '../../services/dashService';
import { FilterContext } from '../../services/FilterContext';

export const TokenC0Screen = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, setData } = useContext(FilterContext);

    useEffect(() => {
        async function loadData(){
            const response = await postData('terminalFilter', {Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry});
            if(response.status === 200){
                setData(response.data)
            }
        }
        loadData()
    }, [valFilterKq2, valFilterCR, valFilterEntry])
    

    return (
        <div className='token-c0'> 
            <h2><BsBarChart size={30} /> Análisis por Token C0</h2>
            <div className="token-c0">
                <FormFilterDataC0 /> 
                <h2><BsTable size={30}/> Token C0</h2>
                <TableDataC0 />
                <h2><BsFillBarChartFill size={30}/> Estadísticas</h2>
                <CardsToken />
                <h2><BsCreditCard size={30} /> Terminales</h2>
                <FilterTableData />
            </div>
        </div>
    )
}