import {useEffect, useState} from 'react';
import {PortfolioResponse} from '../types/PortfolioResponse';

export const useFetchPortfolioData = () => {
  const [data, setData] = useState<null | PortfolioResponse>(null);
  useEffect(() => {
    // we can use axios insted of this
    fetch('https://35dee773a9ec441e9f38d5fc249406ce.api.mockbin.io/')
      .then(data => data.json())
      .then((response: PortfolioResponse) => {
        setData(response);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return {data};
};
