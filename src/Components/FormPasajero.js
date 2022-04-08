import  React, {Component} from 'react'

class FormPasajero extends Component{
    constructor(props){
        super(props)
        this.state = {
            "nombre y apellido" : ''
        }
    }

    onChangeNombreApellido() {
        this.setState({
            "nombre y apellido": document.getElementById("txtNombreApellido").value
        })
        console.log(this.state);
    }

    render (){
        return <form>
            <label>Nombre y Apellido</label>
            <input id="txtNombreApellido" type="text" onChange={this.onChangeNombreApellido.bind(this)}></input>
            <button onClick={e => {e.preventDefault();this.props.confirmar(this.state)}}>Confirmar</button>
        </form>
    }
}

export default FormPasajero