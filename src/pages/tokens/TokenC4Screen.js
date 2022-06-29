import React, { useContext, useState, useEffect } from 'react';
import { FilterContext } from '../../services/FilterContext';
import { BsBarChart, BsTable, BsCreditCard, BsFillBarChartFill } from 'react-icons/bs';
import { FormFilterDataC4 } from "../../components/ui/tokenc4/FormFilterDataC4";
import { TableDataC4 } from "../../components/ui/tokenc4/TableDataC4";
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";
import { CardsToken } from '../../components/ui/CardsToken';
import { postData } from '../../services/dashService';
import Swal from 'sweetalert2';

export const TokenC4Screen = () => {

    const { filterC4 } = useContext(FilterContext);
    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
            setData([{}]);
            const response = await postData('tokenC4Filter/main', filterC4)
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
    }, [filterC4])

    return (
        <div className="token-c4">
            <h2><BsBarChart size={30} />  Análisis por Token C4</h2>
            <div className="token-c4-content">
                <FormFilterDataC4 />
                <h2><BsTable size={30} /> Token C4</h2>
                <TableDataC4 data={data}/>
                <h2><BsFillBarChartFill size={30}/> Estadísticas</h2>
                <CardsToken data={data}/>
                <h2><BsCreditCard size={30} /> Terminales</h2>
                <FilterTableData data={data}/>
            </div>
        </div>
    )
}