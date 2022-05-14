import React from 'react'

class Viaje extends React.Component {
    render () {
        return <div>
            LocalidadOrigen: {this.props.LocalidadOrigen}
            LocalidadDestino: {this.props.LocalidadDestino}
            HorarioSalida: {this.props.HorarioSalida}
            HorarioLlegada: {this.props.HorarioLlegada}
        </div>
        
    }
}

export default Viaje