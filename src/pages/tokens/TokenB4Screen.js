import { BsBarChart, BsFillBarChartFill, BsTable, BsCreditCard } from 'react-icons/bs';
import { FilterTableData } from '../../components/ui/filterTable/FilterTableData';
import { FormFilterDataB4 } from '../../components/ui/tokenb4/FormFilterDataB4';
import { TableDataB4 } from '../../components/ui/tokenb4/TableDataB4';
import { CardsToken } from '../../components/ui/CardsToken';

export const TokenB4Screen = () => {

    return (
        <div className="token-b4">
            <h2><BsBarChart size={20} /> Análisis por Token B4</h2>
            <div className='token-b4-content'>
                <FormFilterDataB4 />
                <h2><BsTable size={30}/> Token B4</h2>
                <TableDataB4 />
                <h2><BsFillBarChartFill size={30}/> Estadísticas</h2>
                <CardsToken />
                <h2><BsCreditCard size={30}/> Terminales</h2>
                <FilterTableData />
            </div>
        </div>
    )
}