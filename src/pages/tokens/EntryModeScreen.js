import * as Icons from "react-icons/bs";
import { BarGraphEntryMode } from "../../components/ui/entryMode/BarGraphEntryMode";
import { DonutGraphEntryMode } from "../../components/ui/entryMode/DonutGraphEntryMode";
import { TableDataEntryMode } from "../../components/ui/entryMode/TableDataEntryMode";

export const EntryModeScreen = () => {
    return ( 
        <div className="entry-mode">
            <h2><Icons.BsBarChart size={20}/> Análisis por Entry Mode</h2>
            <div className="entry-mode-content">
                <BarGraphEntryMode />
                <h2><Icons.BsPercent size={20}/> de Entry Mode</h2>
                <DonutGraphEntryMode />
                <h2><Icons.BsFillGrid3X3GapFill size={20}/> Tabla de Entry Mode</h2>
                <TableDataEntryMode />
            </div>
        </div> 
     )
}