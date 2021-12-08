import { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../api';

const useFetch = (endpoint) => {
  // -- state
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // -- side effects
  useEffect(() => {
    axios
      .get(`${API}${endpoint}`)
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [endpoint]);

  return [loading, data, error];
};

export default useFetch;
