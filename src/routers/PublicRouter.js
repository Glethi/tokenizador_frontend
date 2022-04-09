import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { SesionScreen } from "../pages/ui/SesionScreen";
import { FilterContext } from "../services/FilterContext";

export const PublicRoute = ({children}) =>{

    const { user, loading, setLoading } = useContext(FilterContext);

    useEffect(() => {
        setTimeout(() => setLoading({data: true, sesion: false}), 3000);
    }, [])

    if(loading.sesion && !user.logged){
        return <SesionScreen />
    }

    return user.logged 
    ? <Navigate to="/dashboard"/>
    : children
}