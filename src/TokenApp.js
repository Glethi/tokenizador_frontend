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
    //Estado para la data General en Graficos y Tablas
    const [data, setData] = useState([{}]);
    //Estado para Medio Accesso
    const [valFilterKq2, setValFilterKq2] = useState([]);
    const [optionsKq2, setOptionsKq2] = useState(null);
    //Estado para Codigo de Respuesta
    const [valFilterCR, setValFilterCR] = useState([]);
    const [optionsCR, setOptionsCR] = useState(null);
    //Estado para Entry Mode
    const [valFilterEntry, setValFilterEntry] = useState([]);
    const [optionsEntry, setOptionsEntry] = useState(null);

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
            setUser, //Datos del usuario
            loading,
            setLoading, //Estado para la pantalla de carga y cerrar sesión
            data,
            setData, //Data de los graficos, tablas y formularios de kq2, codigo respuesta, entry mode
            valFilterKq2,
            setValFilterKq2, //Valores de ID del filtro para medio de acceso
            optionsKq2, 
            setOptionsKq2, //Lista de las opciones de medio de acceso que han sido seleccionadas
            valFilterCR,
            setValFilterCR, //Valores de ID del filtro para código de respuesta
            optionsCR,
            setOptionsCR, //Lista de opciones de código de respuesta
            valFilterEntry,
            setValFilterEntry, //Valores de ID del filtro para entry mode
            optionsEntry,
            setOptionsEntry, //Lista de opciones de entry mode
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