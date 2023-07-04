import styled from 'styled-components'
import Links from '../Links'
import Icones from '../Icones'

import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const CabecalhoContainer = styled.header `
    background-color: #A7BBC7;
    width:100vw;
    color:#fff;
    align-items:center

    
`

const DivCabecalho = styled.div `
    margin:0;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width:550px){

        padding: 10px; 
    }

    @media (max-width:450px){

        display: flex;
        flex-direction:column;
    }

   

`

const Titulo = styled.h1 `
    font-weight: 200;
    font-size: 2.3rem;

    @media (max-width:550px){
        font-size: 2rem;
    }

`

const DivH1 = styled.div `

    font-weight: 100;
    cursor:pointer;
  

    &:hover{
        .Titulo{
            color: #5e5c5d;
            box-shadow: 10px 10px 10px #5e5c5d;
            transition: 0.9s;
        }
`
const Informacoes = 
[
   
    {
        descricao : 'Portifólio',
        url: 'https://www.google.com.br/'
    }
   
]

const icones = [
    {
        link: 'https://www.linkedin.com/in/gabriel-almeida-814360273/',
        icone: <BsLinkedin/>
    }
    ,
    
    {
        link: 'https://github.com/GabrielAlmeidaNunes',
        icone: <FaGithub/>
    }
    ,

    {
        link: 'https://wa.me/31999835782',
        icone: <BsWhatsapp/>
    }
  
]

function Header(){

    return(
        
       <CabecalhoContainer>

            <DivCabecalho>

                <DivH1>

                    <Titulo className='Titulo'>Dev Gabriel</Titulo>

                </DivH1>

                <Links informacoes = {Informacoes}/>

                <Icones icones = {icones}/>

            </DivCabecalho>  
              
       </CabecalhoContainer>
       
      
    )
}

export default Header