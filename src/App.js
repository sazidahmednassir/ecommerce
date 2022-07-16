import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';

function App() {
  return (
    
    <>
    <Header></Header>
    <Container>
      <Home/>

    
    </Container>
    <Footer></Footer>
    
    
    </>
  );
}

export default App;
