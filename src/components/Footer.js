//1. importaciones
import React from "react";

//2. Funcion
function Footer(props){
   return (
       <p className="rojito">Este es el footer, me ves desde {props.pais}</p>
       
   )

}


//3. Exportacion
//parecido a module.exports = Header de Mongo
export default Footer