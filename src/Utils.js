const REGION_MODE_COLORS = [
  // Orangish
  '#ffb367',
  '#ec823a',
  '#ff5200',
  // Yellowish
  '#ffe277',
  '#ffd31d',
  '#f0a500',
  // Greenish
  '#79d70f',
  '#2fc4b2',
  '#12947f',
  // Bluish
  '#8ccbbe',
  '#63b7af',
  '#3797a4',
  // Purplish
  '#ad6989',
  '#5c2a9d',
  '#562349',
];

const DEFAULT_SELECTED_COUNTY_COLOR = '#f0cf85';
const DEFAULT_UNSELECTED_COUNTY_COLOR = '#cccccc';

function GetCountyFillColor(state, regionMode, selectedCounties, countyToFill) {
  if (!selectedCounties.has(countyToFill)) {
    return DEFAULT_UNSELECTED_COUNTY_COLOR;
  }

  if (!regionMode) {
    return DEFAULT_SELECTED_COUNTY_COLOR;
  }

  let colorIndex = 0;
  for (const counties of state.regions.values()) {
    if (counties.has(countyToFill)) {
      const numColors = REGION_MODE_COLORS.length;
      if (colorIndex >= numColors) {
        console.error('Not enough distinct colors to draw regions');
        colorIndex = colorIndex % numColors;
      }
      return REGION_MODE_COLORS[colorIndex];
    }
    ++colorIndex;
  }

  console.error(`Unrecognized county: ${countyToFill}`);
  return DEFAULT_SELECTED_COUNTY_COLOR;
}

function useMap(mapProps) {
  const {state, regionMode, selectedCounties, onToggleCounty} = mapProps;
  return {
    svgElementProps: (county) => ({
      fill: GetCountyFillColor(state, regionMode, selectedCounties, county),
      onClick: () => onToggleCounty(county),
    }),
    unselectedCountyColor: DEFAULT_UNSELECTED_COUNTY_COLOR,
  }
}

// https://alligator.io/js/capitalizing-strings.
function CapitalizeCountyName(countyName) {
    return countyName.trim().toLowerCase().replace(
        /\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

function NormalizeCountyName(stateName, countyName) {
    switch (stateName) {
      case 'Illinois':
        switch (countyName) {
          case 'dekalb': return 'DeKalb';
          case 'de witt': return 'DeWitt';
          case 'dupage': return 'DuPage';
          case 'lasalle': return 'LaSalle';
          case 'mcdonough': return 'McDonough';
          case 'mchenry': return 'McHenry';
          case 'mclean': return 'McLean';
          default:
            break;
        }
        break;
      case 'Massachusetts':
        switch (countyName) {
          case 'dukes and nantucket': return 'Dukes';
          default:
            break;
        }
        break;
      default:
        break;
    }
    return CapitalizeCountyName(countyName);
}

export {
  NormalizeCountyName,
  useMap,
};
