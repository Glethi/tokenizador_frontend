import * as Icons from 'react-icons/bs';
import { TableDataB3 } from '../../components/ui/tokenb3/TableDataB3';
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";

export const TokenB3Screen = () => {
    return ( 
        <div className="token-b3">
            <h2><Icons.BsBarChart size={20} /> Análisis por Token B3</h2>
            <div className='token-b3-content'>
                <TableDataB3 />
                <h2><Icons.BsFillFilterCircleFill size={20}/>  Filtros Token B3</h2>
                <FilterTableData />
            </div>
        </div>
    ) 
}