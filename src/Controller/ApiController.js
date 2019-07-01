import {Component} from 'react';

const url ="http://localhost:8080/contacto";
const urlGetContactos="/leerContacto";
const urlGetContactosById="/leerContacto/idBusqueda";
const urlInsertContacto="/insertarContacto/Contacto";
const urlUpdateContacto='/modificarContacto/Contacto';
const urlDeleteContacto='/borrarContacto/Contacto';
const urlDeleteComentario='/borrarComentario/Comentario';
const urlInsertComentario="/insertarComentario/Comentario"
const urlGetComentarioById="/leerComentario/idBusqueda"

class ApiController extends Component
{
   
    getContactos(okBusqueda)
    {
        const endpoint = `${url}${urlGetContactos}`;
        //console.log("Buscando")
       fetch(endpoint).then ((response) => {
            
            return response.json();
        }).then (responseData => {
                //console.log(responseData);
            
                //console.log("Recibi datos");
                okBusqueda(responseData);
                
          
          
          
        });
    }

    getComentario(okBusqueda)
    {
        const endpoint = `${url}${urlGetContactos}`;
        //console.log("Buscando")
       fetch(endpoint,{
        method: 'GET', // or 'PUT'
        mode: "cors",
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify() // data can be `string` or {object}!
    }).then ((response) => {
            
            return response.json();
        }).then (responseData => {
                //console.log(responseData);
            
                //console.log("Recibi datos");
                okBusqueda(responseData);
                
          
          
          
        });
    }

    getContactosById(data,okLogin,errorLogin)
    {   
        const endpoint = `${url}${urlGetContactosById}`;
        
        console.log("funcion",errorLogin)
        console.log("funcionok",okLogin)
        console.log(data);
       fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data) // data can be `string` or {object}!
        })
        .then ((response) => {
            
            return response.json();
        }).then (responseData => {
            if(responseData.length===0)
            {
                errorLogin();
            }
            else
            {
                console.log("data",data)
                okLogin(data.idUsuario);
            }
            return responseData
            
        })
        ;
    }
        getComentarioById(data,okComentario)
    {   
        const endpoint = `${url}${urlGetComentarioById}`;
        
        
        console.log(data);
       fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data) // data can be `string` or {object}!
        })
        .then ((response) => {
            
            return response.json();
        }).then((responseData)=>{
            
            okComentario(responseData)
        })
        ;

        


        
       
        
        
        
        
        
    }
    insertContacto(data,okInserto,yaExiste)
    {
        console.log("guardo contacto",data);
        
        
        const endpoint = `${url}${urlInsertContacto}`;
        console.log("Guardando");
            fetch (endpoint,{
            method:'POST',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            console.log("response");
            console.log(response);
            return response.json();
        }).then(err=>{
            if(err==='ya existe el usuario'){
                yaExiste();
            }else{
                okInserto();
            }
        })
        
    }

    insertComentario(data)
    {
        console.log("guardo comentario",data);
        
        
        const endpoint = `${url}${urlInsertComentario}`;
        console.log("Guardando");
            fetch (endpoint,{
            method:'POST',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            console.log("response");
            console.log(response);
            return response.json();
        })
        
    }
    updateContacto(data)
    {
        console.log("actualizo contacto",data);
        
        
        const endpoint = `${url}${urlUpdateContacto}`;
        console.log("Guardando");
            fetch (endpoint,{
            method:'POST',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            console.log("response");
            console.log(response);
            return response.json();
        })
        
    }
    deleteContacto(data)
    {
        console.log("elimino contacto",data);
        
        
        const endpoint = `${url}${urlDeleteContacto}`;
        console.log("Guardando");
            fetch (endpoint,{
            method:'DELETE',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            console.log("response");
            console.log(response);
            return response.json();
        })
        
    }

    deleteComentario(data)
    {
       
        
        
        const endpoint = `${url}${urlDeleteComentario}`;
        console.log("Guardando");
            fetch (endpoint,{
            method:'DELETE',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            console.log("response", response);
            
            
        }).then((responseData)=>{
            console.log(responseData)
        })
        
    }
}
export default new ApiController();