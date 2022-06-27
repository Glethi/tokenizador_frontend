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
    //Estado para Medio Accesso
    const [valFilterKq2, setValFilterKq2] = useState([]);
    const [optionsKq2, setOptionsKq2] = useState(null);
    //Estado para Codigo de Respuesta
    const [valFilterCR, setValFilterCR] = useState([]);
    const [optionsCR, setOptionsCR] = useState(null);
    //Estado para Entry Mode
    const [valFilterEntry, setValFilterEntry] = useState([]);
    const [optionsEntry, setOptionsEntry] = useState(null);
    //Estado para los filtros terminales
    const [filterTerm, setFilterTerm] = useState({
        ID_Comer: [],
        Term_Comer: [],
        Fiid_Comer: [],
        Fiid_Term: [],
        Ln_Comer: [],
        Ln_Term: [],
        Fiid_Card: [],
        Ln_Card:[]
    });
    const [filterTermValue, setFilterTermValue] = useState({
        ID_Comer: [],
        Term_Comer: [],
        Fiid_Comer: [],
        Fiid_Term: [],
        Ln_Comer: [],
        Ln_Term: [],
        Fiid_Card: [],
        Ln_Card:[]
    });

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
        ID_Cardholder_Method: [],
        ID_Comer: [],
        Term_Comer: [],
        Fiid_Comer: [],
        Fiid_Term: [],
        Ln_Comer: [],
        Ln_Term: [],
        Fiid_Card: [],
        Ln_Card:[]
    });
    //Estado para el formulario del token c4
    const [c4FormValue, setC4FormValue] = useState({
    });

    //Estdo para el filtro Token C0 (petición API)
    const [filterC0, setFilterC0] = useState({
        Kq2: [],
        Code_Response: [],
        Entry_Mode: [],
        ID_Ecommerce: [],
        Card_Type: [],
        ID_CVV2: [],
        ID_Information: [],
        ID_Comer: [],
        Term_Comer: [],
        Fiid_Comer: [],
        Fiid_Term: [],
        Ln_Comer: [],
        Ln_Term: [],
        Fiid_Card: [],
        Ln_Card:[]
    });
    //Estado para el formulario del token C0
    const [c0FormValue, setC0FormValue] = useState({});

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
        File_Name: [],
        ID_Comer: [],
        Term_Comer: [],
        Fiid_Comer: [],
        Fiid_Term: [],
        Ln_Comer: [],
        Ln_Term: [],
        Fiid_Card: [],
        Ln_Card:[]
    })
    //Estado para el formulario del token B3
    const [b3FormValue, setB3FormValue] = useState({})

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
        ID_Response_ISO: [],
        ID_Comer: [],
        Term_Comer: [],
        Fiid_Comer: [],
        Fiid_Term: [],
        Ln_Comer: [],
        Ln_Term: [],
        Fiid_Card: [],
        Ln_Card:[]
    })
    //Estado para el formulario del token B4
    const [b4FormValue, setB4FormValue] = useState({
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
        AIP: [],
        ID_Comer: [],
        Term_Comer: [],
        Fiid_Comer: [],
        Fiid_Term: [],
        Ln_Comer: [],
        Ln_Term: [],
        Fiid_Card: [],
        Ln_Card:[]
    })
    //Estado para el formulario del token B2
    const [b2FormValue, setB2FormValue] = useState({})

    //Estado para el filtro del Token B5
    const [filterB5, setFilterB5] = useState({
        Kq2:[],
        Code_Response:[],
        Entry_Mode:[],
        Iss_Auth_Data:[],
        arpc:[],
        Card_update:[],
        Addl_Data:[],
        Send_Card:[],
        Send_Data:[],
        ID_Comer: [],
        Term_Comer: [],
        Fiid_Comer: [],
        Fiid_Term: [],
        Ln_Comer: [],
        Ln_Term: [],
        Fiid_Card: [],
        Ln_Card:[]
    })
    const [b5FormValue, setB5FormValue] = useState({})

    //Estado para el filtro Token B6
    const [filterB6, setFilterB6] = useState({
        Kq2:[],
        Code_Response:[],
        Entry_Mode:[],
        dataL:[],
        SctData:[],
        ID_Comer: [],
        Term_Comer: [],
        Fiid_Comer: [],
        Fiid_Term: [],
        Ln_Comer: [],
        Ln_Term: [],
        Fiid_Card: [],
        Ln_Card:[]
    })
    const [b6FormValue, setB6FormValue] = useState({})

    return (
        <FilterContext.Provider value={{
            user,
            setUser, //Datos del usuario
            loading,
            setLoading, //Estado para la pantalla de carga y cerrar sesión
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
            filterTerm,
            setFilterTerm,
            filterTermValue, 
            setFilterTermValue,
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
            setB2FormValue, //Mantener el formulario del token b2
            filterB5,
            setFilterB5, //filtro token b5
            b5FormValue,
            setB5FormValue, //MAntener el formulario del token b5
            filterB6,
            setFilterB6, //Filtro para el token b6
            b6FormValue,
            setB6FormValue, //MAantener el formulario del token b6
        }}>
            <AppRouter />
        </FilterContext.Provider>
    )
}