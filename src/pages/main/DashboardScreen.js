import { Cards } from "../../components/ui/Cards";
import { PieGraph } from "../../components/ui/PieGraph";
import * as Icons from "react-icons/bs";

export const DashboardScreen = () => {
    return (
        <div className="dashboard">
            <h2><Icons.BsBarChart size={20}/> Dashboard del Sector Financiero</h2>
            <div className="dashboard-content">
                <Cards />
                <h2><Icons.BsPercent/> de Aprobación</h2>
                <PieGraph />
            </div>
        </div>  
    )
}
 
