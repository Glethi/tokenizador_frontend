import * as Icons from "react-icons/bs";
import { BarGraphEntryMode } from "../../components/ui/entryMode/BarGraphEntryMode";
import { DonutGraphEntryMode } from "../../components/ui/entryMode/DonutGraphEntryMode";

export const EntryModeScreen = () => {
    return ( 
        <div className="entry-mode">
            <h2><Icons.BsBarChart size={20}/> Análisis por Entry Mode</h2>
            <div className="entry-mode-content">
                <BarGraphEntryMode />
                <h2><Icons.BsPercent size={20}/> de Entry Mode</h2>
                <DonutGraphEntryMode />
            </div>
        </div> 
     )
}