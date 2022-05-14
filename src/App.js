import React, {Component} from 'react';
import './App.css'
import Header from './Components/Header'
import Viajes from './Components/Viajes'
import ListaViajes from './Components/ListaViajes.json'
import FormViaje from './Components/FormViaje';
import Viaje from './Components/Viaje';

class App extends  Component {

  state = {viajes : ListaViajes, quiereagregar : false}

  addViaje = (localidadorigen, localidaddestino, horariosalida, horariollegada) =>{
    const newviaje = {
        id: this.state.viajes.length +1,
        "localidad de origen" : localidadorigen ,
        "localidad de destino": localidaddestino,
        "horario de salida" : horariosalida ,
        "horario de llegada": horariollegada,
        "lista de pasajeros" : []
    }
    this.setState({
        viajes : [...this.state.viajes, newviaje]
    })
    console.log("entró al addViaje de la clase app.js")
    console.log("localidad de origen " + newviaje['localidad de origen'])
    console.log("localidad de destino " + newviaje['localidad de destino'])
    console.log("horario de salida " + newviaje['horario de salida'])
    console.log("horario de llegada " + newviaje['horario de llegada'])
    console.log("localidad de origen " + localidadorigen)
    console.log("localidad de destino " + localidaddestino)
    console.log("horario de salida " + horariosalida)
    console.log("horario de llegada " + horariollegada)
}

deleteViaje = (id) => {
  const newList = this.state.viajes.filter(viaje => viaje.id !== id);
  this.setState({viajes : newList})
}

updateViaje = (id, localidadorigen, localidaddestino, horariosalida, horariollegada) => {
  const newList = this.state.viajes.map( viaje =>{
    if(viaje.id === id){
        viaje['localidad de origen'] = localidadorigen ,
        viaje['localidad de destino'] = localidaddestino,
        viaje['horario de salida'] = horariosalida ,
        viaje['horario de llegada']= horariollegada
    }
    return viaje;
  })
  this.setState({viajes : newList})
}

  render(){
    console.log(this.state.viajes)
    return (
      <div className="App">
        <Header />
        <Viajes viajes = {this.state.viajes} deleteViaje = {this.deleteViaje} /> <br/> <br/>
        <h1 color='blue'>Nuevo Viaje</h1>
        <FormViaje quiereagregar = {this.state.quiereagregar} addviaje = {this.addViaje}></FormViaje>
      </div>
    );
  }
}
  
export default App;