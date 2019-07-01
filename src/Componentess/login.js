import React, {Component} from "react";
import ReactDOM from 'react-dom';
import BotonRegisto from './BotonRegisto'
import { Container ,Form, Button, Nav} from "react-bootstrap";
import {Row,Col} from 'react-flexbox-grid';
import ApiController from '../Controller/ApiController'
import Navegador from "./Navegador";
import Inicio from "./inicio";
import {Redirect,Link} from "react-router-dom";
class Logins extends Component{
constructor(){
  super();
  this.state={
    idUsuario:'',
    contraseña:'',
    sesionIniciada:false
  }
}

onChangeUsuario=(e)=>{
  this.setState({idUsuario:e.target.value})
}
onChangeContaseña=(e)=>{
  this.setState({contraseña:e.target.value})
}


onChangeUsuario=this.onChangeUsuario.bind(this);
onChangeContaseña=this.onChangeContaseña.bind(this);
ingresar=(e)=>{
      let data={
        idUsuario:this.state.idUsuario,
        contraseña:this.state.contraseña
      }
        ApiController.getContactosById(data,this.okLogin.bind(this),this.errorLogin.bind(this));
      
      
      this.setState({idUsuario:"",contraseña:""})
      e.preventDefault();
      
      
}


okLogin(idUsuario){
  
  console.log("id",idUsuario)
  localStorage.setItem('usuarioLogueado',idUsuario);
  this.props.history.push('/inicio')
  ReactDOM.render(
    <Navegador/>,document.getElementById('root')
  )
  
  
}
errorLogin()
{
  alert("No existe un usuario con esos datos");
}

render(){
    return ( 
      
      <div>
    <Container style={{background:"lightblue"}}>

    <Row>
    
      <Col>
      
      <Form style={{padding:"10px 30px"}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Usuario</Form.Label>
    <Form.Control type='text' placeholder="Usuario..." onChange={this.onChangeUsuario} value={this.state.idUsuario}
    />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Contraseña..." onChange={this.onChangeContaseña} value={this.state.contraseña}/>
  </Form.Group>
  
  
  <Button type='submit' href='/' style={{margin:"10px"}} onClick={this.ingresar}>
        Ingresar
      </Button>
  <BotonRegisto/>
</Form>
      </Col>
    </Row>
    </Container>
    
    </div>
    
    )
}
}
    

export default Logins;
