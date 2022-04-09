import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Auth } from "../pages/auth/Auth";
import { PublicRoute } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import { UserRouter } from "./UserRouter";

export const AppRouter = () => {
    
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/auth" element={
                        <PublicRoute>
                            <Auth />
                        </PublicRoute>
                    }></Route>
                    <Route path="/*" element={
                        <PrivateRouter>
                            <UserRouter />
                        </PrivateRouter>
                    }></Route>
                </Routes>
        </BrowserRouter>
    )
}