import React, {Component} from "react"
import './estilos.css'

class Viaje extends Component {
    render(){
        return <div>
            <ul >
                <li>Id Viaje {this.props.viaje.id}</li> 
                <li>Localidad de origen {this.props.viaje["localidad de origen"]}</li>
                <li>Localidad de destino {this.props.viaje["localidad de destino"]}</li>
                <li>Horario de salida {this.props.viaje["horario de salida"]}</li>
                <li>Horario de llegada {this.props.viaje["horario de llegada"]}</li>
            </ul>
            <p>Lista de pasajeros</p>
            <table>
                <thead>
                    <th>Nombre y Apellido</th>
                    <th>Telefono</th>
                    <th>Dirección de origen</th>
                    <th>Dirección de destino</th>
                </thead>
                <tbody>
                    <td>{this.props.viaje["lista de pasajeros"]["nombre y apellido"]}</td>
                    <td>{this.props.viaje["lista de pasajeros"].telefono }</td>
                    <td>{this.props.viaje["lista de pasajeros"]["direccion de origen"]}</td>
                    <td>{this.props.viaje["lista de pasajeros"]["direccion de destino"]}</td>
                </tbody>
            </table>
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