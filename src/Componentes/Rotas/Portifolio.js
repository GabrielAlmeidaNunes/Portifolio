import styled from 'styled-components';

import Projetos from '../Projetos';
import Footer from '../Footer';

const ComponenteApp = styled.div `

  height:100vh;
  display:flex;
  flex-direction: column;
  justify-content: space-between;

`
function Portifolio() {
  return (
    <ComponenteApp> 
       
      <Projetos/>

      <Footer/>

    </ComponenteApp>
  );
}

export default Portifolio;
