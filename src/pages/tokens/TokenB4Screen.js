import React, { useState, useContext, useEffect } from 'react';
import { postData } from '../../services/dashService';
import { FilterContext } from '../../services/FilterContext';
import { BsBarChart, BsFillBarChartFill, BsTable, BsCreditCard } from 'react-icons/bs';
import { FilterTableData } from '../../components/ui/filterTable/FilterTableData';
import { FormFilterDataB4 } from '../../components/ui/tokenb4/FormFilterDataB4';
import { TableDataB4 } from '../../components/ui/tokenb4/TableDataB4';
import { CardsToken } from '../../components/ui/CardsToken';
import Swal from 'sweetalert2';

export const TokenB4Screen = () => {
    const { filterB4 } = useContext(FilterContext);
    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
            const response = await postData('tokenB4Filter/main', filterB4);
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
        loadData()
    }, [filterB4]);

    return (
        <div className="token-b4">
            <h2><BsBarChart size={20} /> Análisis por Token B4</h2>
            <div className='token-b4-content'>
                <FormFilterDataB4 />
                <h2><BsTable size={30}/> Token B4</h2>
                <TableDataB4 data={data}/>
                <h2><BsFillBarChartFill size={30}/> Estadísticas</h2>
                <CardsToken data={data}/>
                <h2><BsCreditCard size={30}/> Terminales</h2>
                <FilterTableData data={data}/>
            </div>
        </div>
    )
}