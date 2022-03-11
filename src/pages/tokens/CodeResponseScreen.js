import * as Icons from "react-icons/bs";
import { BarGraphCodeResp } from "../../components/ui/codeResponse/BarGraphCodeResp";
import { DonutGraphCodeResp } from "../../components/ui/codeResponse/DonutGraphCodeResp";
import { TableDataCodeResp } from "../../components/ui/codeResponse/TableDataCodeResp";

export const CodeResponseScreen = () => {
    return (
        <div className="codigo-respuesta">
            <h2><Icons.BsBarChart size={20}/> Análisis por Código de Respuesta</h2>
            <div className="codigo-respuesta-content">
                <BarGraphCodeResp />
                <h2><Icons.BsPercent size={20}/> de Código Respuesta </h2>
                <DonutGraphCodeResp />
                <h2><Icons.BsGrid3X3GapFill size={20}/> Tabla Código de Respuesta</h2>
                <TableDataCodeResp />
            </div>
        </div> 
    )
}