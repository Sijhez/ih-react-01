//1. IMPORTACIONES
import React from "react";
import Food from "./Food";
import Movies from "./Movies";


//2. FUNCIONES
function Main(){
    

    const foodList =[
        "tamales",
        "tortas",
        "tacos"
    ]

    const restaurantList = [
        {nombre:"McDonalds",
        platilloPrincipal: "Hamburguesas"},
        {nombre:"Pizza Hut",
         platilloPrincipal:"Pizza"     
    },
        {nombre: "La casa de Toño",
    platilloPrincipal:"Taquitos de cochinita"}
    ]

    const moviesList = [
        {nombre:"Pulp Fiction",
         year:"1996"},
        {nombre:"Fight Club",
        year:"2001"},
        {nombre:"Matrix",
        year:"2000"}
    ]

    return (
        <>
        <Food list={foodList} restaurants={restaurantList}/>
        <Movies movies={moviesList}/>
        </>
    )
}



//3. EXPORTACIONES
export default Main