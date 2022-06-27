import React, { useState, useEffect, useContext } from "react";
import { postData } from "../../services/dashService";
import { FilterContext } from "../../services/FilterContext";
import { BsBarChart, BsFillBarChartFill, BsTable, BsCreditCard} from "react-icons/bs";
import { DataTableB2 } from "../../components/ui/tokenb2/DataTableB2";
import { FormFilterDataB2 } from "../../components/ui/tokenb2/FormFilterDataB2";
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";
import { CardsToken } from "../../components/ui/CardsToken";
import Swal from "sweetalert2";


export const TokenB2Screen = () => {
    const { filterB2 } = useContext(FilterContext);
    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
            const response = await postData('tokenB2Filter/main', filterB2);
            if(response.status === 200){
                setData(response.data)
                Swal.fire({
                    icon: 'success',
                    title: 'Datos cargados correctamente',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
        loadData()
    }, [filterB2])

    return (
        <div className="token-b2">
            <h2><BsBarChart size={20} /> Análisis por Token B2</h2>
            <div className="token-b2">
                <FormFilterDataB2 />
                <h2><BsTable size={30}/> Token B2</h2>
                <DataTableB2 data={data}/>
                <h2><BsFillBarChartFill size={30}/> Estadísticas</h2>
                <CardsToken data={data}/>
                <h2><BsCreditCard size={30}/> Terminales</h2>
                <FilterTableData data={data}/>
            </div>
        </div>
    )
}