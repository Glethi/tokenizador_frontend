import React, { useContext, useEffect } from 'react';
import { BsBarChart, BsTable, BsCreditCard, BsBarChartFill } from 'react-icons/bs';
import { postData } from '../../services/dashService';
import { FilterContext } from '../../services/FilterContext';
import { FormFilterDataB6 } from '../../components/ui/tokenb6/FormFilterDataB6';
import { FilterFormB6 } from '../../components/ui/tokenb6/FilterFormB6';
import { TableDataB6 } from '../../components/ui/tokenb6/TableDataB6';
import { CardsToken } from '../../components/ui/CardsToken';
import { FilterTableData } from '../../components/ui/filterTable/FilterTableData';

export const TokenB6Screen = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, setData } = useContext(FilterContext);

    useEffect(() => {
        setData([{}]);
        async function loadData(){
            const response = await postData('terminalFilter', {Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry});
            if(response.status === 200){
                setData(response.data);
            }
        }
        loadData();
    }, [valFilterKq2, valFilterCR, valFilterEntry])
    

    return (
        <div className='token-b6'>
            <h2><BsBarChart size={30}/> Análisis por Token B6</h2>
            <div>
                <FormFilterDataB6 />
                <h2><BsTable size={30}/> Token B6</h2>
                <TableDataB6 />
                <h2><BsBarChartFill size={30}/> Estadísticas</h2>
                <CardsToken />
                <h2><BsCreditCard size={30}/> Terminales</h2>
                <FilterTableData />
            </div>
        </div>
    )
}
