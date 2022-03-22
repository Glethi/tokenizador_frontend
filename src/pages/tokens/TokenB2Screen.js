import { BsBarChart, BsFillFilterCircleFill }from "react-icons/bs";
import { DataTableB2 } from "../../components/ui/tokenb2/DataTableB2";
import { FormFilterDataB2 } from "../../components/ui/tokenb2/FormFilterDataB2";
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";
import { DataContext } from "../../services/DataContext";
import { useState } from "react";

export const TokenB2Screen = () => {

    const [data, setDat] = useState([{}]);

    return (
        <DataContext.Provider value={{data, setDat}}>
            <div className="token-b2">
                <h2><BsBarChart size={20}/> Análisis por Token B2</h2>
                <div className="token-b2">
                    <DataTableB2 />
                    <h2><BsFillFilterCircleFill size={20}/> Filtros TokenB2</h2>
                    <FormFilterDataB2 />
                    <FilterTableData />
                </div>
            </div>
        </DataContext.Provider>        
            
    )
}