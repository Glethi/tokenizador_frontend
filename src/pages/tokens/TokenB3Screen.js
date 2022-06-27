import React, { useState, useEffect, useContext } from 'react';
import { postData } from '../../services/dashService';
import { FilterContext } from '../../services/FilterContext';
import { BsBarChart, BsFillBarChartFill, BsTable, BsCreditCard } from 'react-icons/bs';
import { TableDataB3 } from '../../components/ui/tokenb3/TableDataB3';
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";
import { FormFilterDataB3 } from '../../components/ui/tokenb3/FormFilterDataB3';
import { CardsToken } from '../../components/ui/CardsToken';
import Swal from 'sweetalert2';


export const TokenB3Screen = () => {

    const { filterB3 } = useContext(FilterContext);
    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
            const response = await postData('tokenB3Filter/main', filterB3);
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
    }, [filterB3])

    return (
            <div className="token-b3">
            <h2><BsBarChart size={20} /> Análisis por Token B3</h2>
            <div className='token-b3-content'>
                <FormFilterDataB3 />
                <h2><BsTable size={30}/> Token B3</h2>
                <TableDataB3 data={data}/>
                <h2><BsFillBarChartFill size={30}/> Estadísticas</h2>
                <CardsToken data={data}/>
                <h2><BsCreditCard size={30}/> Terminales</h2>
                <FilterTableData data={data}/>
            </div>
        </div>
    ) 
}