//importaciones
import React from 'react'


export default function Food(props) {
 //console.log(props)
  const list = props.list
  const restaurants = props.restaurants
    //console.log(list)
    return (
        <>
        {/* USO DE FRAGMENTO, EN VEZ DE USAR DIVS, Siempre van e n un componente */}
            {
                list.map((e, index)=>{
                    return (
                        <div key={index}>
                        <p>La comida es: </p>
                        <p> {e}</p>
                        </div>
                    )
                })
            }
            <hr/>
            {
                restaurants.map((e, index)=>{
                    return (
                        <div key={index}>
                        <p>El restaurante se llama {e.nombre}, y su platillo es {e.platilloPrincipal}</p>
                        </div>
                    )
                })
            }
            {/* solo se puede tener un nodo padre por export */}
            {/* <div>
                <p>Esta es mi comida</p>
            </div> */}
            {/* <p>Hola, soy comida</p> */}
        </>
    )
}
