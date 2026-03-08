import React from 'react';
import'../hojas-de-estilos/Boton.css';



function Boton({texto,esBotonDeClic, manejarClic}){
    return(
        <button
        className= { esBotonDeClic ? 'btn--primary' : 'btn--secondary' }
        onClick={manejarClic}>
        {texto}
        </button>

        
    )
}

export default Boton;