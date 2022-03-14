import * as Icons from "react-icons/bs";
import { FormFilterDataC4 } from "../../components/ui/tokenc4/FormFilterDataC4";
import { TableDataC4 } from "../../components/ui/tokenc4/TableDataC4";
import { FilterTableDataC4 } from "../../components/ui/tokenc4/FilterTableDataC4";
import { DataContext } from "../../services/DataContext";
import { useState } from "react";

export const TokenC4Screen = () => {

    const [data, setDat] = useState([{}]);

    return (
        <DataContext.Provider value = {{data, setDat}}>
            <div className="token-c4">
                <h2><Icons.BsBarChart size={20}/>  Análisis por Token C4</h2>
                <div className="token-c4-content">
                    <TableDataC4 />
                    <h2><Icons.BsFillFilterCircleFill size={20}/>  Filtros Token C4</h2>
                    <FormFilterDataC4 />
                    <FilterTableDataC4 />
                </div>
            </div> 
        </DataContext.Provider> 
     )
}