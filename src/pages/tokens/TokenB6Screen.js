import React,{ useState, useContext, useEffect }  from 'react';
import { postData } from '../../services/dashService';
import { FilterContext } from '../../services/FilterContext';
import { BsBarChart, BsTable, BsCreditCard, BsBarChartFill } from 'react-icons/bs';
import { FormFilterDataB6 } from '../../components/ui/tokenb6/FormFilterDataB6';
import { TableDataB6 } from '../../components/ui/tokenb6/TableDataB6';
import { CardsToken } from '../../components/ui/CardsToken';
import { FilterTableData } from '../../components/ui/filterTable/FilterTableData';
import Swal from 'sweetalert2';

export const TokenB6Screen = () => {
    const { filterB6 } = useContext(FilterContext);
    const [data, setData] = useState([{}]);
    
    useEffect(() => {
        async function loadData(){
            const response = await postData('tokenB6Filter/main', filterB6);
            if(response.status === 200){
                setData(response.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Datos cargados correctamente',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
        loadData();
    }, [filterB6]);

    return (
        <div className='token-b6'>
            <h2><BsBarChart size={30}/> Análisis por Token B6</h2>
            <div>
                <FormFilterDataB6 />
                <h2><BsTable size={30}/> Token B6</h2>
                <TableDataB6 data={data}/>
                <h2><BsBarChartFill size={30}/> Estadísticas</h2>
                <CardsToken data={data}/>
                <h2><BsCreditCard size={30}/> Terminales</h2>
                <FilterTableData data={data}/>
            </div>
        </div>
    )
}
