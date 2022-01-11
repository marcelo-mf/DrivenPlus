import { useNavigate } from "react-router-dom"

import logo from "../assets/Driven_white 1.png"
import { StyledLogin } from "./StyleLogin"

export default function Login() {

    const navigate = useNavigate()

    function handleLogin() {

    }

    return(
        <StyledLogin>
            <img src={logo} alt="Logo Driven+"/>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <button type="submit">ENTRAR</button>
                <a onClick={()=> navigate('/Cadastro')}>Não possui uma conta? Cadastre-se</a>
            </form>
        </StyledLogin>
    )
}

