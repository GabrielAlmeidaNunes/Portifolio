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
    font-size: 1.8rem;
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
const Link = styled.a `
    text-decoration: none;
    color: #E1E5EA;
   
`

function Links(props){

    return (

        <Navegacao>

            <NavegacaoLista>

                {/* {props.informacoes.map(informacao =>( */}

                    <NavegacaoLink>

                        <Link className='Link' href={props.url}>{props.descricao}</Link>

                    </NavegacaoLink>
                    
                {/* ))} */}

            </NavegacaoLista>
            
        </Navegacao>

    )
}

export default Links