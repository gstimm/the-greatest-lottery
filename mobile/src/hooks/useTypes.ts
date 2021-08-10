import { useEffect, useState } from 'react';
import { Game } from '../interfaces';
import api from '../services/api';

export const useTypes = () => {
  const [types, setTypes] = useState<Game[]>([]);

  useEffect(() => {
    api
      .get('/games')
      .then(({ data }) => {
        setTypes(data);
      })
      .catch(error => console.log(error.message));
  }, []);

  return { types };
};
