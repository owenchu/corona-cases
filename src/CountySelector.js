import {
  Box,
  Button,
  Chip,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Typography,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  countySelectionPanelSummary: {
    width: 800,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function CountySelector(props) {
  const {state, selectedCounties, onChange} = props;
  const classes = useStyles();

  const handleSelectAll = () => onChange(new Set(state.counties));
  const handleClearAll = () => onChange(new Set());
  const handleToggle = (county) => {
    const newSelectedCounties = new Set(selectedCounties);
    if (selectedCounties.has(county)) {
      newSelectedCounties.delete(county);
    } else {
      newSelectedCounties.add(county);
    }
    onChange(newSelectedCounties);
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
              <Box>
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
                {Array.from(state.counties).map((c) => (
                  <Chip
                    className={classes.chip}
                    key={c}
                    label={c}
                    clickable
                    color={selectedCounties.has(c) ? 'primary' : 'default'}
                    onClick={handleToggle.bind(this, c)} />
                ))}
              </Box>
            </Grid>
            <Grid item container alignItems='center' xs={7}>
              <Grid item xs={12}>
                <Map
                  selectedCounties={selectedCounties}
                  onToggleCounty={handleToggle} />
              </Grid>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
}

export default CountySelector;
