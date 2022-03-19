import { useState } from 'react';
import * as Icons from 'react-icons/bs';
import { FilterTableData } from '../../components/ui/filterTable/FilterTableData';
import { FormFilterDataB4 } from '../../components/ui/tokenb4/FormFilterDataB4';
import { TableDataB4 } from '../../components/ui/tokenb4/TableDataB4';
import { DataContext } from '../../services/DataContext';

export const TokenB4Screen = () => {

    const [data, setDat] = useState([{}]);

    return (
        <DataContext.Provider value={{data, setDat}}>
            <div className="token-b4">
                <h2><Icons.BsBarChart size={20} /> Análisis por Token B4</h2>
                <div className='token-b4-content'>
                    <TableDataB4 />
                    <h2><Icons.BsFillFilterCircleFill size={20} /> Filtros Token C0</h2>
                    <FormFilterDataB4 />
                    <FilterTableData />
                </div>
            </div>
        </DataContext.Provider> 
    )
}