import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginContext from "../contexts/LoginContext";
import Login from "../Login/Login"
import Cadastro from "../Cadastro/Cadastro";
import Subscriptions from "../Subscriptions/Subscriptions";
import Subscriptionsid from "../Subscriptionsid/Subscriptionsid";
import Home from "../Home/Home";

export default function App() {

    const [token, setToken] = useState('');
    const [idPlano, setIdPlano] = useState('');
    const [name, setName] = useState('');

    //DADOS PLANOS
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [id, setId] = useState('');

    return(
        <LoginContext.Provider value={{setIdPlano, setToken, token, idPlano, setName, name}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/cadastro" element={<Cadastro />}/>
                    <Route path="/subscriptions" element={<Subscriptions setPrice={setPrice} setImage={setImage} setId={setId}/>}/>
                    <Route path="/subscriptions/:id" element={<Subscriptionsid price={price} image={image} id={id}/>}/>
                    <Route path="/home" element={<Home idPlano={idPlano} />}/>
                </Routes>
            </BrowserRouter>
        </LoginContext.Provider>
    )
}