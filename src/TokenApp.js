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
    const [dataTable, setDataTable] = useState([{}]);
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
    //Estado para el filtro Token C4 (petición a API)
    const [filterC4, setFilterC4] = useState({
        Kq2: [],
        Code_Response: [],
        Entry_Mode: [],
        ID_Terminal_Attended: [],
        ID_Terminal: [],
        Terminal_Location: [],
        ID_Cardholder_Presence: [],
        ID_Card_Presence: [],
        ID_Card_Capture: [],
        ID_Status: [],
        Security_Level: [],
        Routing_Indicator: [],
        Terminal_Activation_Cardholder: [],
        ID_Terminal_Data_Transfer: [],
        ID_Cardholder_Method: []
    });
    //Estado para el formulario del token c4
    const [c4FormValue, setC4FormValue] = useState({
        ID_Terminal_Attended: [],
        ID_Terminal: [],
        Terminal_Location: [],
        ID_Cardholder_Presence: [],
        ID_Card_Presence: [],
        ID_Card_Capture: [],
        ID_Status: [],
        Security_Level: [],
        Routing_Indicator: [],
        Terminal_Activation_Cardholder: [],
        ID_Terminal_Data_Transfer: [],
        ID_Cardholder_Method: []
    });

    //Estdo para el filtro Token C0 (petición API)
    const [filterC0, setFilterC0] = useState({
        Kq2: [],
        Code_Response: [],
        Entry_Mode: [],
        ID_Ecommerce: [],
        Card_Type: [],
        ID_CVV2: [],
        ID_Information: []
    });
    const [c0FormValue, setC0FormValue] = useState({
        ID_Ecommerce: [],
        Card_Type: [],
        ID_CVV2: [],
        ID_Information: []
    });

    return (
        <FilterContext.Provider value={{
            user,
            setUser, //Datos del usuario
            loading,
            setLoading, //Estado para la pantalla de carga y cerrar sesión
            data,
            setData, //Data de los graficos, tablas y formularios de kq2, codigo respuesta, entry mode
            dataTable,
            setDataTable,
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
            filterC4,
            setFilterC4,
            c4FormValue,
            setC4FormValue,
            filterC0,
            setFilterC0,
            c0FormValue,
            setC0FormValue
        }}>
            <AppRouter />
        </FilterContext.Provider>
    )
}