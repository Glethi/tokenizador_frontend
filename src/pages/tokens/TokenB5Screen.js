import React, { useState, useEffect, useContext } from 'react';
import { postData } from '../../services/dashService';
import { FilterContext } from '../../services/FilterContext';
import { BsBarChart, BsTable, BsCreditCard, BsBarChartFill } from 'react-icons/bs';
import { CardsToken } from '../../components/ui/CardsToken';
import { FilterTableData } from '../../components/ui/filterTable/FilterTableData';
import { FormFilterDataB5 } from '../../components/ui/tokenb5/FormFilterDataB5';
import { TableDataB5 } from '../../components/ui/tokenb5/TableDataB5';
import Swal from 'sweetalert2';

export const TokenB5Screen = () => {
    const { filterB5 } = useContext(FilterContext);
    const [data, setData] = useState([{}]);
    useEffect(() => {
        async function loadData(){
            const response = await postData('tokenB5Filter/main', filterB5);
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
    }, [filterB5])
    return (
        <div className='token-b5'>
            <h2><BsBarChart size={30}/> Análisis por Token B5</h2>
            <div>
            <FormFilterDataB5 />
                <h2><BsTable size={30}/> Token B5</h2>
                <TableDataB5 data={data}/>
                <h2><BsBarChartFill size={30}/> Estadísticas</h2>
                <CardsToken data={data}/>
                <h2><BsCreditCard size={30}/> Terminales</h2>
                <FilterTableData data={data}/>
            </div>
        </div>
    )
}
