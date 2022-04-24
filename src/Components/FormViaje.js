import React, {Component} from "react";

class FormViaje extends Component {
    constructor (props){
        super(props)
        this.state = {
            "localidad de origen" : '',
            "localidad de destino": '',
            "horario de salida" : '',
            "horario de llegada" : '',
            quiereagregar: false
        }
    }

    

    onChangeDatosViaje = e =>{
        console.log(e.target.name, e.target.value)
        this.setState({
            /* "localidad de origen" : document.getElementById("txtLocOr").value,
            "localidad de destino": document.getElementById("txtLocDes").value,
            "horario de salida" : document.getElementById("txtHoraSalida").value,
            "horario de llegada" : document.getElementById("txtHoraLlegada").value */
            [e.target.name] : e.target.value
        })
        /* console.log("horario de llegada " + this.state["horario de llegada"])
        console.log("horario de salida: " + this.state["horario de salida"])
        console.log("localidad de destino: " + this.state["localidad de destino"])
        console.log("localidad de origen: " + this.state["localidad de origen"]) */
    }

    onSubmit = e => {
            //console.log('submitting...(onsubmit event)')
            this.props.addviaje(
            this.state["localidad de origen"],
            this.state["localidad de destino"], 
            this.state["horario de salida"],
            this.state["horario de llegada"]
        )
        console.log('submitting segundo ...(onsubmit event)')
        //console.log("localidad de destino " + this.state["localidad de destino"])
        e.preventdefault();
    }

    render(){
        return (this.state.quiereagregar) ? (<form onSubmit={this.onSubmit}>
            <legend>
                <label>Horario de salida</label>
                <input 
                    type="text" 
                    id="txtHoraSalida" 
                    name="horario de salida"
                    value={this.state["horario de salida"]}
                    onChange={this.onChangeDatosViaje.bind(this)}>
                </input> <br/>
                <label>Horario de llegada</label>
                <input 
                    type="text" 
                    id="txtHoraLlegada"
                    value={this.state["horario de llegada"]}
                    name="horario de llegada"
                    onChange={this.onChangeDatosViaje.bind(this)}>
                </input> <br/>
                <label>Localidad de Origen</label>
                <input 
                    type="text" 
                    id="txtLocOr"
                    name="localidad de origen"
                    value={this.state["localidad de origen"]}
                    onChange={this.onChangeDatosViaje.bind(this)}>
                </input> <br/>
                <label>Localidad de Destino</label>
                <input 
                    type="text" 
                    id="txtLocDes" 
                    name="localidad de destino"
                    value={this.state["localidad de destino"]}
                    onChange={this.onChangeDatosViaje.bind(this)}>
                </input> <br/>
                <button type="submit"
                    onClick={e => {
                        //e.preventDefault();
                        this.onSubmit();
                    }
                    }>Confirmar
                </button>
                <button 
                onClick={e => {
                    e.preventDefault(); 
                    this.setState({
                        quiereagregar : false}); 
                        console.log(this.state.quiereagregar)}}>
                    Cancelar
                </button>
            </legend>
        </form>)
        : <button 
        onClick={e => 
            {e.preventDefault(); 
                this.setState({
                    quiereagregar : true})
                }}>Agregar un nuevo viaje
        </button>
    }
}

export default FormViaje