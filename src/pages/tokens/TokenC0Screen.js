import { useContext, useEffect } from 'react';
import { FilterContext } from '../../services/FilterContext';
import { getData } from '../../services/dashService';
import { BsBarChart, BsFillFilterCircleFill } from 'react-icons/bs';
import { FormFilterDataC0 } from "../../components/ui/tokenc0/FormFilterDataC0";
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";
import { TableDataC0 } from "../../components/ui/tokenc0/TableDataC0";

export const TokenC0Screen = () => {

    const { setDat, setFlag } = useContext(FilterContext);
    setFlag('tokenC4DataTable');
    useEffect(() => {
        setDat([{}]);
        async function loadData() {
            const response = await getData('tokenC0');
            if(response.status === 200){
                setDat(response.data);
            }
        }
        loadData();
    }, []);

    return (
        <div className='token-c0'>
            <h2><BsBarChart size={20} /> Análisis por Token C0</h2>
            <div className="token-c0">
                <TableDataC0 />
                <h2><BsFillFilterCircleFill size={20} /> Filtros Token C0</h2>
                <FormFilterDataC0 />
                <FilterTableData />
            </div>
        </div>
    )
}