import React, {Component} from "react"
import './estilos.css'

class BotonAgregarPasajero extends Component {

    constructor (props) {
        super(props);
    }

    render(){

       return  (this.props.cantidad < 4 ) 
       ? <button id="btnAgregaPasajero" onClick={pintaralgo} >Agregar Pasajero</button> 
       : <p id="nolugar">Ya no quedan lugares disponibles en este viaje</p>

       function pintaralgo () {
             console.log("al menos entro a pintando algo")
            return <p>pintando algo</p>
        }
        
    }
}

export default BotonAgregarPasajero