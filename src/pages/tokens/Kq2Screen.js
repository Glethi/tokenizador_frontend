import * as Icons from "react-icons/bs";
import { BarGraph } from "../../components/ui/k2q/BarGraph";
import { PieGraphK2q } from "../../components/ui/k2q/DonutGraph";
import { TableData } from "../../components/ui/k2q/TableData";


export const Kq2Screen = () => {
    return ( 
        <div className="medio-acceso">
            <h2><Icons.BsBarChart size={20}/> Análisis por Medio Acceso</h2>
            <div className="medio-acceso-content">
                <BarGraph />
                <h2><Icons.BsPercent/> Medio Acceso</h2>
                <PieGraphK2q />
                <h2><Icons.BsGrid3X3GapFill size={20}/> Tabla Medio Acceso</h2>
                <TableData />
            </div>
        </div>
     )    
}
 