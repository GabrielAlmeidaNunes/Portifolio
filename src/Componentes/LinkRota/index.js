import { Link } from "react-router-dom";
import styled from "styled-components";

const DivRota = styled.div `
    color: white;
    font-size: 2rem;
    margin: 0;
    padding: 0;

&:hover{
    
        color: red !!important;
        box-shadow:10px 10px 10px #5e5c5d;
        transition: 1s;

}

`

const Descricao = styled.p `
    color:white;
    margin: 0;
    padding: 0;

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
