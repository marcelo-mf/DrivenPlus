import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "../Login/Login"
import Cadastro from "../Cadastro/Cadastro";
import Subscriptions from "../Subscriptions/Subscriptions";

export default function App() {

    const [token, setToken] = useState('');


    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login setToken={setToken}/>}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/subscriptions" element={<Subscriptions token={token}/>}/>
            </Routes>
        </BrowserRouter>
    )
}