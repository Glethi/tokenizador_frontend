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
    //Estado para tablas en token's
    const [dat, setDat] = useState([{}]);
    //Estado para el filtro Token C4
    const [filterC4, setFilterC4] = useState({
        Kq2: 'allData',
        Code_Response: 'allData',
        Entry_Mode: 'allData',
        ID_Terminal_Attended: 'NonValue',
        ID_Terminal: 'NonValue',
        Terminal_Location: 'NonValue',
        ID_Cardholder_Presence: 'NonValue',
        ID_Card_Presence: 'NonValue',
        ID_Card_Capture: 'NonValue',
        ID_Status: 'NonValue',
        Security_Level: 'NonValue',
        Routing_Indicator: 'NonValue',
        Terminal_Activation_Cardholder: 'NonValue',
        ID_Terminal_Data_Transfer: 'NonValue',
        ID_Cardholder_Method: 'NonValue'
    });
    //Estado para el endpoint que se requiere en la
    const [endpointToken, setEndpointToken] = useState('tokenC4Filter');

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
            dat,
            setDat, //Data para tablas y formularios de cada uno de los tokens
            filterC4,
            setFilterC4,
            endpointToken,
            setEndpointToken
        }}>
            <AppRouter />
        </FilterContext.Provider>
    )
}