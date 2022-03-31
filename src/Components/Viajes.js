import React from "react"
import Viaje from "../Viaje"

import ListaViajes from "../Components/ListaViajes.json"
const viajes = ListaViajes

const Viajes = (e) => {
    return (
        <div>
            {ListaViajes.map = (viaje) => {
                <table id='viajes'>
                    <th>Localidad de origen</th>
                    <th>Localidad de destino</th>
                    <th>Horario de salida</th>
                    <th>Horario de llegada</th>
                    <td>{viaje}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <table id='pasajeros'>
                        <th>Nombre y apellido</th>
                        <th>Direccion de origen</th>
                        <th>Direccion de destino</th>
                        <th>Telefono</th>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                    </table>
                </table>
            }}
        </div>
    )
}