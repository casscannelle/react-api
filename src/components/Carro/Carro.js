import React, { useState } from 'react';


const CarForm = ({ onSearch }) => {
  const [ano, setAno] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ ano, marca, modelo });
  };

  return (
    <form className="Formulario" onSubmit={handleSubmit}>
      <div>
        <label>
        <p>Ano:</p>
        <input type="text" value={ano} onChange={(e) => setAno(e.target.value)} />
      </label>
      </div>
      <div>
      <label>
        <p>Marca:</p>
        <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
      </label>
      </div>
      <div>
      <label>
        <p>Modelo:</p>
        <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
      </label>
      </div>
      <div>
      <button type="submit">Buscar</button>
      </div>
    </form>
  );
};

export default CarForm;
