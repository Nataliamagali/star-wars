import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ObiWanImage from '../images/obi-wan.jpg'; 
function ResourceDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        setData(response.data);

        if (response.data.homeworld) {
          const homeworldResponse = await axios.get(response.data.homeworld);
          setData(prevData => ({
            ...prevData,
            homeworld: homeworldResponse.data.name
          }));
        }
      } catch (err) {
        setError("No se pudo cargar el recurso");
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {error ? (
        <div>
          <p>{error}</p>
          <img 
            src={ObiWanImage} 
            alt="Obi-Wan Kenobi" 
            style={{ width: '200px', height: 'auto' }} 
          />
        </div>
      ) : data ? (
        <div>
          <h1>{data.name}</h1>
          <p>Height: {data.height}</p>
          <p>Mass: {data.mass}</p>
          <p>Hair Color: {data.hair_color}</p>
          <p>Skin Color: {data.skin_color}</p>
          {data.homeworld && <p>Homeworld: {data.homeworld}</p>}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ResourceDetail;
