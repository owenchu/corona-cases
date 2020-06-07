import axios from 'axios';
import dayjs from 'dayjs';
import {
  useEffect,
  useState,
} from 'react';

import {normalizeCountyName} from './Utils';

// Always fetch 90 days of data.
const NUM_DAYS = 90;

function useData(state, todayTimestamp) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`https://corona.lmao.ninja/v2/historical/usacounties/${state.name.toLowerCase()}?lastdays=${NUM_DAYS}`);
        const map = new Map();
        const today = dayjs(todayTimestamp);

        result.data.forEach((d) => {
          if (d.county.startsWith('out of') || d.county === 'unassigned') {
            return;
          }

          const county = normalizeCountyName(state.name, d.county);
          if (!state.counties.has(county)) {
            console.error(`Unrecognized county returned by API: ${county}`);
            return;
          }

          const timeline = {};
          timeline.cases = Array(90).fill(0);
          for (const date in d.timeline.cases) {
            const offset = NUM_DAYS - today.diff(dayjs(date), 'day') - 1;
            if (offset >= 0) {
              timeline.cases[offset] = d.timeline.cases[date];
            }
          }
          timeline.deaths = Array(90).fill(0);
          for (const date in d.timeline.deaths) {
            const offset = NUM_DAYS - today.diff(dayjs(date), 'day') - 1;
            if (offset >= 0) {
              timeline.deaths[offset] = d.timeline.deaths[date];
            }
          }
          map.set(county, timeline);
        });

        setData(map);
      } catch (error) {
        console.log(error);
        setData(null);
      }
    };
    fetchData();
  }, [state, todayTimestamp]);

  return data;
}

export {
  useData,
};
