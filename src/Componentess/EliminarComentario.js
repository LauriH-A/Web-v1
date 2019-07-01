import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import ApiController from '../Controller/ApiController';



class ElimnarComentario extends Component{
    eliminarCom(){
        let data={
          idUsuario:this.props.usuario,
          idPelicula:this.props.pelicula,
          calificacion:this.props.calif
        }
        ApiController.deleteComentario(data)
        window.location.reload();
       
       
        
        
    }
    


    render(){
    return(
        <Button onClick={this.eliminarCom.bind(this)}>Eliminar</Button>
    )
    }
}

export default ElimnarComentario