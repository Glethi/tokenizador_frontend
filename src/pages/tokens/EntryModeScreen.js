import { useEffect, useContext, useState } from "react";
import { getData, postData } from "../../services/dashService";
import { FilterContext } from "../../services/FilterContext";
import { BsBarChart, BsPercent, BsFillGrid3X3GapFill } from "react-icons/bs";
import { BarGraphEntryMode } from "../../components/ui/entryMode/BarGraphEntryMode";
import { DonutGraphEntryMode } from "../../components/ui/entryMode/DonutGraphEntryMode";
import { FilterDataEntryMode } from "../../components/ui/entryMode/FilterDataEntryMode";
import { TableDataEntryMode } from "../../components/ui/entryMode/TableDataEntryMode";

export const EntryModeScreen = () => { 

    const { valFilterEntry, valFilterKq2, valFilterCR, filterTerm } = useContext(FilterContext);
    const [data, setData] = useState([{}]);

    useEffect(() => {
        async function loadData(){
            setData([{}])
            const responseFilter = await postData('entryModeFilter', { kq2: valFilterKq2, codeResponse: valFilterCR, entryMode: valFilterEntry, ...filterTerm })
            if(responseFilter.status === 200){
                setData(responseFilter.data);
            }
        }
        loadData();
    }, [valFilterEntry, valFilterKq2, valFilterCR, filterTerm])

    return ( 
        <div className="entry-mode">
            <h2><BsBarChart size={20}/> Análisis por Entry Mode</h2>
            <div className="entry-mode-content">
                <FilterDataEntryMode />
                <BarGraphEntryMode data={data}/>
                <h2><BsPercent size={20}/> de Entry Mode</h2>
                <DonutGraphEntryMode data={data}/>
                <h2><BsFillGrid3X3GapFill size={20}/> Tabla de Entry Mode</h2>
                <TableDataEntryMode data={data}/>
            </div>
        </div> 
    )
}