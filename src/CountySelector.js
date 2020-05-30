import {
  Box,
  Button,
  Chip,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React, {useState} from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const EMPTY_SET = new Set();

const useStyles = makeStyles((theme) => ({
  countySelectionPanelSummary: {
    width: 800,
  },
  modeControl: {
    marginRight: theme.spacing(2),
  },
  modeControlSelect: {
    width: 90,
  },
  modeControlLabel: {
    marginRight: theme.spacing(1),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function CountySelector(props) {
  const {
    state,
    regionMode,
    onModeToggle,
    selectedRegions,
    onRegionToggle,
    selectedCounties,
    onCountyToggle,
    onSelectAll,
    onClearAll,
  } = props;
  const [hoveredCounties, setHoverCounties] = useState(EMPTY_SET);

  const handleModeChange = () => {
    onModeToggle();
  }
  const handleRegionClick = (region) => {
    onRegionToggle(region);
  };
  const handleToggleCounty = (county) => {
    if (regionMode) {
      for (const [region, counties] of state.regions) {
        if (counties.has(county)) {
          onRegionToggle(region);
          return;
        }
      }
    } else {
      onCountyToggle(county);
    }
  };
  const handleMouseEnterCounty = (county) => {
    if (regionMode) {
      for (const counties of state.regions.values()) {
        if (counties.has(county)) {
          setHoverCounties(counties);
          return;
        }
      }
    } else {
      setHoverCounties(new Set([county]))
    }
  };
  const handleMouseLeaveCounty = (county) => {
      setHoverCounties(EMPTY_SET);
  };
  const handleSelectAll = () => {
    onSelectAll();
  };
  const handleClearAll = () => {
    onClearAll();
  };

  const classes = useStyles();

  const chips = regionMode ? (
    Array.from(state.regions.keys()).map((r) => (
      <Chip
        className={classes.chip}
        key={r}
        label={r}
        clickable
        color={selectedRegions.has(r) ? 'primary' : 'default'}
        onClick={handleRegionClick.bind(this, r)} />
    ))
  ) : (
    Array.from(state.counties).map((c) => (
      <Chip
        className={classes.chip}
        key={c}
        label={c}
        clickable
        color={selectedCounties.has(c) ? 'primary' : 'default'}
        onClick={handleToggleCounty.bind(this, c)} />
    ))
  );

  const notes = state.notes && state.notes.has(regionMode ? 'regions' : 'counties') && (
    Array.from(state.notes.get(regionMode ? 'regions' : 'counties')).map((n, i) => (
      <Typography
        key={i}
        display='block'
        variant='caption'
        color='textSecondary'>
        * {n}
      </Typography>
    ))
  );

  const Map = state.map.component;
  const map = (
    <Map
      state={state}
      regionMode={regionMode}
      selectedCounties={selectedCounties}
      onToggleCounty={handleToggleCounty}
      hoveredCounties={hoveredCounties}
      onMouseEnterCounty={handleMouseEnterCounty}
      onMouseLeaveCounty={handleMouseLeaveCounty} />
  );

  return (
    <>
      <ExpansionPanel defaultExpanded variant='outlined'>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.countySelectionPanelSummary} noWrap>
            <b>Selected counties:</b> {Array.from(selectedCounties).sort().join(', ')}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container justify='center' spacing={2}>
            <Grid item xs={12}>
              <FormControlLabel
                className={classes.modeControl}
                control={
                  <Select
                    className={classes.modeControlSelect}
                    value={regionMode}
                    onChange={handleModeChange}>
                    {state.regions.size > 0 &&
                      <MenuItem value={true}>REGION</MenuItem>
                    }
                    <MenuItem value={false}>COUNTY</MenuItem>
                  </Select>
                }
                label={
                  <Typography className={classes.modeControlLabel} variant='button'>
                    SELECT BY
                  </Typography>
                }
                labelPlacement='start'>
              </FormControlLabel>
              <Button onClick={handleSelectAll}>
                Select all
              </Button>
              <Button onClick={handleClearAll}>
                Clear all
              </Button>
            </Grid>
            {state.map.position === 'side' ? (
              <>
                <Grid item xs={6}>
                  <Box>
                    {chips}
                  </Box>
                  <Box mt={4} ml={1}>
                    {notes}
                  </Box>
                </Grid>
                <Grid item container justify='center' alignItems='flex-start' xs={6}>
                  {map}
                </Grid>
              </>
            ) : (
              <>
                <Grid item container justify='center' alignItems='flex-start' xs={12}>
                  {map}
                </Grid>
                <Grid item container justify='center' xs={11}>
                  <Box mt={2}>
                    {chips}
                  </Box>
                  {notes && (
                    <Box mt={4}>
                      {notes}
                    </Box>
                  )}
                </Grid>
              </>
            )}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
}

export default CountySelector;
