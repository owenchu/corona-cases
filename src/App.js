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
import React, {useState} from 'react';
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
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

import CountySelector from './CountySelector';
import {useData} from './Data';
import {NormalizeCountyName} from './Utils';
import States from './States';

function Chart(props) {
  const theme = useTheme();
  const {title, data, dataKey} = props;
  return (
    <>
      <Typography
        component='h2'
        variant='h6'
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
            <Bar dataKey={dataKey} fill="#32afa9" />
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
            <Bar name={primaryDataName} dataKey={primaryDataKey} fill="#32afa9" />
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
  logo: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    width: 960,
    paddingTop: theme.spacing(2),
  },
  stateSelectionFormControl: {
    minWidth: 200,
    marginRight: theme.spacing(2),
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

function Main(props) {
  const {state} = props;
  const [period, setPeriod] = useState(60);
  const data = useData(state, period);
  const [selectedRegions, setSelectedRegions] = useState(new Set(state.regions.keys()));
  const [selectedCounties, setSelectedCounties] = useState(state.counties);
  const [compact, setCompact] = useState(false);
  const [avgPeriodDays, setAvgPeriodDays] = useState(7);
  const history = useHistory();
  const classes = useStyles();

  if (!data) {
    return <CircularProgress />;
  }

  const handleCountyToggle = (county) => {
    const newSelectedCounties = new Set(selectedCounties);
    if (selectedCounties.has(county)) {
      newSelectedCounties.delete(county);
    } else {
      newSelectedCounties.add(county);
    }
    setSelectedCounties(newSelectedCounties);
  };
  const handleRegionToggle = (region) => {
    const newSelectedRegions = new Set(selectedRegions);
    const newSelectedCounties = new Set(selectedCounties);
    if (selectedRegions.has(region)) {
      newSelectedRegions.delete(region);
      state.regions.get(region).forEach((county) => {
        newSelectedCounties.delete(county);
      })
    } else {
      newSelectedRegions.add(region);
      state.regions.get(region).forEach((county) => {
        newSelectedCounties.add(county);
      })
    }
    setSelectedRegions(newSelectedRegions);
    setSelectedCounties(newSelectedCounties);
  };
  const handleSelectionModeChange = () => {
    setSelectedRegions(new Set(state.regions.keys()));
    setSelectedCounties(state.counties);
  };
  const handleSelectAll = () => {
    setSelectedRegions(new Set(state.regions.keys()));
    setSelectedCounties(state.counties);
  };
  const handleClearAll = () => {
    setSelectedRegions(new Set());
    setSelectedCounties(new Set());
  };

  const chartData = [];
  for (var i = period - 1; i >= 0; --i) {
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
    // Normalize county names: https://alligator.io/js/capitalizing-strings.
    const county = NormalizeCountyName(state.name, d.county);

    if (!selectedCounties.has(county)) {
      return;
    }
    for (const date in d.timeline.cases) {
      const offset = period - today.diff(dayjs(date), 'day') - 1;
      if (offset >= 0) {
        chartData[offset].cases += d.timeline.cases[date];
      }
    }
    for (const date in d.timeline.deaths) {
      const offset = period - today.diff(dayjs(date), 'day') - 1;
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

    // Compute N-day averages.
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
          <Typography className={classes.logo} component='h1' variant='h5'>
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
                  value={state.name}
                  onChange={(e) => {
                    const stateName = e.target.value;
                    history.push(`/${States.get(stateName).postalCode}`)
                  }} >
                  {Array.from(States.keys()).map((s) =>
                    <MenuItem key={s} value={s}>{s}</MenuItem>
                  )}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id='period-select-label'>Period</InputLabel>
                <Select
                  id='period-select'
                  labelId='Period-select-label'
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)} >
                  <MenuItem value={30}>Last 30 days</MenuItem>
                  <MenuItem value={60}>Last 60 days</MenuItem>
                  <MenuItem value={90}>Last 90 days</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <CountySelector
                state={state}
                selectedCounties={selectedCounties}
                onCountyToggle={handleCountyToggle}
                selectedRegions={selectedRegions}
                onRegionToggle={handleRegionToggle}
                onSelectionModeChange={handleSelectionModeChange}
                onSelectAll={handleSelectAll}
                onClearAll={handleClearAll} />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                className={classes.chartControl}
                control={
                  <Checkbox
                    color='default'
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
                GitHub repo: <Link href='https://github.com/owenchu/corona-cases'>owenchu/corona-cases</Link>
              </Typography>
              <Typography>
                Data source: <Link href='https://github.com/NovelCOVID/API'>NovelCOVID/API</Link>
              </Typography>
              <Typography>
                Maps: <Link href='https://commons.wikimedia.org/wiki/Main_Page'>Wikimedia Commons</Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

function App() {
  const routes = Array.from(States.keys()).map((stateName) => {
    const state = States.get(stateName);
    return (
      <Route key={stateName} path={`/${state.postalCode}`}>
        <Main state={state} />
      </Route>
    );
  });
  return (
    <Router>
      <Switch>
        {routes}
        <Route path='*'>
          <Main state={States.get('California')} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
