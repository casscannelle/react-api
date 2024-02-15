// src/components/CarInfo.js
import React from 'react';

const CarInfo = ({ carInfo }) => {
  return (
    <div>
      <h2>Informações do Carro</h2>
      <p>Ano: {carInfo.Ano}</p>
      <p>Marca: {carInfo.Marca}</p>
      <p>Modelo: {carInfo.Modelo}</p>
      <p>Preço: {carInfo.Valor}</p>
    </div>
  );
};

export default CarInfo;
