import { useEffect, useContext } from "react";
import { getData, postData } from "../../services/dashService";
import { FilterContext } from "../../services/FilterContext";
import { BsBarChart, BsPercent, BsFillGrid3X3GapFill } from "react-icons/bs";
import { BarGraphEntryMode } from "../../components/ui/entryMode/BarGraphEntryMode";
import { DonutGraphEntryMode } from "../../components/ui/entryMode/DonutGraphEntryMode";
import { FilterDataEntryMode } from "../../components/ui/entryMode/FilterDataEntryMode";
import { TableDataEntryMode } from "../../components/ui/entryMode/TableDataEntryMode";

export const EntryModeScreen = () => {

    const { valFilterEntry, setData} = useContext(FilterContext);

    useEffect(() => {
        async function loadData(){
            setData([{}])
            if(valFilterEntry === 'allData'){
                const response = await getData('entryMode');
                if(response.status === 200){
                    setData(response.data);
                }
            }
            else{
                const responseFilter = await postData('entryModeFilter', { entryMode: valFilterEntry })
                if(responseFilter.status === 200){
                    setData(responseFilter.data);
                }
            }
        }
        loadData();
    }, [valFilterEntry])

    return ( 
        <div className="entry-mode">
            <h2><BsBarChart size={20}/> Análisis por Entry Mode</h2>
            <div className="entry-mode-content">
                <FilterDataEntryMode />
                <BarGraphEntryMode />
                <h2><BsPercent size={20}/> de Entry Mode</h2>
                <DonutGraphEntryMode />
                <h2><BsFillGrid3X3GapFill size={20}/> Tabla de Entry Mode</h2>
                <TableDataEntryMode />
            </div>
        </div> 
     )
}