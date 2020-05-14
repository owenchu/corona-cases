import {
  Box,
  Button,
  Checkbox,
  Chip,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  FormControlLabel,
  Grid,
  Typography,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React, {useState} from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  countySelectionPanelSummary: {
    width: 800,
  },
  regionModeControl: {
    marginLeft: theme.spacing(0),
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

  const handleModeChange = () => {
    setRegionMode(!regionMode);
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
          <Grid container wrap='nowrap' spacing={2}>
            <Grid item xs={5}>
              <Box mb={1}>
                <FormControlLabel
                  className={classes.regionModeControl}
                  control={
                    <Checkbox
                      color='default'
                      checked={regionMode}
                      onChange={handleModeChange} />
                  }
                  label={
                    <Typography variant='button'>
                      Region Mode
                    </Typography>
                  } />
                <Button
                  color='primary'
                  onClick={handleSelectAll}>
                  Select all
                </Button>
                <Button
                  color='primary'
                  onClick={handleClearAll}>
                  Clear all
                </Button>
              </Box>
              <Box mb={2}>
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
    </>
  );
}

export default CountySelector;
