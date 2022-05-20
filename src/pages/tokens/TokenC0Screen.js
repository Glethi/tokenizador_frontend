import { BsBarChart, BsFillFilterCircleFill } from 'react-icons/bs';
import { FormFilterDataC0 } from "../../components/ui/tokenc0/FormFilterDataC0";
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";
import { TableDataC0 } from "../../components/ui/tokenc0/TableDataC0";

export const TokenC0Screen = () => {

    return (
        <div className='token-c0'> 
            <h2><BsBarChart size={20} /> Análisis por Token C0</h2>
            <div className="token-c0">
                <FormFilterDataC0 /> 
                <TableDataC0 />
                <h2><BsFillFilterCircleFill size={20} /> Filtros Token C0</h2>
                <FilterTableData />
            </div>
        </div>
    )
}