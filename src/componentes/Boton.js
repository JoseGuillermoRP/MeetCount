import React from 'react';
import '../hojas-de-estilos/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClic, className }) {
  const partes = texto.split(" ");
  const primeraParte = partes[0];
  const restoTexto = partes.slice(1).join(" ");

  return (
    <button
      className={`${esBotonDeClic ? "btn--primary" : "btn--secondary"} ${className || ""}`}
      onClick={manejarClic}
    >
      {esBotonDeClic ? (
        <>
          <span className="btn-numero">{primeraParte}</span>
          {restoTexto && <span className="btn-texto">{restoTexto}</span>}
        </>
      ) : (
        <span className="btn-label">{texto}</span>
      )}
    </button>
  );
}

export default Boton;