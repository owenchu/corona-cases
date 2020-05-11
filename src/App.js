import axios from 'axios';
import dayjs from 'dayjs';
import {
  Chip,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Link,
  Paper,
  Select,
  Typography,
} from '@material-ui/core';
import {
  makeStyles,
  useTheme,
} from '@material-ui/core/styles';
import React, {
  useEffect,
  useState,
} from 'react';
import {
  Bar,
  Line,
  BarChart,
  CartesianGrid,
  ComposedChart as RechartsComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function Chart(props) {
  const theme = useTheme();
  const {title, data, dataKey} = props;
  return (
    <>
      <Typography
        component='h2'
        variant='h6'
        color='primary'
        gutterBottom>
        {title}
      </Typography>
      {data &&
        <ResponsiveContainer height='100%' width='100%'>
          <BarChart
            data={data}
            margin={{
              top: theme.spacing(3),
              right: theme.spacing(3),
              bottom: theme.spacing(3),
              left: theme.spacing(3),
            }}>
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey='date' stroke={theme.palette.text.secondary} angle={-45} textAnchor='end' />
            <YAxis stroke={theme.palette.text.secondary} allowDecimals={false}/>
            <Tooltip />
            <Bar dataKey={dataKey} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      }
    </>
  );
}

function ComposedChart(props) {
  const theme = useTheme();
  const {title, data, primaryDataKey, secondaryDataKey} = props;
  return (
    <>
      <Typography
        component='h2'
        variant='h6'
        color='primary'
        gutterBottom>
        {title}
      </Typography>
      {data &&
        <ResponsiveContainer height='100%' width='100%'>
          <RechartsComposedChart
            data={data}
            margin={{
              top: theme.spacing(3),
              right: theme.spacing(3),
              bottom: theme.spacing(3),
              left: theme.spacing(3),
            }}>
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey='date' stroke={theme.palette.text.secondary} angle={-45} textAnchor='end' />
            <YAxis stroke={theme.palette.text.secondary} allowDecimals={false}/>
            <Tooltip />
            <Legend verticalAlign='top' height={30} />
            <Bar name={title} dataKey={primaryDataKey} fill="#8884d8" />
            <Line name='5-day Avg' type='monotone' dataKey={secondaryDataKey} stroke='#ff7300' dot={false} />
          </RechartsComposedChart>
        </ResponsiveContainer>
      }
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
  graphContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 300,
    padding: theme.spacing(2),
  },
}));

function App() {
  const [data, setData] = useState(null);
  const [counties, setCounties] = useState(null);
  const [selectedCounties, setSelectedCounties] = useState([
    'Alameda',
    'San Francisco',
    'San Mateo',
    'Santa Clara',
  ]);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://amazingshellyyy.com/covid19-api/US-CA/countyTimeseries.json');
        const rawData = result.data;
        const len = rawData.length;

        const prunedData = [];
        var lastUniqueDate = null;
        for (var i = len - 1; i >= 0; --i) {
          if (lastUniqueDate && dayjs(rawData[i].timeStamp).startOf('day').isSame(lastUniqueDate)) {
            continue;
          }
          lastUniqueDate = dayjs(rawData[i].timeStamp).startOf('day');
          prunedData.push({
            date: lastUniqueDate,
            data: rawData[i].data
          });
        }
        prunedData.reverse();
        setData(prunedData);

        const uniqueCounties = new Set();
        prunedData.forEach((v) => {
          v.data.forEach((d) => uniqueCounties.add(d.county));
        });
        setCounties(Array.from(uniqueCounties.keys()).sort());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSelectCounties = (e) => {
    const { options } = e.target;
    const values = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    setSelectedCounties(values);
  };

  if (!counties) {
    return <CircularProgress />;
  }

  const chartData = [];
  const selectedCountiesSet = new Set(selectedCounties) ;
  data.forEach((d) => {
    var cases = 0;
    var deaths = 0;
    d.data.forEach((entry) => {
      if (selectedCountiesSet.has(entry.county)) {
        cases += entry.case;
        deaths += entry.death;
      }
    });
    chartData.push({
      date: d.date.format('MM/DD'),
      cases,
      deaths,
    });
  });

  chartData.forEach((d, i, arr) => {
    if (i === 0) {
      arr[i].newCases = 0;
      arr[i].newDeaths = 0;
      arr[i].fiveDayAvgNewCases = 0;
      arr[i].fiveDayAvgNewDeaths = 0;
      return;
    }

    arr[i].newCases = arr[i].cases - arr[i - 1].cases;
    arr[i].newDeaths = arr[i].deaths - arr[i - 1].deaths;

    // Compute 5-day averages.
    var newCases = 0;
    var newDeaths = 0;
    var days = 0;
    for (var j = i; j >= 0 && (i - j) <= 4; --j) {
      newCases += arr[j].newCases;
      newDeaths += arr[j].newDeaths;
      ++days;
    }
    arr[i].fiveDayAvgNewCases = Math.ceil(newCases / days);
    arr[i].fiveDayAvgNewDeaths = Math.ceil(newDeaths / days);
  });

  return (
    <Container>
      <Grid container wrap='nowrap' spacing={4}>
        <Grid item xs={2}>
          <FormControl fullWidth margin='normal'>
            <InputLabel
              shrink
              htmlFor="select-counties">
              Select Counties
            </InputLabel>
            <Select
              multiple
              native
              autoFocus
              value={selectedCounties}
              inputProps={{
                id: 'select-counties',
                style: {
                  height: '80vh',
                },
              }}
              onChange={handleSelectCounties}>
              {counties.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
          </FormControl>
          <Typography>
            <Link href='https://www.counties.org/sites/main/files/imagecache/lightbox/main-images/california_county_map.jpg'>
              California County Map (https://counties.org)
            </Link>
          </Typography>
        </Grid>
        <Grid item container xs={10} spacing={4}>
          <Grid item xs={12}>
            {selectedCounties.map((c) => (
              <Chip
                className={classes.chip}
                key={c}
                label={c}
                color='primary'
                onDelete={() => {
                  setSelectedCounties(selectedCounties.filter((county) => c !== county));
                }} />
            ))}
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.graphContainer}>
              <ComposedChart title='New Cases' data={chartData} primaryDataKey='newCases' secondaryDataKey='fiveDayAvgNewCases' />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.graphContainer}>
              <ComposedChart title='New Deaths' data={chartData} primaryDataKey='newDeaths' secondaryDataKey='fiveDayAvgNewDeaths' />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.graphContainer}>
              <Chart title='Total Cases' data={chartData} dataKey='cases' />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.graphContainer}>
              <Chart title='Total Deaths' data={chartData} dataKey='deaths' />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Data source: <Link href='https://github.com/amazingshellyyy/covid19-api'>amazingshellyyy/covid19-api</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
