import { useContext, useEffect } from "react";
import { FilterContext } from "../../services/FilterContext";
import { getData, postData } from "../../services/dashService";
import { BsBarChart, BsPercent, BsGrid3X3GapFill } from "react-icons/bs";
import { BarGraphCodeResp } from "../../components/ui/codeResponse/BarGraphCodeResp";
import { DonutGraphCodeResp } from "../../components/ui/codeResponse/DonutGraphCodeResp";
import { FilterDataCodeResp } from "../../components/ui/codeResponse/FilterDataCodeResp";
import { TableDataCodeResp } from "../../components/ui/codeResponse/TableDataCodeResp";

export const CodeResponseScreen = () => {

    const { valFilterCR, setData } = useContext(FilterContext);

    useEffect(() => {
    async function loadData(){
        setData([{}])
        if(valFilterCR === 'allData'){
            const response = await getData('codeResponse');
            if(response.status === 200){
                setData(response.data);
            }
        }
        else{
            const responseFilter = await postData('codeResponseFilter', { codeResponse: valFilterCR });
            if(responseFilter.status === 200){
                setData(responseFilter.data);
            }
        }
    }
    loadData();
    }, [valFilterCR])

    return (
        <div className="codigo-respuesta">
            <h2><BsBarChart size={20}/> Análisis por Código de Respuesta</h2>
            <div className="codigo-respuesta-content">
                <FilterDataCodeResp />
                <BarGraphCodeResp />
                <h2><BsPercent size={20}/> de Código Respuesta </h2>
                <DonutGraphCodeResp />
                <h2><BsGrid3X3GapFill size={20}/> Tabla Código de Respuesta</h2>
                <TableDataCodeResp />
            </div>
        </div> 
    )
}