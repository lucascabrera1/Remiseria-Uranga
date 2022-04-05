import React from 'react'
import propTypes from 'prop-types'
import Button from './Button'

const administrador = "Usted es atendido por Jorge Gomez, administrador oficial de la empresa Remiseria Uranga"
const bola = false

const Header = (props) => {
  return (
    <header className='Header'>
      <title>Remiseria Uranga</title>
      <h1>Remiseria Uranga</h1>
      <Button color = 'red' text = 'agregar un nuevo viaje'/>
      <div><h2>{administrador}</h2></div>
      <p>pasajero: {props.pasajero}</p>
      <p>origen: {props.origen}</p>
      <p>destino: {props.destino}</p>
      <p>remiseria habilitada: {bola ? "verdadero" : "falso" }</p>
    </header>
  )
}

Header.defaultProps = {
    pasajero : ""
}
  
Header.propTypes = {
    pasajero: propTypes.string.isRequired
}

export default Header