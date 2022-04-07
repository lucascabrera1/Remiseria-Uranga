import logo from './logo.svg';
import './App.css'
import Header from './Components/Header'
import Viajes from './Components/Viajes'
import ListaViajes from './Components/ListaViajes.json'
import React, {Component} from 'react';


class App extends  Component {
  
  state = {viajes : ListaViajes}

  render(){
  
    const propiedadesprops = {
      "pasajero": "julian julianb",
      "origen" : "italia 123",
      "destino" : "san juan 998"
    }
    
    return (
      <div className="App">
        <Header {...propiedadesprops}/>
        <Viajes viajes = {this.state.viajes} />
      </div>
    );
  }
}
  

export default App;
