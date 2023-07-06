import styled from "styled-components"
import Links from "../Links"

const CardLista = styled.li `
    border:1px solid transparent;
    border-radius:10px;
    display:flex;
    flex-direction: column;
    padding: 12px;
    list-style: none;
    box-shadow: 5px 5px 5px #5e5c5d;

    a{
        text-decoration: none;
    }

    &:hover{
        box-shadow: 10px 10px 10px #5e5c5d;
        transition: 0.9s;
    }
    
`

const CardTitulo = styled.h1 `

 text-align: center;

`

const CardParagrafo = styled.p `
`

const Imagem = styled.img `
    width:100%;
    height:100%;
    border-radius:10px;
`

const CardAncora = styled.nav `
    margin-top:24px;
    display:flex;
    justify-content: space-between
`
function Card(props){

    return (

            <CardLista>
                <CardTitulo>{props.titulo}</CardTitulo>

                <CardParagrafo>{props.descricao}</CardParagrafo>

                <Imagem src={props.imagem}/>

                <CardAncora>

                    <Links
                        color = "#000000"
                        fonte = '1.4rem'
                        url = {props.url}   
                        descricao = {props.visualizar} 

                    >
                    </Links>

                    <Links
                        color = "#000000"
                        fonte = '1.4rem'
                        url = {props.link}   
                        descricao = {props.github} 

                    >
                    </Links>
                    
                </CardAncora>
                
            </CardLista>   
    )
}

export default Card