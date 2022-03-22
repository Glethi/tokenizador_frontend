import { Cards } from "../../components/ui/Cards";
import { DonutGraph } from "../../components/ui/DonutGraph";
import { BsCardText, BsPercent } from "react-icons/bs";

export const DashboardScreen = () => {
    return (
        <div className="dashboard">
            <h2><BsCardText size={20}/> Dashboard del Sector Financiero</h2>
            <div className="dashboard-content">
                <Cards />
                <h2><BsPercent/> de Aprobación General</h2>
                <DonutGraph />
            </div>
        </div>  
    )
}
 
