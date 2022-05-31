import { BsBarChart, BsTable, BsCreditCard, BsFillBarChartFill } from 'react-icons/bs';
import { FormFilterDataC4 } from "../../components/ui/tokenc4/FormFilterDataC4";
import { TableDataC4 } from "../../components/ui/tokenc4/TableDataC4";
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";
import { CardsToken } from '../../components/ui/CardsToken';

export const TokenC4Screen = () => {

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