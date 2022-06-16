import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DashboardScreen } from "../pages/main/DashboardScreen";
import { CodeResponseScreen, EntryModeScreen, Kq2Screen, TokenB2Screen, TokenB3Screen, TokenB4Screen, TokenB6Screen, TokenC0Screen, TokenC4Screen, } from "../pages/tokens";
import { UserManagmentScreen } from '../pages/admin/UserManagmentScreen';
import { Sidebar } from "../components/ui/Sidebar";
import { LoadingScreen } from '../pages/ui/LoadingScreen';
import { FilterContext } from '../services/FilterContext';
import { useIdleTimer } from 'react-idle-timer';
import { TokenB5Screen } from '../pages/tokens/TokenB5Screen';

export const UserRouter = () => {

    const { loading, setLoading, user, setUser } = useContext(FilterContext);

    useEffect(() => {
        setTimeout(() => setLoading({ data: false, sesion: true }), 3000);
    }, [])

    const onIdle = () => {
        setUser({})
    }
    const { } = useIdleTimer({ onIdle, timeout: 3600000 }) //Se cierra sesión después de una hora a inactividad 

    if (loading.data) {
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
                    <Route path="/tokenb5" element={<TokenB5Screen />}/>
                    <Route path="/tokenb6" element={<TokenB6Screen />}/>
                    <Route path="/users" element={<UserManagmentScreen />} />
                </Routes>
            </div>
        </>
    )
}
