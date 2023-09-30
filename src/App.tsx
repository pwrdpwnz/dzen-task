import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss'
import Header from "./components/Header.tsx";
import LeftAside from "./components/LeftAside.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes.ts";

const App: React.FC = () => {


    return (
        <>
            <BrowserRouter>
                <Header/>
                <LeftAside/>
                <Routes>
                    {
                        routes.map((route)=> {
                            return <Route path={route.to} id={route.id} element={route.to} />
                        })
                    }
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
