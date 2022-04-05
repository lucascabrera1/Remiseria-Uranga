import React, {Component} from "react"
import listaViajes from '../Components/ListaViajes.json'
import Viaje from './Viaje'

console.log(listaViajes)

class Viajes extends Component{
    state ={
        viajes : listaViajes
    }

    render_consulta() {
        let filas;
        if (this.state.viajes.length > 0){
            filas = this.state.viajes.map( viaje => {
                viaje["lista de pasajeros"].map( pasajero => {
                    pasajero["nombre y apellido"],
                    pasajero["telefono"],
                    pasajero["direccion de origen"],
                    pasajero["direccion de destino"]
                })
            })
            return filas
        }
        else return ("No se encontraron pasajeros")
    }

    
    render() {
        return this.props.viajes.map(viaje => <Viaje viaje = {viaje} key={viaje.id} />) //recorro el arreglo viajes
    }
}

export default Viajes




/*{ListaViajes.map = (viaje) => {
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
        }}
    </table>
}}*/