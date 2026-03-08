import React from 'react';
import'../hojas-de-estilos/Contador.css';


function Contador({ numClics }) {
  return (
    <div className="contador-card">
      <div className="contador-numero">{numClics}</div>
      <div className="contador-label">Asistentes</div>
      <div className="contador-arco"></div>
    </div>
  );
}

export default Contador;