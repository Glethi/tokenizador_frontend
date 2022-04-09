import { useContext, useEffect } from "react";
import { getData, postData } from "../../services/dashService";
import { BsBarChart, BsPercent, BsGrid3X3GapFill } from "react-icons/bs";
import { BarGraph } from "../../components/ui/k2q/BarGraph";
import { DonutGraphK2q } from "../../components/ui/k2q/DonutGraph";
import { FilterData } from "../../components/ui/k2q/FilterData";
import { TableData } from "../../components/ui/k2q/TableData";
import { FilterContext } from "../../services/FilterContext";


export const Kq2Screen = () => {

    const { valFilterKq2, setData} = useContext(FilterContext);

    useEffect(() => {
    async function loadData(){
        setData([{}])
        if(valFilterKq2 == 'allData'){
            const response = await getData('kq2');
            if(response.status === 200){
                setData(response.data);
            }
        }
        else{
            const responseFilter = await postData('kq2Filter', { kq2: valFilterKq2 });
            if(responseFilter.status === 200){
                setData(responseFilter.data);
            }
        }
    }
    loadData();
    }, [valFilterKq2])

    return ( 
            <div className="medio-acceso">
                <h2><BsBarChart size={20}/> Análisis por Medio Acceso</h2>
                <div className="medio-acceso-content">
                    <FilterData />
                    <BarGraph />
                    <h2><BsPercent size={20}/> de Medio Acceso</h2>
                    <DonutGraphK2q />
                    <h2><BsGrid3X3GapFill size={20}/> Tabla Medio Acceso</h2>
                    <TableData />
                </div>
            </div>
    )    
}
