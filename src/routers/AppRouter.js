import React, { useState } from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { Sidebar } from "../components/ui/Sidebar";
import { DashboardScreen } from "../pages/main/DashboardScreen";
import { CodeResponseScreen } from "../pages/tokens/CodeResponseScreen";
import { EntryModeScreen } from "../pages/tokens/EntryModeScreen";
import { Kq2Screen } from "../pages/tokens/Kq2Screen";
import { TokenB2Screen } from "../pages/tokens/TokenB2Screen";
import { TokenB3Screen } from "../pages/tokens/TokenB3Screen";
import { TokenB4Screen } from "../pages/tokens/TokenB4Screen";
import { TokenC0Screen } from "../pages/tokens/TokenC0Screen";
import { TokenC4Screen } from "../pages/tokens/TokenC4Screen";
import { FilterContext } from "../services/FilterContext";
export const AppRouter = () => {
    const[valGlobal, setValGlobal] = useState('dashboard'); //Estado para dashboard
    const[data, setData] = useState([{}]); //Estado para dashboard, data API
    const[valFilter, setValFilter] = useState('allData');  //Estado para Medio Accesso
    const[valFilterCR, setValFilterCR] = useState('allData'); //Estado para Codigo respuesta
    const[valFilterEntry, setValFilterEntry] = useState('allData'); //Estado para Entry Mode

    return (
        <FilterContext.Provider value={{
            valGlobal,
            setValGlobal,
            data,
            setData,
            valFilter, 
            setValFilter,
            valFilterCR, 
            setValFilterCR,
            valFilterEntry,
            setValFilterEntry}}>
        <BrowserRouter>
        <div className="flex">
        <Sidebar />
            <div className="content">
            <Navbar />
                <Routes>
                    <Route path="/" element={<DashboardScreen />}/>
                    <Route path="/kq2" element={<Kq2Screen />} />
                    <Route path="/codigorespuesta" element={<CodeResponseScreen />}/>
                    <Route path="/entrymode" element={<EntryModeScreen/>} />
                    <Route path="/tokenc4" element={<TokenC4Screen/>} />
                    <Route path="/tokenc0" element={<TokenC0Screen/>} />
                    <Route path="/tokenb3" element={<TokenB3Screen />}/>
                    <Route path="/tokenb4" element={<TokenB4Screen />} />
                    <Route path="/tokenb2" element={<TokenB2Screen />} /> 
                </Routes>
                </div>
            </div>
        </BrowserRouter>
        </FilterContext.Provider>
    )
}