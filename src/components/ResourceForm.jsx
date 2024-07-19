import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ObiWanImage from '../images/obi-wan.jpg'; 
function ResourceForm() {
  const [resource, setResource] = useState('people');
  const [id, setId] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(null);
    try {
      await axios.get(`https://swapi.dev/api/${resource}/${id}/`);
      navigate(`/${id}`);
    } catch (err) {
      setError("Estos no son los droides que está buscando");
    }
  };

  return (
        <div className="container">
      <div className="header-group">
        <h1>Search For:</h1>
        <div className="form-group"></div>
      <select value={resource} onChange={(e) => setResource(e.target.value)}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
        <option value="vehicles">Vehicles</option>
        <option value="species">Species</option>
      </select>
      <input 
        type="number" 
        value={id} 
        onChange={(e) => setId(e.target.value)} 
        placeholder="Ingrese ID" 
      />
      <button onClick={handleSubmit}>Enviar</button>
      {error && (
        <div>
          <p>{error}</p>
          <img 
            src={ObiWanImage} 
            alt="Obi-Wan Kenobi" 
            style={{ width: '200px', height: 'auto' }} 
          />
        </div>
      )}
    </div>
    </div>
  );
}

export default ResourceForm;
