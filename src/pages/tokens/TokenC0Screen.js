import * as Icons from "react-icons/bs";
import { FormFilterDataC0 } from "../../components/ui/tokenc0/FormFilterDataC0";
import { FilterTableData} from "../../components/ui/filterTable/FilterTableData";
import { TableDataC0 } from "../../components/ui/tokenc0/TableDataC0";
import { useState } from "react";
import { DataContext } from '../../services/DataContext'; 

export const TokenC0Screen = () => {

    const [data, setDat] = useState([{}]);

    return (
        <DataContext.Provider value={{data, setDat}}>
            <div className='token-c0'>
                <h2><Icons.BsBarChart size={20}/> Análisis por Token C0</h2>
                <div className="token-c0">
                    <TableDataC0 />
                    <h2><Icons.BsFillFilterCircleFill size={20} /> Filtros Token C0</h2>
                    <FormFilterDataC0 />
                    <FilterTableData />
                </div>
            </div>
        </DataContext.Provider>
     )
}