

import styled from 'styled-components';

const ListaIcones = styled.ul `
    display: flex;
    column-gap:24px;
    padding: 0;
    align-items: center;
    cursor:pointer;
 
`

const ListaIcone = styled.li `
    list-style: none;  
   
    &:hover{
        .Icone{
            color: #5e5c5d;
            box-shadow: 10px 10px 10px #5e5c5d;
            transition: 0.9s;
        }
    }
`

const Icone = styled.a `

    font-size: 1.7em;
    color: #fff;
    
`

   
    
function Icones(props) {

    return(

        <ListaIcones className='ListaIcones'>

            {props.icones.map(icone=>(

                <ListaIcone><Icone className='Icone' href={icone.link} target='blank'>{icone.icone}</Icone></ListaIcone>

            ))}
            
        </ListaIcones>
      
    )
}

export default Icones
