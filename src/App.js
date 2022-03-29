import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

function App() {
  
  return (
    <div className="App">
      <Header 
        pasajero = "Lucas Gabriel Cabrera" 
        origen = "Rioja 1845" 
        destino = "Belgrano 321" 
      />
      <Header
        pasajero=''
        origen ="San Juan y Oroño"
        destino = "Eleuterio Valrela 1152"
      />
    </div>
  );
}

export default App;
