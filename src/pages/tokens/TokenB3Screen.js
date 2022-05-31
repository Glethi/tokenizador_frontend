import { BsBarChart, BsFillBarChartFill, BsTable, BsCreditCard } from 'react-icons/bs';
import { TableDataB3 } from '../../components/ui/tokenb3/TableDataB3';
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";
import { FormFilterDataB3 } from '../../components/ui/tokenb3/FormFilterDataB3';
import { CardsToken } from '../../components/ui/CardsToken';

export const TokenB3Screen = () => {

    return (
            <div className="token-b3">
            <h2><BsBarChart size={20} /> Análisis por Token B3</h2>
            <div className='token-b3-content'>
                <FormFilterDataB3 />
                <h2><BsTable size={30}/> Token B3</h2>
                <TableDataB3 />
                <h2><BsFillBarChartFill size={30}/> Estadísticas</h2>
                <CardsToken />
                <h2><BsCreditCard size={30}/> Terminales</h2>
                <FilterTableData />
            </div>
        </div>
    ) 
}