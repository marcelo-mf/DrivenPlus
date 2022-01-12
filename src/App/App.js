import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "../Login/Login"
import Cadastro from "../Cadastro/Cadastro";
import Subscriptions from "../Subscriptions/Subscriptions";
import Subscriptionsid from "../Subscriptionsid/Subscriptionsid";

export default function App() {

    const [token, setToken] = useState('');

    //DADOS PLANOS
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [id, setId] = useState('');

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login setToken={setToken}/>}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/subscriptions" element={<Subscriptions token={token} setPrice={setPrice} setImage={setImage} setId={setId}/>}/>
                <Route path="/subscriptions/:id" element={<Subscriptionsid price={price} image={image} id={id}/>} token={token}/>
            </Routes>
        </BrowserRouter>
    )
}