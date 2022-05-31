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
    //Estado para el formulario del token C0
    const [c0FormValue, setC0FormValue] = useState({
        ID_Ecommerce: [],
        Card_Type: [],
        ID_CVV2: [],
        ID_Information: []
    });

    //Estado para el filtro del Token B3
    const [filterB3, setFilterB3] = useState({
        Kq2: [],
        Code_Response: [], 
        Entry_Mode: [],
        Bit_Map: [],
        Terminal_Serial_Number: [],
        Check_Cardholder: [],
        User_Field_One: [],
        User_Field_Two: [],
        Terminal_Type_EMV: [],
        App_Version_Number: [],
        CVM_Result: [],
        File_Name_Length: [],
        File_Name: []
    })
    //Estado para el formulario del token B3
    const [b3FormValue, setB3FormValue] = useState({
        Bit_Map: [],
        Terminal_Serial_Number: [],
        Check_Cardholder: [],
        User_Field_One: [],
        User_Field_Two: [],
        Terminal_Type_EMV: [],
        App_Version_Number: [],
        CVM_Result: [],
        File_Name_Length: [],
        File_Name: []
    })

    //Estado para el filtro del Token B4
    const [filterB4, setFilterB4] = useState({
        Kq2: [],
        Code_Response: [], 
        Entry_Mode: [],
        Service_EntryMode: [],
        Capacity_Terminal: [],
        EVM_Status: [],
        Data_Suspect: [],
        PAN_Number: [],
        Device_Info: [],
        Online_Code: [],
        ARQC_Verification: [],
        ID_Response_ISO: []
    })
    //Estado para el formulario del token B4
    const [b4FormValue, setB4FormValue] = useState({
        Service_EntryMode: [],
        Capacity_Terminal: [],
        EVM_Status: [],
        Data_Suspect: [],
        PAN_Number: [],
        Device_Info: [],
        Online_Code: [],
        ARQC_Verification: [],
        ID_Response_ISO: []
    })

    //Estado para el filtro del Token B2
    const [filterB2, setFilterB2] = useState({
        Kq2:[],
        Code_Response:[],
        Entry_Mode:[],
        Bit_Map: [],
        User_Field_One: [],
        ARQC: [],
        AMT_Auth: [],
        AMT_Other: [],
        ATC: [],
        Terminal_Country_Code: [],
        Terminal_Currency_Code: [],
        Transaction_Date: [],
        Transaction_Type: [],
        Umpedict_Number: [],
        Issuing_App_Data_Length: [],
        Issuing_App_Data: [],
        TVR: [],
        AIP: []
    })
    //Estado para el formulario del token B2
    const [b2FormValue, setB2FormValue] = useState({
        User_Field_One: [],
        ARQC: [],
        AMT_Auth: [],
        AMT_Other: [],
        ATC: [],
        Terminal_Country_Code: [],
        Terminal_Currency_Code: [],
        Transaction_Date: [],
        Transaction_Type: [],
        Umpedict_Number: [],
        Issuing_App_Data_Length: [],
        Issuing_App_Data: [],
        TVR: [],
        AIP: []
    })

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
            setFilterC4, //Filtro para el token C4
            c4FormValue,
            setC4FormValue, //Manetener el formulario C4
            filterC0,
            setFilterC0, //Filtro para el token C0
            c0FormValue,
            setC0FormValue, //Mantener el formulario token C0
            filterB3,
            setFilterB3, //Filtro para el token B3
            b3FormValue,
            setB3FormValue, //Mantener el formulario token B3
            filterB4,
            setFilterB4, //Filtro par el token b4
            b4FormValue,
            setB4FormValue, //Mantener el formulario token b4
            filterB2,
            setFilterB2, //Filtro para el token B2
            b2FormValue,
            setB2FormValue //Mantener el formulario del token b2
        }}>
            <AppRouter />
        </FilterContext.Provider>
    )
}