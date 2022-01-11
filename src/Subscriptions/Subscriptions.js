import { useEffect, useState } from "react";
import axios from "axios";

import { StyledSubscriptions } from "./StyleSubscriptions";


export default function Subscriptions({ token }) {

    const [planos, setPlanos] = useState(null);

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    } 

    useEffect(()=> {

        const promise = axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', config)

        promise.then(response => {
            console.log(response.data);
            setPlanos(response.data)
        })

    }, []);

    if(planos === null) {
        return <h1>Carregando...</h1>
    }

    return(
        <StyledSubscriptions>
        <h1>Escolha seu Plano</h1>
        <div className="planos-list">
            {planos.map(plano => (
                <div key={plano.id} className="plano">
                    <img src={plano.image}/>
                    <h3>R$ {plano.price}</h3>
                </div>
            ))}
        </div>
        </StyledSubscriptions>
    )
}