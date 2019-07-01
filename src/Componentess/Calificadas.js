import React,{Component } from 'react';
import GrillaPeliculas from './GrillaPeliculas';
import BuscarPeliculas from './BuscarPeliculas';
import ApiController from '../Controller/ApiController'
import {Button,ButtonToolbar,InputGroup,FormControl,ButtonGroup,Table,Jumbotron} from 'react-bootstrap';
import ElimnarComentario from './EliminarComentario';




class calificadas extends Component{
    constructor(){
        super();
        this.state={
            array:[]
        }
    }
    componentDidMount=()=>{
        let data={
            idUsuario:localStorage.getItem('usuarioLogueado')
        }
        ApiController.getComentarioById(data,this.okComentario.bind(this))
        
    }

    okComentario=(responseData)=>{
        var w;
        var nuevoArreglo=[]
        for(w=0;w<responseData.length;w++){
            let data={
                idUsuario:responseData[w].idUsuario,
                idPelicula:responseData[w].idPelicula,
                calificacion:responseData[w].calificacion,
                comentario:responseData[w].comentario
            }
            nuevoArreglo.push(data)
        }
        
        this.setState({array:nuevoArreglo})
        console.log(this.state)

        
        
    }
    
    
	render(){
        const tileData=this.state.array;
        
        
        return(
            
            <div style={{background:'grey'}}>
            <Jumbotron style={{background:'linear-gradient(lightblue, red',fontFamily: 'italic' }}>
  <h1 >Aqui puedes ver las calificaciones tuyas!</h1>
  </Jumbotron>
            <Table style={{background: 'linear-gradient(lightblue, red'}}>
                 <thead>
                    <tr>
      
               <th>Usuario</th>
                <th>Pelicula</th>
                <th>Calificacion</th>
                <th>Comentarios</th>
                </tr>
             </thead>
            <tbody>
            {tileData.map(tile => (
                <tr>
      <td>{tile.idUsuario}</td>
      <td>{tile.idPelicula}</td>
      <td>{tile.calificacion}</td>
      <td>{tile.comentario}</td>
      <td><ElimnarComentario usuario={tile.idUsuario} pelicula={tile.idPelicula} calif={tile.calificacion}/></td>
    </tr>))}
            
        </tbody>
        </Table>
        </div>
        )
    }
    
}
		


export default calificadas;