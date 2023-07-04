import styled from "styled-components"

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
const Imagem = styled.img `
    width:100%;
    height:100%;
    border-radius:10px;
`
const CardAncora = styled.div `
    margin-top:24px;
    display:flex;
    justify-content: space-between
`



function Card(props){

    return (

            <CardLista>
                <CardTitulo>{props.titulo}</CardTitulo>
                <p>{props.descricao}</p>
                <Imagem src={props.imagem}></Imagem>
                <CardAncora>
                    <a target= "blank" href={props.url}>{props.visualizar} </a>
                    <a target= "blank" href={props.link}>{props.github}</a>
                </CardAncora>
                
            </CardLista>
      
    )
}

export default Card