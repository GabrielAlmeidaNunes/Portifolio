import styled from "styled-components"

const Rodape = styled.footer `

    background-color: #A7BBC7;
    text-align:center;
    justify-content: space-between;
    color:#fff

`
function Footer(){

     return(

        <Rodape>

            <p>© Gabriel de Almeida Nunes, 2023 - Todos os direitos reservados. </p>
            
        </Rodape>
     )

}

export default Footer