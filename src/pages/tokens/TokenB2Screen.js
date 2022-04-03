import { useContext, useEffect } from "react";
import { FilterContext } from "../../services/FilterContext";
import { getData } from "../../services/dashService";
import { BsBarChart, BsFillFilterCircleFill } from "react-icons/bs";
import { DataTableB2 } from "../../components/ui/tokenb2/DataTableB2";
import { FormFilterDataB2 } from "../../components/ui/tokenb2/FormFilterDataB2";
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";


export const TokenB2Screen = () => {

    const { setDat } = useContext(FilterContext);
    useEffect(() => {
        setDat([{}]);
        async function loadData(){
            const response = await getData('tokenB2')
            if(response.status === 200){
                setDat(response.data);
            }
        }
        loadData();
    }, [])

    return (
        <div className="token-b2">
            <h2><BsBarChart size={20} /> Análisis por Token B2</h2>
            <div className="token-b2">
                <DataTableB2 />
                <h2><BsFillFilterCircleFill size={20} /> Filtros TokenB2</h2>
                <FormFilterDataB2 />
                <FilterTableData />
            </div>
        </div>
    )
}