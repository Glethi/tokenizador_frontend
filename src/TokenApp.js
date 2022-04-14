import { AppRouter } from "./routers/AppRouter"
import { useState } from "react";
import { FilterContext } from "./services/FilterContext";

export const TokenApp = () => {
    //Estado para el usuario
    const [user, setUser] = useState({
        id: '',
        username: '',
        name: '',
        fisrtname: '',
        type: '',
        logged: false
    });
    //Estado para loading page
    const [loading, setLoading] = useState({
        data: true,
        sesion: false,
    });
    //Estados para dashboard
    const [valEndpoint, setValEndpoint] = useState('dashboard');
    const [options, setOptions] = useState('');
    //Estado para la data General en Graficos y Tablas
    const [data, setData] = useState([{}]);
    //Estado para Medio Accesso
    const [valFilterKq2, setValFilterKq2] = useState('allData');
    //Estado para Codigo de Respuesta
    const [valFilterCR, setValFilterCR] = useState('allData');
    //Estado para Entry Mode
    const [valFilterEntry, setValFilterEntry] = useState('allData');

    //TOKENS
    //Estado para tabla resultante en el filtro de todos los tokens
    const [flag, setFlag] = useState('tokenC4DataTable');
    //Estado para tablas en token's
    const [dat, setDat] = useState([{}]);
    const [datFilter, setDatFilter] = useState([{}]);
    const [filter, setFilter] = useState({});

    return (
        <FilterContext.Provider value={{
            user,
            setUser, //usuario
            loading,
            setLoading,
            valEndpoint,
            setValEndpoint, //Dashboard
            options,
            setOptions, //Filtro dashboard
            data,
            setData, //Data de los graficos, tablas y formularios de kq2, codigo respuesta, entry mode
            valFilterKq2,
            setValFilterKq2, //Filtro para kq2
            valFilterCR,
            setValFilterCR, //Filtro para codigo de respuesta
            valFilterEntry,
            setValFilterEntry, //Filtro para entry mode
            flag,
            setFlag, //Bandera para los filtros de los tokens
            dat,
            setDat, //Data para tablas y formularios de cada uno de los tokens
            filter,
            setFilter,
            datFilter,
            setDatFilter
        }}>
            <AppRouter />
        </FilterContext.Provider>
    )
}