import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';
import ProductDe from './components/ProductDe/ProductDe';

function App() {
  return (
    
    <>
    <Header></Header>
    <Container>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/product/:productid" element={<ProductDe></ProductDe>}></Route>
      </Routes>
   

    
    </Container>
    <Footer></Footer>
    
    
    </>
  );
}

export default App;
