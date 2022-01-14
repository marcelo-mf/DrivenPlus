import styled from "styled-components";
import { BounceLoader } from "react-spinners"; 

export default function Loading() {
    return(
        <StyledLoading>
            <BounceLoader loading color="#FF4791" size={100}/>
        </StyledLoading>
    )
}

const StyledLoading = styled.div`

    width: 100%;
    height: 100vh;

    background-color: black;

    display: flex;
    justify-content: center;
    align-items: center;

`
