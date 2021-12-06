//1. importaciones
import React from "react";

//2. Funcion
function Header(props){
     console.log(props)
   return ( //invocacion de los parametros invocados en Header nombre = "Sinuhe"
       <p>Hola, soy el header, bienvenido {props.nombre}, de la ciudad {props.ciudad}</p>
   )

}


//3. Exportacion
//parecido a module.exports = Header de Mongo
export default Header