import React, {Component} from "react"
import './estilos.css'
import BotonAgregarPasajero from "./BotonAgregarPasajero"
import FormPasajero from "./FormPasajero";
import Viajes from "./Viajes";

class Viaje extends Component {

    constructor(props){
        super(props);
        this.state = {
            //cantidad : props.viaje["lista de pasajeros"].length,
            listapasajeros: props.viaje["lista de pasajeros"],
            agregarpasajero : false
        };
        
    }

    agregarPasajero() {
        this.setState({
            agregarpasajero: true
        });
    }

    cancelarPasajero(){
        this.setState({
            agregarpasajero : false
        });
        console.log("entro al agregar pasajero y salio con el valor: " + this.state.agregarpasajero)
    }

    confirmar(pasajero) {
        
        this.setState(prevState => {
            const newLista = prevState.listapasajeros.concat(pasajero);
            return {
                listapasajeros: newLista,
                agregarpasajero : false
            }
        })
    }
    
    render(){
        //var cantidad = this.props.viaje["lista de pasajeros"].length
        const filas = this.state.listapasajeros.map( pasajero => {
            return (
                <tr key={pasajero["telefono"]}>
                <td>{pasajero["nombre y apellido"]}</td>
                <td>{pasajero["telefono"]}</td>
                <td>{pasajero["direccion de origen"]}</td>
                <td>{pasajero["direccion de destino"]}</td></tr>
            )
        })
        let formPasajero = <></>;
        if (this.state.agregarpasajero) {
            formPasajero = <FormPasajero 
                confirmar={this.confirmar.bind(this)} 
                cancelarPasajero = {this.cancelarPasajero.bind(this)}>
            </FormPasajero>
        }
        return <div>
            <h1 id="idv">Viaje {this.props.viaje.id}</h1>
            <ul key={this.props.viaje.id}>
                <li>Id Viaje: {this.props.viaje.id}</li> 
                <li>Localidad de origen: {this.props.viaje["localidad de origen"]}</li>
                <li>Localidad de destino: {this.props.viaje["localidad de destino"]}</li>
                <li>Horario de salida: {this.props.viaje["horario de salida"]}</li>
                <li>Horario de llegada: {this.props.viaje["horario de llegada"]}</li>
            </ul>
            <p id = 'titlp'>Lista de pasajeros</p>
            <table>
                <thead>
                    <tr>
                        <th><strong>Nombre y apellido</strong></th>
                        <th><strong>Teléfono</strong></th>
                        <th><strong>Direccion de origen</strong></th>
                        <th><strong>Direccion de destino</strong></th>
                    </tr>
                </thead>
                <tbody>{filas}</tbody>
            </table>
            <br/> <br/>
            {formPasajero}
            {!this.state.agregarpasajero ? 
            <BotonAgregarPasajero 
                cantidad = {this.state.listapasajeros.length} 
                click = {this.agregarPasajero.bind(this)}
            />
            :
            <></>}
            <br/>
            <br/>
            <button >Modificar Viaje</button>
            <button onClick={this.props.deleteViaje.bind(this, this.props.viaje.id)}>Eliminar Viaje</button>
        </div>
    }
}

export default Viaje