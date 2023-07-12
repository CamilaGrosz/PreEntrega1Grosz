import './App.css';
import NavBar from './components/NavBar';
import ItemListConstainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListConstainer greeting='Bienvenido a Apple Store'></ItemListConstainer>
    </div>
  );
}

export default App;
