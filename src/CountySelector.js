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
    selectedCounties,
    onCountyToggle,
    selectedRegions,
    onRegionToggle,
    onSelectionModeChange,
    onSelectAll,
    onClearAll,
  } = props;
  const [regionMode, setRegionMode] = useState(true);
  const classes = useStyles();

  const handleModeChange = (e) => {
    setRegionMode(e.target.value);
    onSelectionModeChange();
  }
  const handleSelectAll = () => {
    onSelectAll();
  };
  const handleClearAll = () => {
    onClearAll();
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
  const handleRegionClick = (region) => {
    onRegionToggle(region);
  };

  const Map = state.mapComponent;

  return (
    <>
      <ExpansionPanel defaultExpanded variant='outlined'>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.countySelectionPanelSummary} noWrap>
            <b>Selected counties:</b> {Array.from(selectedCounties).sort().join(', ')}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControlLabel
                className={classes.modeControl}
                control={
                  <Select
                    className={classes.modeControlSelect}
                    value={regionMode}
                    onChange={handleModeChange}>
                    <MenuItem value={true}>REGION</MenuItem>
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
            <Grid item xs={6}>
              <Box>
                {regionMode ? (
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
                )}
              </Box>
              <Box mt={4} ml={1}>
                {state.notes
                && state.notes.has(regionMode ? 'regions' : 'counties')
                && Array.from(state.notes.get(regionMode ? 'regions' : 'counties')).map((n, i) => (
                  <Typography
                    key={i}
                    display='block'
                    variant='caption'
                    color='textSecondary'>
                    * {n}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item container justify='center' alignItems='flex-start' xs={6}>
              <Map
                selectedCounties={selectedCounties}
                onToggleCounty={handleToggleCounty} />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
}

export default CountySelector;
