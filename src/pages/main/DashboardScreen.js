import { Cards } from "../../components/ui/Cards";
import { DonutGraph } from "../../components/ui/DonutGraph";
import * as Icons from "react-icons/bs";

export const DashboardScreen = () => {
    return (
        <div className="dashboard">
            <h2><Icons.BsCardText size={20}/> Dashboard del Sector Financiero</h2>
            <div className="dashboard-content">
                <Cards />
                <h2><Icons.BsPercent/> de Aprobación General</h2>
                <DonutGraph />
            </div>
        </div>  
    )
}
 
