import { Header } from "components/Header/Header"
import React from "react"
import { Outlet } from 'react-router-dom';


export const Layout = () => {
    return (
    <div>
        <Header/>
        <main>
            <Outlet />
        </main>
    </div>
    );
};