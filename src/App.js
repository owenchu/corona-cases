import axios from 'axios';
import dayjs from 'dayjs';
import {
  AppBar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  FormControl,
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
  appBarSpacer: theme.mixins.toolbar,
  container: {
    width: 960,
    paddingTop: theme.spacing(2),
  },
  stateSelectionFormControl: {
    minWidth: 200,
  },
  countySelectionPanelSummary: {
    width: 800,
  },
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
  const numDays = 60;

  const [data, setData] = useState(null);
  const [selectedState, setSelectedState] = useState(States.get('California'));
  const [selectedCounties, setSelectedCounties] = useState(selectedState.counties);
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

  const handleToggleCounty = (county) => {
    const newSet = new Set(selectedCounties);
    if (selectedCounties.has(county)) {
      newSet.delete(county);
    } else {
      newSet.add(county);
    }
    setSelectedCounties(newSet);
  };

  const chartData = [];
  for (var i = numDays; i > 0; --i) {
    chartData.push({
      date: dayjs().startOf('day').subtract(i, 'day').format('M/D'),
      cases: 0,
      deaths: 0,
      newCases: 0,
      newDeaths: 0,
      fiveDayAvgNewCases: 0,
      fiveDayAvgNewDeath: 0,
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
      const offset = numDays - today.diff(dayjs(date), 'day');
      chartData[offset].cases += d.timeline.cases[date];
    }
    for (const date in d.timeline.deaths) {
      const offset = numDays - today.diff(dayjs(date), 'day');
      chartData[offset].deaths += d.timeline.deaths[date];
    }
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

  const Map = selectedState.mapComponent;

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
          <Grid container direction='column' wrap='nowrap' spacing={4}>
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
              <ExpansionPanel defaultExpanded variant='outlined'>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.countySelectionPanelSummary} noWrap>
                    <b>Selected counties:</b> {Array.from(selectedCounties).sort().join(', ')}
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Grid container wrap='nowrap' spacing={2}>
                    <Grid item xs={5}>
                      <Box>
                        <Button
                          color='primary'
                          onClick={() => setSelectedCounties(new Set(selectedState.counties))}>
                          Select all
                        </Button>
                        <Button
                          color='primary'
                          onClick={() => setSelectedCounties(new Set())}>
                          Clear all
                        </Button>
                      </Box>
                      <Box mb={2}>
                        {Array.from(selectedState.counties).map((c) => (
                          <Chip
                            className={classes.chip}
                            key={c}
                            label={c}
                            clickable
                            color={selectedCounties.has(c) ? 'primary' : 'default'}
                            onClick={() => handleToggleCounty(c)} />
                        ))}
                      </Box>
                    </Grid>
                    <Grid item container alignItems='center' xs={7}>
                      <Grid item xs={12}>
                        <Map
                          selectedCounties={selectedCounties}
                          onToggleCounty={handleToggleCounty} />
                      </Grid>
                    </Grid>
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.graphContainer} variant='outlined'>
                <ComposedChart title='New Cases' data={chartData} primaryDataKey='newCases' secondaryDataKey='fiveDayAvgNewCases' />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.graphContainer} variant='outlined'>
                <ComposedChart title='New Deaths' data={chartData} primaryDataKey='newDeaths' secondaryDataKey='fiveDayAvgNewDeaths' />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.graphContainer} variant='outlined'>
                <Chart title='Total Cases' data={chartData} dataKey='cases' />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.graphContainer} variant='outlined'>
                <Chart title='Total Deaths' data={chartData} dataKey='deaths' />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Data source: <Link href='https://github.com/NovelCOVID/API'>NovelCOVID/API</Link>
              </Typography>
              <Typography>
                California map: <Link href='https://commons.wikimedia.org/wiki/File:Blank_California_Map.svg'>Wikimedia Commons</Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
