//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

//ESTE FORMATO NO ES HTML COMPLETAMENTE, SINO TAMBIÉN INVOLUCR JAVASCRIPT SIMULTANEO
//HTML +JS = JSX

  
    //Manejo de variables y otras funciones:
    function App(){
      const bootcamp = "Ironhack"
      return ( 
      <div className="App">
    <Header nombre="Sinuhe" ciudad="CDMX"/>
    {/* <Header nombre="Mike" ciudad="Veracruz"/>
    <Header nombre="K'onhin" ciudad="Hidalgo"/> */}
           <p>Hola Mundo</p>
        <p>El Sijhez</p>
         <p>{6*5}</p> 
        <p>{bootcamp}</p>
  <hr/>

  <Main/>
  
  <hr/>

    <Footer pais="México"/>
    <Footer pais="USA"/>
    <Footer pais="La Ching..."/>
     

    </div>
    );
    }
    
  

export default App;
