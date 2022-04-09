import React, { useContext, useEffect } from 'react';
import { Route, Routes} from 'react-router-dom';
import { DashboardScreen } from "../pages/main/DashboardScreen";
import { CodeResponseScreen, EntryModeScreen, Kq2Screen, TokenB2Screen, TokenB3Screen, TokenB4Screen, TokenC0Screen, TokenC4Screen } from "../pages/tokens";
import { Sidebar } from "../components/ui/Sidebar";
import { LoadingScreen } from '../pages/ui/LoadingScreen';
import { FilterContext } from '../services/FilterContext';

export const UserRouter = () => {

    const { loading, setLoading } = useContext(FilterContext);

    useEffect(() => {
        setTimeout(() => setLoading({data: false, sesion: true}), 3000);
    }, [])

    if(loading.data){
        return <LoadingScreen />
    }

    return (
        <>
            <Sidebar />
            <div className='content'>
                <Routes>
                    <Route path="/dashboard" element={<DashboardScreen />} />
                    <Route path="/kq2" element={<Kq2Screen />} />
                    <Route path="/codigorespuesta" element={<CodeResponseScreen />} />
                    <Route path="/entrymode" element={<EntryModeScreen />} />
                    <Route path="/tokenc4" element={<TokenC4Screen />} />
                    <Route path="/tokenc0" element={<TokenC0Screen />} />
                    <Route path="/tokenb3" element={<TokenB3Screen />} />
                    <Route path="/tokenb4" element={<TokenB4Screen />} />
                    <Route path="/tokenb2" element={<TokenB2Screen />} />
                </Routes>
            </div>
        </>
    )
}
