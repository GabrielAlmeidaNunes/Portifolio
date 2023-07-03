import styled from 'styled-components'

import Css from '../../Imagens/css.png'
import Html from '../../Imagens/html.png'
import Js from '../../Imagens/js.png'
import React from '../../Imagens/react.png'
import Perfil from '../../Imagens/perfil.jpg'
import Mysql from '../../Imagens/msql.png'

const Principal = styled.main `
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

const SobreMin = styled.section `
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
   
`

const Tecnologia = styled.section `
    display:flex;
    width:90px;
    height: 90px;
    padding:16px;
    aling-itens:center;
    justify-content: center;
    border-radius: 16px;
    border:1px solid #A7BBC7;
    
   
    &:hover{
        cursor:pointer;
        width:85px;
        height: 85px;
        box-shadow: 2px 2px 30px #5e5c5d;
        transition: 0.9s;
    }
`

const ImagemTecologia = styled.img `

`

const Tecnologias = styled.div `
   
    display:flex;
    column-gap:1em;
   

    @media (max-width: 1200px) {
      
        justify-content: center;
      }
   
`

const Imagem = styled.figure `
    margin:0
`

const ImagemPerfil = styled.img `

    width:400px;
    heigth:400px;
    border-radius:200px
`

const TecnologiaImagens = [
    
    Html,
    Css,
    Js,
    React,
    Mysql
]

function Main (){

    return(

        <Principal>

            <SobreMin>

                <SobreMinTexto>

                    <SobreMinApresentacao>

                        <SobreMimApresentacaoTitulo>🙋‍♂️Sobre Min</SobreMimApresentacaoTitulo>

                        <p>
                            Olá, me chamo Gabriel de Almeida Nunes, tenho 26 anos e sou de Minas Gerais, Brasil. 
                            Estudante do curso de Análise e Desenvolvimento de Sistemas(SENAC). 
                            Apaixonado pro desenvolvimento de software, estudo programação a 1 ano. 
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

            </Imagem>

           

        </Principal>
    )
}

export default Main