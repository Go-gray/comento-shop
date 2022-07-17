import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Basket from './pages/Basket';
import './App.css';

function App() {
  return (
    <BrowserRouter> basename="/comento-shop"
      <Routes>
        <Route path="/" elemennt={<home/>}/>
        <Route path="/product/:productId" elemennt={<ProductDetail/>}/>
        <Route path="/Basket" elemennt={<Basket/>}/>
      

      </Routes>
    
    </BrowserRouter>


  );
}

export default App;
