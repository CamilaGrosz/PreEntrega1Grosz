import './App.css';
import NavBar from './components/NavBar';
import Catalog from './components/Catalog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';

function App() {
  return (
    <div>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home title='Bienvenido a Apple Store'/>}></Route>
        <Route exact path='/catalog' element={<Catalog/>}></Route>
        <Route exact path='/catalog/:id' element={<ProductDetail />} />      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
