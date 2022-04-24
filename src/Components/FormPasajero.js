//Esta clase setea los datos del pasajero y los maneja como estado
import  React, {Component} from 'react'

class FormPasajero extends Component{
    constructor(props){
        super(props)
        this.state = {
            "nombre y apellido" : '',
            "telefono" : '',
            "direccion de origen": '',
            "direccion de destino" : '',
            cancelar : false
        }
    }
//un metodo para setear los datos del pasajero en el estado
    onChangeDatosPasajero() {
        this.setState({
            "nombre y apellido": document.getElementById("txtNombreApellido").value,
            "telefono" : document.getElementById("txtTelefono").value,
            "direccion de origen": document.getElementById("txtDirOr").value,
            "direccion de destino" : document.getElementById("txtDirDes").value,
        })
    }

//devuelvo los datos del formulario
    render (){
        return <form>
            <label>Nombre y Apellido</label>
            <input id="txtNombreApellido" type="text" onChange={this.onChangeDatosPasajero.bind(this)}></input> <br/>
            <label>Telefono</label>
            <input id='txtTelefono' type="text" onChange={this.onChangeDatosPasajero.bind(this)}></input> <br/>
            <label>Direccion de Origen</label>
            <input id='txtDirOr' type="text" onChange={this.onChangeDatosPasajero.bind(this)}></input> <br/>
            <label>Direccion de Destino</label>
            <input id='txtDirDes' type="text" onChange={this.onChangeDatosPasajero.bind(this)}></input> <br/>
            <button onClick={ e => {e.preventDefault();this.props.confirmar(this.state)}}>Confirmar</button>
            <button onClick={ e => {e.preventDefault();this.props.cancelarPasajero()}}>Cancelar</button>
        </form> 
    }
}

export default FormPasajero