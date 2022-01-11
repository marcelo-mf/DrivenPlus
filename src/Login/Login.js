import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import logo from "../assets/Driven_white 1.png"
import { StyledLogin } from "./StyleLogin"

export default function Login({setToken}) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate()

    function handleLogin(e) {

        e.preventDefault();

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', {
            email: email,
            password: password
        });

            promise.then(response => {
            setToken(response.data.token);
            navigate('/subscriptions')
            });

            promise.catch(error => alert(error.response.data.message));

    }

    return(
        <StyledLogin>
            <img src={logo} alt="Logo Driven+"/>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">ENTRAR</button>
                <a onClick={()=> navigate('/cadastro')}>Não possui uma conta? Cadastre-se</a>
            </form>
        </StyledLogin>
    )
}

