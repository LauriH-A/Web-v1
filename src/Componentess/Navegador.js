import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import logins from './login';
import inicio from './inicio';
import {Navbar,Nav,Form} from 'react-bootstrap';
import calificadas from './Calificadas';
import calificadaTodos from './CalificacionesTodos';

class Navegador extends Component{
  
  constructor(){
    super();
    this.state={
      logueado:localStorage.getItem("usuarioLogueado")!==null
    }
  }

  logOut=(e)=>{
    
    this.setState({logueado:false})
    localStorage.clear();
  }



  
  
  render(){
    
    const noLogueado = (
      <Navbar bg="light" expand="lg">
  <Navbar.Brand>UADE CINE</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    
    <Form inline>
    <Nav className="mr-auto">
      <Nav.Link  href='/' >Iniciar sesion</Nav.Link>
      </Nav>
    </Form>
  </Navbar.Collapse>
</Navbar>
  )

  const Logueado = (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand>UADE CINE</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href='/inicio' >inicio</Nav.Link>
      
      <Nav.Link href='/calificadas'>Calificadas</Nav.Link>
      <Nav.Link href='/calificacionTodos'>Comunidad</Nav.Link>
     
     
    </Nav>
    <Form inline>
    <Nav className="mr-auto">
      <Nav.Link  href={'/'} onClick={this.logOut.bind(this)}>Cerrar Sesion</Nav.Link>
      </Nav>
    </Form>
  </Navbar.Collapse>
</Navbar>
  )
    return(
      


<Router>

{this.state.logueado ? Logueado : noLogueado}

<Route path='/' exact component={logins}/>

<Route path='/calificadas' component={calificadas}/>
<Route path='/calificacionTodos' component={calificadaTodos}/>
<Route path='/inicio' component={inicio}/>

</Router>


    )
    }
  }

  export default Navegador;