import { useContext, useEffect } from 'react';
import { getData } from '../../services/dashService';
import { BsBarChart, BsFillFilterCircleFill } from 'react-icons/bs';
import { FilterTableData } from '../../components/ui/filterTable/FilterTableData';
import { FormFilterDataB4 } from '../../components/ui/tokenb4/FormFilterDataB4';
import { TableDataB4 } from '../../components/ui/tokenb4/TableDataB4';
import { FilterContext } from '../../services/FilterContext';

export const TokenB4Screen = () => {

    const { setDat } = useContext(FilterContext);

    useEffect(() => {
        setDat([{}]);
        async function loadData() {
            const response = await getData('tokenB4')
            if (response.status === 200) {
                setDat(response.data)
            }
        }
        loadData()
    }, [])

    return (
        <div className="token-b4">
            <h2><BsBarChart size={20} /> Análisis por Token B4</h2>
            <div className='token-b4-content'>
                <TableDataB4 />
                <h2><BsFillFilterCircleFill size={20} /> Filtros Token B4</h2>
                <FormFilterDataB4 />
                <FilterTableData />
            </div>
        </div>
    )
}