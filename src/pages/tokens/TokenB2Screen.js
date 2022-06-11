import React, { useContext, useEffect } from "react";
import { BsBarChart, BsFillBarChartFill, BsTable, BsCreditCard} from "react-icons/bs";
import { DataTableB2 } from "../../components/ui/tokenb2/DataTableB2";
import { FormFilterDataB2 } from "../../components/ui/tokenb2/FormFilterDataB2";
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";
import { CardsToken } from "../../components/ui/CardsToken";
import { FilterContext } from "../../services/FilterContext";
import { postData } from "../../services/dashService";


export const TokenB2Screen = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, setData } = useContext(FilterContext);
    useEffect(() => {
        async function loadData(){
            const response = await postData('terminalFilter', {Kq2: valFilterKq2, Code_Response: valFilterCR, Entry_Mode: valFilterEntry})
            if(response.status === 200){
            setData(response.data)
        }
    }
        loadData()
    }, [valFilterKq2, valFilterCR, valFilterEntry])
    

    return (
        <div className="token-b2">
            <h2><BsBarChart size={20} /> Análisis por Token B2</h2>
            <div className="token-b2">
                <FormFilterDataB2 />
                <h2><BsTable size={30}/> Token B2</h2>
                <DataTableB2 />
                <h2><BsFillBarChartFill size={30}/> Estadísticas</h2>
                <CardsToken />
                <h2><BsCreditCard size={30}/> Terminales</h2>
                <FilterTableData />
            </div>
        </div>
    )
}