import { useContext, useEffect } from 'react';
import { FilterContext } from '../../services/FilterContext';
import { getData } from '../../services/dashService';
import { BsBarChart, BsFillFilterCircleFill } from 'react-icons/bs';
import { TableDataB3 } from '../../components/ui/tokenb3/TableDataB3';
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";
import { FormFilterDataB3 } from '../../components/ui/tokenb3/FormFilterDataB3';

export const TokenB3Screen = () => {

    const { setDat, setFlag } = useContext(FilterContext);
    useEffect(() => {
        setDat([{}]);
        async function loadData(){
            const response = await getData('tokenB3')
            if(response.status === 200){
                setDat(response.data)
            }
        }
        loadData();
    }, []);

    return (
            <div className="token-b3">
            <h2><BsBarChart size={20} /> Análisis por Token B3</h2>
            <div className='token-b3-content'>
                <TableDataB3 />
                <h2><BsFillFilterCircleFill size={20}/>  Filtros Token B3</h2>
                <FormFilterDataB3 />
                <FilterTableData />
            </div>
        </div>
    ) 
}