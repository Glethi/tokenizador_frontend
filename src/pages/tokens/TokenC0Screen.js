import React, { useState, useEffect, useContext } from 'react';
import { postData } from '../../services/dashService';
import { FilterContext } from '../../services/FilterContext';
import { BsBarChart, BsFillBarChartFill, BsTable, BsCreditCard } from 'react-icons/bs';
import { FormFilterDataC0 } from "../../components/ui/tokenc0/FormFilterDataC0";
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";
import { TableDataC0 } from "../../components/ui/tokenc0/TableDataC0";
import { CardsToken } from '../../components/ui/CardsToken';
import Swal from 'sweetalert2';

export const TokenC0Screen = () => {
    const { filterC0 } = useContext(FilterContext);
    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
            const response = await postData('tokenC0Filter/main', filterC0);
            if(response.status == 200){
                setData(response.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Datos cargados correctamente',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        loadData();
    }, [filterC0]);
    return (
        <div className='token-c0'> 
            <h2><BsBarChart size={30} /> Análisis por Token C0</h2>
            <div className="token-c0">
                <FormFilterDataC0 /> 
                <h2><BsTable size={30}/> Token C0</h2>
                <TableDataC0 data={data}/>
                <h2><BsFillBarChartFill size={30}/> Estadísticas</h2>
                <CardsToken data={data}/>
                <h2><BsCreditCard size={30} /> Terminales</h2>
                <FilterTableData data={data}/>
            </div>
        </div>
    )
}