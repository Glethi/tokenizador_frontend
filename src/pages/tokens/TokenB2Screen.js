import { BsBarChart, BsFillBarChartFill, BsTable, BsCreditCard} from "react-icons/bs";
import { DataTableB2 } from "../../components/ui/tokenb2/DataTableB2";
import { FormFilterDataB2 } from "../../components/ui/tokenb2/FormFilterDataB2";
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";
import { CardsToken } from "../../components/ui/CardsToken";

export const TokenB2Screen = () => {

    return (
        <div className="token-b2">
            <h2><BsBarChart size={20} /> Análisis por Token B2</h2>
            <div className="token-b2">
                <FormFilterDataB2 />
                <h2><BsTable size={30}/> Token B2</h2>
                <DataTableB2 />
                <h2><BsFillBarChartFill size={30}/> Estadísticas</h2>
                <CardsToken />
                <h2><BsCreditCard size={30}/> Terminales</h2>
                <FilterTableData />
            </div>
        </div>
    )
}