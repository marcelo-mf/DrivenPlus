import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { PersonCircle } from 'react-ionicons'
import { StyledHome } from "./StyleHome";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import LoginContext from "../contexts/LoginContext";

export default function Home() {

    const {idPlano, token, name} = useContext(LoginContext);

    const [links, setLinks] = useState(null);

    const navigate = useNavigate();

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    } 

    function handleDelete(e) {

        e.preventDefault();

        const promise = axios.delete('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', config)

        promise.then(() => {
            alert("Cancelado com sucesso!")
            navigate("/subscriptions")
        })

        promise.catch(error => alert(error.response.data.message));
    }

    useEffect(()=> {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlano}`, config)

        promise.then(response => {
            setLinks(response.data)
        });

    }, []);

    if(links === null) {
        return <Loading />
    }

    return(
        <StyledHome>
            <div className="topo">
                <img src={links.image}/>
                <PersonCircle color={'#FFFFFF'} width='40px' height='40px'/>
            </div>
            <div className="title">Olá, {name}</div>
            <div className="links">
                {links.perks.map(link => (
                <a key={link.id} href={link.link}>{link.title}</a>
                ))}
            </div>
            <div className="footer">
                <button onClick={() => navigate('/subscriptions')} className="mudar-plano">Mudar Plano</button>
                <button onClick={(event) => handleDelete(event)} className="cancelar">Cancelar Plano</button>
            </div>
        </StyledHome>
    )
}