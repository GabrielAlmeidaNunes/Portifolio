import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navegacao = styled.nav `
    margin-right: 16px;
    margin:0;
    
`
const NavegacaoLista = styled.ul `
    display: flex;
    column-gap:16px;
    padding: 0;
       
`
const NavegacaoLink = styled.li `
    list-style: none;
    &:hover{
        .Link{
            color: #5e5c5d;
            box-shadow:10px 10px 10px #5e5c5d;
            transition: 1s;
        }
    }

    @media (max-width:550px){
        font-size: 1.6rem;
    }
 
`

const Linkk = styled.a `
    text-decoration: none;
    color: ${props => props.color || '#ffffff'};
    font-size : ${props => props.fonte || '1.8rem'}
   
`

function Links(props){

    return (

        <Navegacao>

            <NavegacaoLista>

                    <NavegacaoLink>

                        <Link  to={`/${props.rota}` }>

                            <Linkk target='blank' color={props.color} fonte = {props.fonte} className='Link' >{props.descricao}</Linkk>

                        </Link>

                    </NavegacaoLink>
                    
            </NavegacaoLista>
            
        </Navegacao>

    )
}

export default Links