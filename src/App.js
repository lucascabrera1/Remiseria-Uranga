import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Viajes from '../src/Components/ListaViajes.json'

function App() {
  const propiedadesprops = {
    "pasajero" : "Lucas Gabriel Cabrera", 
    "origen" : "Rioja 1845",
    "destino" : "Belgrano 321" 
  }
  
  return (
    <div className="App">
      <Header {...propiedadesprops}/>
    </div>
  );
}

export default App;
