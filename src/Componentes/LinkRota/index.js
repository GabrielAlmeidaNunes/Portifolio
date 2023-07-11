import { Link } from "react-router-dom";
import styled from "styled-components";

const DivRota = styled.div `
    color: white;
    font-size: 1.8rem;
    margin: 0;
    padding: 0;
    font-weight: 400;
 

&:hover{
    
        box-shadow:10px 10px 10px #5e5c5d;
        transition: 1s;

}

@media (max-width:550px){
    font-size: 1.6rem;
}

`

const Descricao = styled.p `
    color:white;
    margin: 0;
    padding: 0;
    font-weight:100;

    &:hover{
    
        color: #5e5c5d;       

    }
`

function LinkRota(props){

    return(

        <DivRota>
             <Link  to={`/${props.rota}` }><Descricao>{props.descricao}</Descricao></Link>
        </DivRota>
       
    )
}

export default LinkRota
