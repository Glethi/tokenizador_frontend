import { useContext, useEffect, useState } from "react";
import { postData } from "../../services/dashService";
import { BsBarChart, BsPercent, BsGrid3X3GapFill } from "react-icons/bs";
import { BarGraph } from "../../components/ui/k2q/BarGraph";
import { DonutGraphK2q } from "../../components/ui/k2q/DonutGraph";
import { FilterData } from "../../components/ui/k2q/FilterData";
import { TableData } from "../../components/ui/k2q/TableData";
import { FilterContext } from "../../services/FilterContext";

export const Kq2Screen = () => {

    const { valFilterKq2, valFilterCR, valFilterEntry, filterTerm } = useContext(FilterContext);
    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
        setData([{}]); 
        const response = await postData('kq2Filter', { kq2:valFilterKq2, codeResponse: valFilterCR, entryMode: valFilterEntry, ...filterTerm});
        if(response.status === 200){
            setData(response.data);
        }
    }
    loadData();
    }, [valFilterKq2, valFilterCR, valFilterEntry, filterTerm])

    return ( 
            <div className="medio-acceso">
                <h2><BsBarChart size={20}/> Análisis por Medio Acceso</h2>
                <div className="medio-acceso-content">
                    <FilterData />
                    <BarGraph data={data}/>
                    <h2><BsPercent size={20}/> de Medio Acceso</h2>
                    <DonutGraphK2q data={data}/>
                    <h2><BsGrid3X3GapFill size={20}/> Tabla Medio Acceso</h2>
                    <TableData data={data}/>
                </div>
            </div>
    )    
}
