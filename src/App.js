import axios from 'axios';
import dayjs from 'dayjs';
import {
  AppBar,
  Checkbox,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  makeStyles,
  useTheme,
} from '@material-ui/core/styles';
import {
  ToggleButton,
  ToggleButtonGroup,
} from '@material-ui/lab';
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

import CountySelector from './CountySelector';
import States from './States';

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
              left: theme.spacing(1),
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
  const {title, data, primaryDataName, primaryDataKey, secondaryDataName, secondaryDataKey} = props;
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
              top: theme.spacing(1),
              right: theme.spacing(3),
              bottom: theme.spacing(3),
              left: theme.spacing(1),
            }}>
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey='date' stroke={theme.palette.text.secondary} angle={-45} textAnchor='end' />
            <YAxis stroke={theme.palette.text.secondary} allowDecimals={false}/>
            <Tooltip />
            <Legend verticalAlign='top' height={30} />
            <Bar name={primaryDataName} dataKey={primaryDataKey} fill="#8884d8" />
            {secondaryDataName && secondaryDataKey &&
              <Line name={secondaryDataName} type='monotone' dataKey={secondaryDataKey} stroke='#ff7300' dot={false} />
            }
          </RechartsComposedChart>
        </ResponsiveContainer>
      }
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  container: {
    width: 960,
    paddingTop: theme.spacing(2),
  },
  stateSelectionFormControl: {
    minWidth: 200,
  },
  chartControl: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(2),
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 300,
    padding: theme.spacing(2),
  },
}));

function App() {
  const numDays = 60;

  const [data, setData] = useState(null);
  const [selectedState, setSelectedState] = useState(States.get('California'));
  const [selectedCounties, setSelectedCounties] = useState(selectedState.counties);
  const [compact, setCompact] = useState(false);
  const [avgPeriodDays, setAvgPeriodDays] = useState(7);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`https://corona.lmao.ninja/v2/historical/usacounties/${selectedState.name.toLowerCase()}?lastdays=${numDays}`);
        setData(result.data);
        // TODO: Check possible anomalies (e.g., unrecognized counties) in data.
      } catch (error) {
        console.log(error);
        setData(null);
      }
    };
    fetchData();
  }, [selectedState]);

  if (!data) {
    return <CircularProgress />;
  }

  const chartData = [];
  for (var i = numDays - 1; i >= 0; --i) {
    chartData.push({
      date: dayjs().startOf('day').subtract(i, 'day').format('M/D'),
      cases: 0,
      deaths: 0,
      newCases: 0,
      newDeaths: 0,
      sevenDayAvgNewCases: 0,
      sevenDayAvgNewDeaths: 0,
    });
  }

  const today = dayjs().startOf('day');

  data.forEach((d) => {
    // https://alligator.io/js/capitalizing-strings/
    const county = d.county.trim().toLowerCase().replace(
        /\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

    if (!selectedCounties.has(county)) {
      return;
    }
    for (const date in d.timeline.cases) {
      const offset = numDays - today.diff(dayjs(date), 'day') - 1;
      if (offset >= 0) {
        chartData[offset].cases += d.timeline.cases[date];
      }
    }
    for (const date in d.timeline.deaths) {
      const offset = numDays - today.diff(dayjs(date), 'day') - 1;
      if (offset >= 0) {
        chartData[offset].deaths += d.timeline.deaths[date];
      }
    }
  });

  const lastEntry = chartData[chartData.length - 1];
  if (lastEntry.cases === 0 && lastEntry.deaths === 0) {
    chartData.pop();
  }

  chartData.forEach((d, i, arr) => {
    if (i === 0) {
      return;
    }

    arr[i].newCases = arr[i].cases - arr[i - 1].cases;
    arr[i].newDeaths = arr[i].deaths - arr[i - 1].deaths;

    // Compute 7-day averages.
    var newCases = 0;
    var newDeaths = 0;
    var days = 0;
    for (var j = i; j >= 0 && (i - j) < avgPeriodDays; --j) {
      newCases += arr[j].newCases;
      newDeaths += arr[j].newDeaths;
      ++days;
    }
    arr[i].sevenDayAvgNewCases = Math.ceil(newCases / days);
    arr[i].sevenDayAvgNewDeaths = Math.ceil(newDeaths / days);
  });

  return (
    <>
      <AppBar elevation={0}>
        <Toolbar>
          <Typography component='h1' variant='h5'>
            Corona Cases
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <FormControl className={classes.stateSelectionFormControl}>
                <InputLabel id='state-select-label'>State</InputLabel>
                <Select
                  id='state-select'
                  labelId='state-select-label'
                  value={selectedState.name}
                  onChange={(e) => {
                    setSelectedState(States.get(e.target.value));
                    setSelectedCounties(States.get(e.target.value).counties)
                  }} >
                  {Array.from(States.keys()).map((s) =>
                    <MenuItem key={s} value={s}>{s}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <CountySelector
                state={selectedState}
                selectedCounties={selectedCounties}
                onChange={setSelectedCounties} />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                className={classes.chartControl}
                control={
                  <Checkbox
                    color='primary'
                    checked={compact}
                    onChange={() => setCompact(!compact)} />
                }
                label={
                  <Typography variant='button'>
                    Compact
                  </Typography>
                } />
              <ToggleButtonGroup
                className={classes.chartControl}
                exclusive
                size='small'
                value={avgPeriodDays}
                onChange={(e, v) => setAvgPeriodDays(v)}>
                <ToggleButton value={3}>3-day avg</ToggleButton>
                <ToggleButton value={5}>5-day avg</ToggleButton>
                <ToggleButton value={7}>7-day avg</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item xs={compact ? 6 : 12}>
              <Paper className={classes.chartContainer} variant='outlined'>
                <ComposedChart
                  title='New Cases'
                  data={chartData}
                  primaryDataName='New cases'
                  primaryDataKey='newCases'
                  secondaryDataName={avgPeriodDays && `${avgPeriodDays}-day average`}
                  secondaryDataKey={avgPeriodDays && 'sevenDayAvgNewCases'} />
              </Paper>
            </Grid>
            <Grid item xs={compact ? 6 : 12}>
              <Paper className={classes.chartContainer} variant='outlined'>
                <ComposedChart
                  title='New Deaths'
                  data={chartData}
                  primaryDataName='New deaths'
                  primaryDataKey='newDeaths'
                  secondaryDataName={avgPeriodDays && `${avgPeriodDays}-day average`}
                  secondaryDataKey={avgPeriodDays && 'sevenDayAvgNewDeaths'} />
              </Paper>
            </Grid>
            <Grid item xs={compact ? 6 : 12}>
              <Paper className={classes.chartContainer} variant='outlined'>
                <Chart title='Total Cases' data={chartData} dataKey='cases' />
              </Paper>
            </Grid>
            <Grid item xs={compact ? 6 : 12}>
              <Paper className={classes.chartContainer} variant='outlined'>
                <Chart title='Total Deaths' data={chartData} dataKey='deaths' />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Data source: <Link href='https://github.com/NovelCOVID/API'>NovelCOVID/API</Link>
              </Typography>
              <Typography>
                California map: <Link href='https://commons.wikimedia.org/wiki/Main_Page'>Wikimedia Commons</Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
