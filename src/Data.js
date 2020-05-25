import axios from 'axios';
import {
  useEffect,
  useState,
} from 'react';

import {normalizeCountyName} from './Utils';

// May need to use an LRU cache if more states are supported.
const cachedDataMap = new Map();

function useData(state, period) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const key = `${state.postalCode}_${period}`;
    const fetchData = async () => {
      try {
        if (cachedDataMap.has(key)) {
          setData(cachedDataMap.get(key));
          return;
        }

        const result = await axios.get(`https://corona.lmao.ninja/v2/historical/usacounties/${state.name.toLowerCase()}?lastdays=${period}`);
        result.data.forEach((d) => {
          if (d.county.startsWith('out of') || d.county === 'unassigned') {
            return;
          }
          const county = normalizeCountyName(state.name, d.county);
          if (!state.counties.has(county)) {
            console.error(`Unrecognized county returned by API: ${county}`);
          }
        });

        setData(result.data);
        cachedDataMap.set(key, result.data);
      } catch (error) {
        console.log(error);
        setData(null);
      }
    };
    fetchData();
  }, [state, period]);

  return data;
}

export {
  useData,
};
