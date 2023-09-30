import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss'
import Header from "./components/Header.tsx";
import LeftAside from "./components/LeftAside.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ArrivalOfGoods from "./pages/ArrivalOfGoods.tsx";

const App: React.FC = () => {


    // @ts-ignore
    return (
        <>
            <BrowserRouter>
                <Header/>
                <div style={{display: 'flex', justifyContent: "space-between"}}>
                    <LeftAside/>

                    <Routes>
                        <Route path="/arrival-of-goods" element={<ArrivalOfGoods/>}/>
                        <Route path="/groups" element={<ArrivalOfGoods/>}/>
                        <Route path="/products" element={<ArrivalOfGoods/>}/>
                        <Route path="/users" element={<ArrivalOfGoods/>}/>
                        <Route path="/settings" element={<ArrivalOfGoods/>}/>
                    </Routes>
                </div>

            </BrowserRouter>
        </>
    )
}

export default App
