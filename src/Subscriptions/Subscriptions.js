import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import { StyledSubscriptions } from "./StyleSubscriptions";
import LoginContext from "../contexts/LoginContext";
import { useNavigate } from "react-router-dom"; 


export default function Subscriptions({ setPrice, setImage, setId }) {

    const {token} = useContext(LoginContext);

    const [planos, setPlanos] = useState(null);

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    } 

    const navigate = useNavigate();

    useEffect(()=> {

        const promise = axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', config)

        promise.then(response => {
            setPlanos(response.data)
        }, []);

    }, []);

    if(planos === null) {
        return <Loading />
    }

    function dadosPlano(e, plano) {
        e.preventDefault();

        setPrice(plano.price);
        setImage(plano.image);
        setId(plano.id);

        navigate(`/subscriptions/${plano.id}`)
    }

    return(
        <StyledSubscriptions>
        <h1>Escolha seu Plano</h1>
        <div className="planos-list">
            {planos.map(plano => (
                <div onClick={(event)=> dadosPlano(event, plano)} key={plano.id} className="plano">
                    <img src={plano.image} alt="logo"/>
                    <h3>R$ {plano.price}</h3>
                </div>
            ))}
        </div>
        </StyledSubscriptions>
    )
}