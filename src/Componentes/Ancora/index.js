import styled from "styled-components"

const AncoraLink = styled.a `

`
function Ancora(props){

    return(

        <AncoraLink target="blank" href={props.url}>{props.link}</AncoraLink>
    )
}

export default Ancora