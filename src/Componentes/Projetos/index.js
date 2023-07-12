import Cep from '../../Imagens/cep.png'
import Conta from '../../Imagens/conta.png'
import JogoDaVelha from '../../Imagens/jogoDaVelha.png'
import ListaTarefa from '../../Imagens/listaTarefa.png'
import Palindromo from '../../Imagens/palindromo.png'
import Calculadora from '../../Imagens/calculadora.png'
import Relogio from '../../Imagens/relogio.png'
import Card from '../Card'
import Alura from '../../Imagens/siteAlura.png'
import AluraPlus from '../../Imagens/aluraPlay.png'
import styled from 'styled-components'


const ProjetosContainer = styled.section `
    width:100%;
    
`
const TituloProjeto = styled.h1 `
    text-align:center;
    font-size: 2.3rem
`

const ProjetosFeitos = styled.div `
 
    width:95%;
    margin: 0 auto;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
`

const CardContainer = styled.ul `
 
    box-sizing: border-box;
    padding:0 ;
    display:grid;
    // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-columns: 25% 25% 25%;
    column-gap:20px;
    row-gap:22px;
    justify-content: center;
    text-align: center;

    @media (max-width:900px){
        grid-template-columns: 50% 50%;
    }

    @media (max-width:500px){
        grid-template-columns: 100%;
    }
    
`

const projetos = [
    {
        titulo: 'CEP',
        descricao: 'Projeto construindo com HTML, CSS e JavaScript. Utiliza requisição de API via Cep',
        imagem : Cep,
        url : 'https://consulta-cep-gules.vercel.app/',
        visualizar: '👁️‍🗨️',
        link : 'https://github.com/GabrielAlmeidaNunes/consultaCep',
        github : 'Github'

    },

    {
        titulo: 'BANCO DIGITAL',
        descricao: 'Projeto construindo com HTML, CSS e JavaScript. Utiliza o Local Storage para armazenar informações',
        imagem : Conta,
        url : 'https://conta-banco.vercel.app/',
        visualizar: '👁️‍🗨️',
        link : 'https://github.com/GabrielAlmeidaNunes/contaBanco',
        github : 'Github'

    },

    {
        titulo: 'JOGO DA VELHA',
        descricao: 'Projeto construindo com HTML, CSS e JavaScript',
        imagem : JogoDaVelha,
        url : 'https://jogo-da-velha-murex.vercel.app/',
        visualizar: '👁️‍🗨️',
        link : 'https://github.com/GabrielAlmeidaNunes/jogoDaVelha',
        github : 'Github'

    },

    {
        titulo: 'LISTA DE TAREFA',
        descricao: 'Projeto construindo com HTML, CSS e JavaScript. Utiliza Local Storage e é possivel realizar um GRUD',
        imagem : ListaTarefa,
        url : 'https://to-do-list-delta-lovat.vercel.app/',
        visualizar: '👁️‍🗨️',
        link : 'https://github.com/GabrielAlmeidaNunes/toDoList',
        github : 'Github'

    },

    {
        titulo: 'PALINDROMO',
        descricao: 'Projeto construindo com React',
        imagem : Palindromo,
        url : 'https://palavra-palindroma.vercel.app/',
        visualizar: '👁️‍🗨️',
        link : 'https://github.com/GabrielAlmeidaNunes/palavraPalindroma',
        github : 'Github'

    },

    {
        titulo: 'RELÓGIO',
        descricao: 'Projeto construindo com HTML, CSS e JavaScript.',
        imagem : Relogio,
        url : 'https://relogio-beta.vercel.app/',
        visualizar: '👁️‍🗨️',
        link : 'https://github.com/GabrielAlmeidaNunes/relogio',
        github : 'Github'

    },


    {
        titulo: 'CALCULADORA',
        descricao: 'Projeto construindo com HTML, CSS e JavaScript.',
        imagem : Calculadora,
        url : 'https://calculadora-nova.vercel.app/',
        visualizar: '👁️‍🗨️',
        link : 'https://github.com/GabrielAlmeidaNunes/calculadoraNova',
        github : 'Github'

    },

    {
        titulo: 'Site Barbearia',
        descricao: 'Projeto construindo com HTML, CSS .',
        imagem : Alura,
        url : 'https://barbearia-alura-orpin.vercel.app/',
        visualizar: '👁️‍🗨️',
        link : 'https://github.com/GabrielAlmeidaNunes/barbeariaAlura',
        github : 'Github'

    },

    {
        titulo: 'Alura Plus',
        descricao: 'Projeto construindo com HTML, CSS .',
        imagem : AluraPlus,
        url : 'https://calculadora-nova.vercel.app/',
        visualizar: '👁️‍🗨️',
        link : 'https://github.com/GabrielAlmeidaNunes/calculadoraNova',
        github : 'Github'

    },



    

]
function Projetos(){

    return (

        <ProjetosContainer>

            <TituloProjeto>Portifólio</TituloProjeto>

            <ProjetosFeitos>

                <CardContainer>

                    {projetos.map(projeto=>(

                        <Card 
                        
                            titulo =  {projeto.titulo}
                            descricao ={projeto.descricao}
                            imagem = {projeto.imagem}
                            url = {projeto.url}
                            visualizar = {projeto.visualizar}
                            link = {projeto.link}
                            github = {projeto.github}      
                            
                        >   
                        </Card>
                          
                    ))}
                    
                </CardContainer>

            </ProjetosFeitos>

        </ProjetosContainer>
        
    )
}

export default Projetos