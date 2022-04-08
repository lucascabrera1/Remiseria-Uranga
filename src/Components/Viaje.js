import React, {Component} from "react"
import './estilos.css'
import BotonAgregarPasajero from "./BotonAgregarPasajero"
import FormPasajero from "./FormPasajero";

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

    confirmar(pasajero) {
        
        this.setState(prevState => {
            return {
                listapasajeros: prevState.listapasajeros.push(pasajero)
            }   
        })
        console.log(pasajero);
    }
    
    render(){
        //var cantidad = this.props.viaje["lista de pasajeros"].length
        const filas = this.state.listapasajeros.map( pasajero => {
            return (
                <>
                    <tr key={pasajero["telefono"]}>
                    <td>{pasajero["nombre y apellido"]}</td>
                    <td>{pasajero["telefono"]}</td>
                    <td>{pasajero["direccion de origen"]}</td>
                    <td>{pasajero["direccion de destino"]}</td></tr>
                </>
            )
        })
        let formPasajero = <></>;
        if (this.state.agregarpasajero) {
            formPasajero = <FormPasajero confirmar={this.confirmar.bind(this)}></FormPasajero>
        }
        
        
        return <div>
            <h1 id="idv">Viaje {this.props.viaje.id}</h1>
            <ul>
                <li>Id Viaje: {this.props.viaje.id}</li> 
                <li>Localidad de origen: {this.props.viaje["localidad de origen"]}</li>
                <li>Localidad de destino: {this.props.viaje["localidad de destino"]}</li>
                <li>Horario de salida: {this.props.viaje["horario de salida"]}</li>
                <li>Horario de llegada: {this.props.viaje["horario de llegada"]}</li>
            </ul>
            <p id = 'titlp'>Lista de pasajeros</p>
            <table>
                <tr>
                    <th><strong>Nombre y apellido</strong></th>
                    <th><strong>Teléfono</strong></th>
                    <th><strong>Direccion de origen</strong></th>
                    <th><strong>Direccion de destino</strong></th>
                </tr>
                {filas}
            </table>
            <br/> <br/>
            {formPasajero}
            <BotonAgregarPasajero 
                cantidad = {this.state.listapasajeros.length} 
                click = {this.agregarPasajero.bind(this)}
            />
        </div>
    }
}





export default Viaje

/* class Viaje extends React.Component {
    render () {
        return <div>
            LocalidadOrigen: {this.props.LocalidadOrigen}
            LocalidadDestino: {this.props.LocalidadDestino}
            HorarioSalida: {this.props.HorarioSalida}
            HorarioLlegada: {this.props.HorarioLlegada}
            ListaPasajeros : {
                {NombreApellido : pasajero.NombreApellido} -
                {DireccionOrigen : pasajero.DireccionOrigen} -
                {DireccionDestino : pasajero.DireccionDestino} -
                {Telefono : pasajero.Telefono}
            }
        </div>

    }
}*/

/*const Viaje = ({viaje}) => {
    return (
        <table id='viajes'>
            <th>Localidad de origen</th>
            <th>Localidad de destino</th>
            <th>Horario de salida</th>
            <th>Horario de llegada</th>
            <td>{viaje.LocalidadOrigen}</td>
            <td>{viaje.LocalidadDestino}</td>
            <td>{viaje.HorarioSalida}</td>
            <td>{viaje.HorarioLlegada}</td>
            {viaje.ListaPasajeros.map = (pasajero) => {
            <table id='pasajeros'>
                <th>Nombre y apellido</th>
                <th>Direccion de origen</th>
                <th>Direccion de destino</th>
                <th>Telefono</th>
                <td>{pasajero.NombreApellido}</td>
                <td>{pasajero.DireccionOrigen}</td>
                <td>{pasajero.DireccionDestino}</td>
                <td>{pasajero.Telefono}</td>
            </table>
            }
        }
        </table>
    )
}*/