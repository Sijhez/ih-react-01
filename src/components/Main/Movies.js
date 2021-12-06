import React from 'react'

export default function Movies(props) {
     const movies = props.movies

   return (
        <>{

        
            movies.map((e, index) =>{
                return (
                   <div key={index}>
                       <h1>{e.nombre}</h1>
                   <p>Año de lanzamiento: {e.year}</p>
                   </div>
               )
           })
        } 
        </>
        
    )
}
