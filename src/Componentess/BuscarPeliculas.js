import  {Component} from 'react';
import imagenSinLogo from '../imagenes/sinPoster.jpg';

const url ="http://www.omdbapi.com/?i=tt3896198&apikey=";
const apiKEY="d0b64143";

class BuscarPeliculas extends Component
{
   
    createData(item,idArray) 
    {

        if (item.Poster === "N/A")
        {
            return { 
                id: idArray,
                img : imagenSinLogo,
                title: item.Title,
                author: item.Year,     
                };
        }
        else
        {
            return {  
           
            id: idArray,
            img: item.Poster,
            title: item.Title,
            author: item.Year,     
            };
        }
    }

    invocar(title,okBusqueda,failBusqueda)
    {
        const endpoint = `${url}${apiKEY}&t=${title}`;
        console.log("Buscando")
        fetch(endpoint
        ).then ((response) => {
            
            return response.json();
        }).then (responseData => {
            console.log(responseData);
            
                console.log("Entre");
                const {Title,Actors,Genre,Language,Poster}= responseData;
                const newData = {Title: Title, Genre: Genre,Actors: Actors, Language: Language, Poster: Poster};
            //console.log(newData);
                okBusqueda(newData)
          
          
          
        });
    }
    invocarPeliculas(title,okBusqueda,failBusqueda)
    {   
        const endpoint = `${url}${apiKEY}&s=${title}`;
        console.log("Buscando todas las peliculas")
        fetch(endpoint
        ).then ((response) => {
            
            return response.json();
        }).then (responseData => {
            console.log("response peliculas",responseData);
            
            var i,newArray = [];
            for (i = 0; i < responseData.Search.length; i++) 
            {
                newArray.push(this.createData(responseData.Search[i],i));
            }
          
               
                okBusqueda(newArray)
          
          
          
        });
    }
    invocarPeliculasCalificadas(arreglo,okBusqueda,failBusqueda)
    {   var w;
        
        for(w=0;w<arreglo.length;w++){
            let endpoint = `${url}${apiKEY}&s=${arreglo[w]}`;
            console.log("Buscando todas las peliculas")
            fetch(endpoint
            ).then ((response) => {
            
              return response.json();
            }).then (responseData => {
             console.log("response peliculas",responseData);
            
                var i,newArray = [];
                for (i = 0; i < responseData.Search.length; i++) 
                {
                 newArray.push(this.createData(responseData.Search[i],i));
             }
          
               
                   okBusqueda(newArray)
          
          
          
            });
     }
}
}
export default new BuscarPeliculas();