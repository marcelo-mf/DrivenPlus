import { useNavigate } from "react-router-dom"
import { StyledCadastro } from "./StyleCadastro"

export default function Cadastro() {

    const navigate = useNavigate();

    function handleCadastro() {

    }

    return(
        <StyledCadastro>
            <form onSubmit={handleCadastro}>
                <input type="name" placeholder="Nome"/>
                <input type="CPF" placeholder="CPF"/>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <button type="submit">ENTRAR</button>
                <a onClick={()=> navigate('/')}>Já possuí uma conta? Entre</a>
            </form>
        </StyledCadastro>
    )
}