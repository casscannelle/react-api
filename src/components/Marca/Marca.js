// DataComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Marcas = () => {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
/*Solicitação*/
    axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter dados da API:', error);
      });
  }, []); 

  return (
    <div>
      <h2>Dados da API:</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Marcas;
