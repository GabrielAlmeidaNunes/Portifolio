import styled from 'styled-components';
import Main from '../Main';
import Footer from '../Footer';

const ComponenteApp = styled.div `

  height:100vh;
  display:flex;
  flex-direction: column;
  justify-content: space-between;

`
function Home() {
  return (
    <ComponenteApp> 
       
      <Main/>
      <Footer/>     
     

    </ComponenteApp>
  );
}

export default Home;
