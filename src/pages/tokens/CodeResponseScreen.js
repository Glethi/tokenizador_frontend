import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../services/FilterContext";
import { getData, postData } from "../../services/dashService";
import { BsBarChart, BsPercent, BsGrid3X3GapFill } from "react-icons/bs";
import { BarGraphCodeResp } from "../../components/ui/codeResponse/BarGraphCodeResp";
import { DonutGraphCodeResp } from "../../components/ui/codeResponse/DonutGraphCodeResp";
import { FilterDataCodeResp } from "../../components/ui/codeResponse/FilterDataCodeResp";
import { TableDataCodeResp } from "../../components/ui/codeResponse/TableDataCodeResp";

export const CodeResponseScreen = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, filterTerm } = useContext(FilterContext);
    const [data, setData] = useState([{}]);

    useEffect(() => {
    async function loadData(){
        setData([{}])
        const response = await postData('codeResponseFilter', { Kq2: valFilterKq2, codeResponse: valFilterCR, entryMode: valFilterEntry, ...filterTerm });
        if(response.status === 200){
            setData(response.data);
        }
    }
    loadData();
    }, [valFilterEntry, valFilterCR, valFilterKq2, filterTerm])

    return (
        <div className="codigo-respuesta">
            <h2><BsBarChart size={20}/> Análisis por Código de Respuesta</h2>
            <div className="codigo-respuesta-content">
                <FilterDataCodeResp />
                <BarGraphCodeResp data={data}/>
                <h2><BsPercent size={20}/> de Código Respuesta </h2>
                <DonutGraphCodeResp data = {data}/>
                <h2><BsGrid3X3GapFill size={20}/> Tabla Código de Respuesta</h2>
                <TableDataCodeResp data = {data}/>
            </div>
        </div> 
    )
}