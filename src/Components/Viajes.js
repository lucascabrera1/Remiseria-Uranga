import React, {Component} from "react"
import listaViajes from '../Components/ListaViajes.json'
import Viaje from './Viaje'

class Viajes extends Component{

    
    render() {
        return this.props.viajes.map(viaje => 
            <Viaje 
                viaje = {viaje} 
                key={viaje.id}
                deleteViaje = {this.props.deleteViaje}
        />) //recorro el arreglo viajes
    }
}

export default Viajes