import { useContext, useEffect } from "react";
import { FilterContext } from "../../services/FilterContext";
import { getData, postData } from "../../services/dashService";
import { BsBarChart } from 'react-icons/bs';
import { FormFilterDataC4 } from "../../components/ui/tokenc4/FormFilterDataC4";
import { TableDataC4 } from "../../components/ui/tokenc4/TableDataC4";
import { FilterTableData } from "../../components/ui/filterTable/FilterTableData";

export const TokenC4Screen = () => {

    const { setDat } = useContext(FilterContext);
    useEffect(() => {
        async function loadData() {
            setDat([{}]);
            const response = await getData('tokenC4');
            console.log('primer if');
            if (response.status === 200) {
                setDat(response.data);
            }
        }
        loadData();
    }, []);

    return (
        <div className="token-c4">
            <h2><BsBarChart size={20} />  Análisis por Token C4</h2>
            <div className="token-c4-content">
                <h4>Filtrar por:</h4>
                <FormFilterDataC4 />
                <TableDataC4 />
                <FilterTableData />
            </div>
        </div>
    )
}