import { BsBarChart, BsTable, BsCreditCard } from 'react-icons/bs';
import { FormFilterDataC4 } from "../../components/ui/tokenc4/FormFilterDataC4";
import { TableDataC4 } from "../../components/ui/tokenc4/TableDataC4";
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";

export const TokenC4Screen = () => {

    return (
        <div className="token-c4">
            <h2><BsBarChart size={30} />  Análisis por Token C4</h2>
            <div className="token-c4-content">
                <h4>Filtrar por:</h4>
                <FormFilterDataC4 />
                <h2><BsTable size={30} /> Token C4</h2>
                <TableDataC4 />
                <h2><BsCreditCard size={30} /> Terminales</h2>
                <FilterTableData />
            </div>
        </div>
    )
}