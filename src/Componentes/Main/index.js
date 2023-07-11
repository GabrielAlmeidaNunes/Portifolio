import styled from 'styled-components'
import Css from '../../Imagens/css.png'
import Html from '../../Imagens/html.png'
import Js from '../../Imagens/js.png'
import React from '../../Imagens/react.png'
import Perfil from '../../Imagens/perfil.jpg'
import Mysql from '../../Imagens/msql.png'
import NodeJs from '../../Imagens/nodeJs.png'

const Principal = styled.main `

`

const Secao = styled.section `
  display:flex;
  padding:5%;  
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-direction: column;
    text-align:center;
    row-gap:1.5em;
  }
 
`

const SobreMin = styled.div `
  displa:flex;
  flex-direction:column;
 
`

const SobreMinTexto = styled.aside `

    display:flex;
    flex-direction:column;
    box-sizing: border-box;
      
`

const SobreMinImagem = styled.div `

    width:30%;
    display:flex;
    justify-content: center;
    align-items: center;

`

const SobreMinApresentacao = styled.section `

    p{
        width: 75%;
        font-size: 1.5em;
        line-height: 1.6;
        margin-bottom: 8%;
        font-weight: 300;
     
    }

    @media (max-width: 1200px) {

        p{
            width:100%;
            text-align:center;
            font-size: 1.3em;
            line-height: 1.6;
            margin-bottom: 8%;
            font-weight: 300;
        }
    }

   
`

const SobreMimApresentacaoTitulo = styled.h1 `
    font-size:1.3rem
`

const SobreMinTecnologias = styled.div `
    display:flex;
    flex-direction:column; 

    @media (max-width:690px){

    }
   
`

const Tecnologias = styled.div `
   
    display:flex;
    column-gap:1em;
    flex-wrap:wrap;
    row-gap: 1em;
   

    @media (max-width: 1200px) {
      
        justify-content: center;
      }
   
`

const Tecnologia = styled.section `
    display:flex;
    width:85px;
    height: 85px;
    padding:16px;
    aling-itens:center;
    justify-content: center;
    border-radius: 16px;
    border:1px solid #A7BBC7;
    
   
    &:hover{
        cursor:pointer;
        width:75px;
        height: 75px;
        box-shadow: 2px 2px 30px #5e5c5d;
        transition: 0.9s;
    }

    @media (max-width:690px){
        width:65px;
        height: 65px;
        padding:5px;

        &:hover{
            cursor:pointer;
            width:55px;
            height: 55px;
          
        }
    }
`

const ImagemTecologia = styled.img `

    width:100%;
    border-radius: 2px;
`

const Imagem = styled.figure `
    margin:0;
    display:flex;
    flex-direction:column;
    row-gap:1em;
    text-align:center;


`

const ImagemPerfil = styled.img `
    
    width:400px;
    heigth:400px;
    border-radius:200px;
    margin-top:32px;

    @media (max-width:900px){
        width:300px;
        heigth:300px;
        border-radius:150px;
          
    }

    @media (max-width:520px){
        width:100%;
          
    }
`

const ImagemDescricao = styled.figcaption `
    
    font-weight:100;
    font-size:1.3rem;
   
`

const TecnologiaImagens = [
    
    Html,
    Css,
    Js,
    NodeJs,
    React,
    Mysql,
    
]

function Main (){

    return(
        <Principal>

            <Secao>

                <SobreMin>

                    <SobreMinTexto>

                        <SobreMinApresentacao>

                            <SobreMimApresentacaoTitulo>🙋‍♂️Sobre Mim</SobreMimApresentacaoTitulo>

                            <p>
                                Estudante do curso Análise e Desenvolvimento de Sistemas pelo (Senac). 
                                Futuro desenvolvedor de software, adquiri amplo conhecimento teórico nos cursos que realizei voltado para desenvolvimento web, estudando a linguagem JavaScript, 
                                busco aprofundar meus conhecimentos em React e NodeJs.
                            </p>

                        </SobreMinApresentacao>

                        <SobreMinTecnologias>

                            <SobreMimApresentacaoTitulo>👨‍💻Tecnológias</SobreMimApresentacaoTitulo>

                            <Tecnologias>

                            {TecnologiaImagens.map(imagem=>(

                                <Tecnologia>

                                    <ImagemTecologia src={imagem}></ImagemTecologia>

                                </Tecnologia>

                            ))}

                            </Tecnologias>
                            
                        </SobreMinTecnologias>

                    </SobreMinTexto>

                </SobreMin>

                <Imagem>
                    
                    <ImagemPerfil src={Perfil}></ImagemPerfil>
                    <ImagemDescricao>Gabriel de Almeida</ImagemDescricao>

                </Imagem>

            </Secao>

           

        </Principal>
    )
    
}

export default Main