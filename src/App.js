import './App.css';
import NavBar from './components/Header/NavBar/NavBar';
import Catalog from './components/Body/Catalog/Catalog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetailContainer from './components/Body/products/ProductDetailContainer';
import Home from './components/Body/Home/Home';
import Checkout from './components/Body/order/Checkout';


function App() {
  return (
    <div>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home title='Bienvenido a Apple Store'/>}></Route>
        <Route exact path='/catalog' element={<Catalog/>}></Route>
        <Route exact path='/catalog/:id' element={<ProductDetailContainer />} />   
        <Route exact path='/checkout' element={<Checkout />}/> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
