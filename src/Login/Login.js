import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import LoginContext from "../contexts/LoginContext"
import logo from "../assets/Driven_white 1.png"
import { StyledLogin } from "./StyleLogin"

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {setIdPlano, setToken, setName} = useContext(LoginContext);

    const navigate = useNavigate()

    function handleLogin(e) {

        e.preventDefault();

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', {
            email: email,
            password: password
        });

            promise.then(response => {
            setToken(response.data.token);
            setName(response.data.name);

            if (response.data.membership === null) {
                navigate('/subscriptions')
            } else if (response.data.membership !== null) {
                setIdPlano(response.data.membership.id)
                navigate('/home')
            }

            

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

