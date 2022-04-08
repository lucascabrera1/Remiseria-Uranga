import React, {Component} from "react"
import './estilos.css'

class BotonAgregarPasajero extends Component {

    /*constructor (props) {
        super(props);
    }*/

    render(){

       return  (this.props.cantidad < 4 ) 
       ? <button id="btnAgregaPasajero" onClick={this.props.click} >Agregar Pasajero</button> 
       : <p id="nolugar">Ya no quedan lugares disponibles en este viaje</p>

        
    }
}

export default BotonAgregarPasajero