import { useState, useEffect } from "react";
import axios from "axios";
import { PersonCircle } from 'react-ionicons'
import { StyledHome } from "./StyleHome";

export default function Home({idPlano, token}) {

    const [links, setLinks] = useState(null);

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    } 

    useEffect(()=> {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlano}`, config)

        promise.then(response => {
            console.log(response.data)
            setLinks(response.data)
        });

    }, []);

    if(links === null) {
        return <h1>Carregando...</h1>
    }

    return(
        <StyledHome>
            <div className="topo">
                <img src={links.image}/>
                <PersonCircle color={'#FFFFFF'} width='40px' height='40px'/>
            </div>
            <div className="title">Olá, Fulano</div>
            <div className="links">
                {links.perks.map(link => (
                <a key={link.id} href={link.link}>{link.title}</a>
                ))}
            </div>
            <div className="footer">
                <button className="mudar-plano">Mudar Plano</button>
                <button className="cancelar">Cancelar Plano</button>
            </div>
        </StyledHome>
    )
}