import React, { useContext, useEffect } from 'react';
import { BsBarChart, BsTable, BsCreditCard, BsBarChartFill, BsFillPhoneVibrateFill } from 'react-icons/bs';
import { CardsToken } from '../../components/ui/CardsToken';
import { FilterTableData } from '../../components/ui/filterTable/FilterTableData';
import { FormFilterDataB5 } from '../../components/ui/tokenb5/FormFilterDataB5';
import { TableDataB5 } from '../../components/ui/tokenb5/TableDataB5';
import { postData } from '../../services/dashService';
import { FilterContext } from '../../services/FilterContext';

export const TokenB5Screen = () => {

    const { setData, valFilterKq2, valFilterCR, valFilterEntry } = useContext(FilterContext);

    useEffect(() => {
        async function loadData(){
            const response = await postData('terminalFilter', {Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry})
            if(response.status === 200){
                setData(response.data);
            }
        }
        loadData();
    }, [valFilterKq2, valFilterCR, valFilterEntry])
    

    return (
        <div className='token-b5'>
            <h2><BsBarChart size={30}/> Análisis por Token B5</h2>
            <div>
                <FormFilterDataB5 />
                <h2><BsTable size={30}/> Token B5</h2>
                <TableDataB5 />
                <h2><BsBarChartFill size={30}/> Estadísticas</h2>
                <CardsToken />
                <h2><BsCreditCard size={30}/> Terminales</h2>
                <FilterTableData />
            </div>
        </div>
    )
}
