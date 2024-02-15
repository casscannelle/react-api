import React, { useState } from 'react';
import axios from 'axios';
import CarForm from './components/Carro/Carro';
import CarInfo from './components/Resultado/Resultado';
import './App.css'

const App = () => {
  const [carInfo, setCarInfo] = useState(null);

  const searchCar = ({ ano, marca, modelo }) => {
    axios.get(`https://parallelum.com.br/fipe/api/${marca}/${modelo}/${ano}.json`)
      .then(response => {
        setCarInfo(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar informações do carro:', error);
        setCarInfo(null);
      });
  };

  return (
    <div>
      <h1>Busca na Tabela FIPE</h1>
      <CarForm onSearch={searchCar} />
      {carInfo && <CarInfo carInfo={carInfo} />}
    </div>
  );
};

export default App;
