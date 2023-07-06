import Header from './Componentes/Header';
import styled from 'styled-components';
import Main from './Componentes/Main';
import Footer from './Componentes/Footer';

const ComponenteApp = styled.div `

  height:100vh;
  display:flex;
  flex-direction: column;
  justify-content: space-between;

`
function App() {
  return (
    <ComponenteApp>

      <Header/>
      <Main/>     
      <Footer/>

    </ComponenteApp>
  );
}

export default App;
