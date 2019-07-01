import React, {Component} from 'react';

class MostrarResultadoBusqueda extends Component
{
  
  
  render()
  {
      
    return (
        <div>
            <img src={this.props.data.Poster} alt={this.props.data.Title}></img>
            <h2>Titulo: {this.props.data.Title}</h2>
            <h2>Actores: {this.props.data.Actors}</h2>
            <h2>Genero: {this.props.data.Genre}</h2>
            <h2>Lenguaje: {this.props.data.Language}</h2>
        </div>
    );    
  }
}
export default MostrarResultadoBusqueda;