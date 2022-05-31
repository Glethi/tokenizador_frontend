import { BsBarChart, BsFillBarChartFill, BsTable, BsCreditCard } from 'react-icons/bs';
import { FormFilterDataC0 } from "../../components/ui/tokenc0/FormFilterDataC0";
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";
import { TableDataC0 } from "../../components/ui/tokenc0/TableDataC0";
import { CardsToken } from '../../components/ui/CardsToken';

export const TokenC0Screen = () => {

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