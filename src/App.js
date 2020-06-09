import dayjs from 'dayjs';
import {
  AppBar,
  Card,
  CardContent,
  CardHeader,
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
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';

import CountySelector from './CountySelector';
import {useData} from './Data';
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

// Returns a set of enabled items.
//
// `allItems` is an array of items that can either be enabled or disabled
// according to `bitmaps`. `bitmaps` is a string formed by joining a list of
// bitmaps with the separator '_'; each bitmap is a 32-bit signed integer.
//
// For example, if `bitmaps` in its binary format is as follows:
//
//   11000000000000000000000000000110
//
// Then the 1st, 2nd, 30th, 31st items are enabled.
function getEnabledItemsFromBitmaps(allItems, bitmaps) {
  const enabledItems = new Set();
  const arr = bitmaps.split('_').map((b) => parseInt(b, 10));
  const mask = 1 << 31;
  arr.forEach((n, i) => {
    let index = i * 32;
    while (n !== 0) {
      if (n & mask) {
        enabledItems.add(allItems[index]);
      }
      n <<= 1;
      ++index;
    }
  });
  return enabledItems;
}

function getBitmapsfromEnabledItems(enabledItems, allItems) {
  const arr = [];
  let index = -1;
  allItems.forEach((region, i) => {
    if (i % 32 === 0) {
      arr.push(0);
      ++index;
    }
    if (enabledItems.has(region)) {
      arr[index] |= (1 << (31 - i%32));
    }
  })
  return arr.join('_');
}

const VALID_PARAMS = new Set([
  // Period
  'p',
  // Mode
  'm',
  // Regions
  'r',
  // Counties
  'c',
]);

// To print numbers in binary format for debugging, see
// https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript/9939785.
function useParams(state) {
  const history = useHistory();
  const location = useLocation();
  const [currentRegions, setCurrentRegions] = useState(new Set());
  const [currentCounties, setCurrentCounties] = useState(new Set());
  const query = new URLSearchParams(location.search);

  useEffect(() => {
    const q = new URLSearchParams(location.search);
    const regionMode = (q.get('m') !== 'c') && (state.regions.size > 0);

    if (regionMode) {
      const r = q.get('r');
      let regions;
      let counties;
      if (r) {
        regions = getEnabledItemsFromBitmaps(
            Array.from(state.regions.keys()), r);
        counties = new Set();
        regions.forEach((region) => {
          state.regions.get(region).forEach((county) => {
            counties.add(county);
          });
        });
      } else {
        regions = new Set(state.regions.keys());
        counties = new Set(state.counties.keys());
      }
      setCurrentRegions(regions);
      setCurrentCounties(counties);
    } else {
      const c = q.get('c');
      let counties;
      if (c) {
        counties = getEnabledItemsFromBitmaps(
            Array.from(state.counties.keys()), c);
      } else {
        counties = new Set(state.counties.keys());
      }
      setCurrentCounties(counties);
    }
  }, [location.search, state]);

  const refreshPage = (newState) => {
    const statePostalCode = newState ? newState.postalCode : state.postalCode;
    if (newState) {
      // Clear selected regions and counties before loading a new state.
      query.delete('r');
      query.delete('c');
    }
    // Clean up invalid params
    const q = new URLSearchParams()
    query.forEach((value, key) => {
      if (VALID_PARAMS.has(key)) {
        q.set(key, value);
      }
    });
    const queryStr = q.toString();
    history.replace(`/${statePostalCode}${queryStr ? `?${queryStr}` : ''}`);
  };

  return {
    get period() {
      return query.get('p') || 60;
    },
    setPeriod(p) {
      query.set('p', p);
      refreshPage();
    },

    get regionMode() {
      return (query.get('m') !== 'c') && (state.regions.size > 0);
    },
    setRegionMode(m) {
      if (m) {
        // Switch to region mode.
        query.set('m', 'r');
        query.delete('c');
      } else {
        // Switch to county mode.
        query.set('m', 'c');
        query.delete('r');
      }
      refreshPage();
    },

    get selectedRegions() {
      return currentRegions;
    },
    setSelectedRegions(regions) {
      const r = getBitmapsfromEnabledItems(
          regions, Array.from(state.regions.keys()));
      query.set('r', r);
      refreshPage();
    },

    get selectedCounties() {
      return currentCounties;
    },
    setSelectedCounties(counties) {
      const c = getBitmapsfromEnabledItems(
          counties, Array.from(state.counties.keys()));
      query.set('c', c);
      refreshPage();
    },

    refreshPage,
  };
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
  card: {
    height: '100%',
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
  const today = dayjs().startOf('day');
  const yesterday = today.subtract(1, 'day');

  const {state} = props;
  const params = useParams(state);
  const data = useData(state, today.valueOf());
  const [compact, setCompact] = useState(false);
  const [avgPeriodDays, setAvgPeriodDays] = useState(7);
  const classes = useStyles();

  if (!data) {
    return <CircularProgress />;
  }

  const handleModeToggle = () => {
    params.setRegionMode(!params.regionMode);
  };
  const handleRegionToggle = (region) => {
    const newSelectedRegions = new Set(params.selectedRegions);
    if (params.selectedRegions.has(region)) {
      newSelectedRegions.delete(region);
    } else {
      newSelectedRegions.add(region);
    }
    params.setSelectedRegions(newSelectedRegions);
  };
  const handleCountyToggle = (county) => {
    const newSelectedCounties = new Set(params.selectedCounties);
    if (params.selectedCounties.has(county)) {
      newSelectedCounties.delete(county);
    } else {
      newSelectedCounties.add(county);
    }
    params.setSelectedCounties(newSelectedCounties);
  };
  const handleSelectAll = () => {
    if (params.regionMode) {
      params.setSelectedRegions(new Set(state.regions.keys()));
    } else {
      params.setSelectedCounties(new Set(state.counties.keys()));
    }
  };
  const handleClearAll = () => {
    if (params.regionMode) {
      params.setSelectedRegions(new Set());
    } else {
      params.setSelectedCounties(new Set());
    }
  };

  const chartData = [];
  for (var i = params.period - 1; i >= 0; --i) {
    chartData.push({
      date: dayjs().startOf('day').subtract(i, 'day').format('M/D'),
      cases: 0,
      deaths: 0,
      newCases: 0,
      newDeaths: 0,
      nDayAvgNewCases: 0,
      nDayAvgNewDeaths: 0,
    });
  }

  data.forEach((timeline, county) => {
    if (!params.selectedCounties.has(county)) {
      return;
    }
    for (let i = 0; i < params.period; ++i) {
      const offset = 90 - params.period + i;
      chartData[i].cases += timeline.cases[offset];
      chartData[i].deaths += timeline.deaths[offset];
    }
  });

  let chartDataSize = chartData.length;
  let lastDataEntry = chartData[chartDataSize - 1];
  if (lastDataEntry.cases === 0 && lastDataEntry.deaths === 0) {
    chartData.pop();
    chartDataSize -= 1;
    lastDataEntry = chartData[chartDataSize - 1];
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
    arr[i].nDayAvgNewCases = Math.ceil(newCases / days);
    arr[i].nDayAvgNewDeaths = Math.ceil(newDeaths / days);
  });

  var population = 0;
  params.selectedCounties.forEach((c) => {
    population += state.counties.get(c).population;
  });

  // https://coronavirus.jhu.edu/data/mortality
  const casesPer100kPopulation = lastDataEntry.cases ?
      Math.ceil(lastDataEntry.cases / population * 100000) : 0;
  const deathsPer100kPopulation = lastDataEntry.deaths ?
      Math.ceil(lastDataEntry.deaths / population * 100000) : 0;
  const deathsPer100Cases = (lastDataEntry.cases && lastDataEntry.deaths) ?
      Math.ceil(lastDataEntry.deaths / lastDataEntry.cases * 100) : 0;

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
                    params.refreshPage(States.get(stateName));
                  }}>
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
                  value={params.period}
                  onChange={(e) => params.setPeriod(e.target.value)} >
                  <MenuItem value={30}>Last 30 days</MenuItem>
                  <MenuItem value={60}>Last 60 days</MenuItem>
                  <MenuItem value={90}>Last 90 days</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <CountySelector
                state={state}
                regionMode={params.regionMode}
                onModeToggle={handleModeToggle}
                selectedRegions={params.selectedRegions}
                onRegionToggle={handleRegionToggle}
                selectedCounties={params.selectedCounties}
                onCountyToggle={handleCountyToggle}
                onSelectAll={handleSelectAll}
                onClearAll={handleClearAll} />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Card className={classes.card} variant='outlined'>
                    <CardHeader title='Population' subheader='2019 census data (census.gov)' />
                    <CardContent>
                      <Typography component='h2' variant='h3'>
                        {population.toLocaleString()}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card className={classes.card} variant='outlined'>
                    <CardHeader
                      title='Cases'
                      subheader={
                        today.format('M/D') === lastDataEntry.date ?
                          today.format('MMMM D, YYYY') :
                          yesterday.format('MMMM D, YYYY')
                      }
                    />
                    <CardContent>
                      <Typography component='h2' variant='h3'>
                        {lastDataEntry.cases.toLocaleString()}
                      </Typography>
                      <Typography color='textSecondary'>
                        {casesPer100kPopulation.toLocaleString()} per 100,000 population
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card className={classes.card} variant='outlined'>
                    <CardHeader
                      title='Deaths'
                      subheader={
                        today.format('M/D') === lastDataEntry.date ?
                          today.format('MMMM D, YYYY') :
                          yesterday.format('MMMM D, YYYY')
                      }
                    />
                    <CardContent>
                      <Typography component='h2' variant='h3'>
                        {lastDataEntry.deaths.toLocaleString()}
                      </Typography>
                      <Typography color='textSecondary'>
                        {deathsPer100kPopulation.toLocaleString()} per 100,000 population
                      </Typography>
                      <Typography color='textSecondary'>
                        {deathsPer100Cases.toLocaleString()} per 100 cases
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
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
                  secondaryDataKey={avgPeriodDays && 'nDayAvgNewCases'} />
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
                  secondaryDataKey={avgPeriodDays && 'nDayAvgNewDeaths'} />
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
