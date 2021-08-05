import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
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
      .catch(error => toast.error(error.message));
  }, []);

  return { types };
};
