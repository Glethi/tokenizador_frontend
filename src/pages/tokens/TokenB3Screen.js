import * as Icons from 'react-icons/bs';
import { TableDataB3 } from '../../components/ui/tokenb3/TableDataB3';
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";
import { FormFilterDataB3 } from '../../components/ui/tokenb3/FormFilterDataB3';
import { DataContext } from "../../services/DataContext";
import { useState } from 'react';

export const TokenB3Screen = () => {

    const [data, setDat] = useState([{}]);

    return (
        <DataContext.Provider value={{data, setDat}}>
            <div className="token-b3">
            <h2><Icons.BsBarChart size={20} /> Análisis por Token B3</h2>
            <div className='token-b3-content'>
                <TableDataB3 />
                <h2><Icons.BsFillFilterCircleFill size={20}/>  Filtros Token B3</h2>
                <FormFilterDataB3 />
                <FilterTableData />
            </div>
        </div>
        </DataContext.Provider>
    ) 
}