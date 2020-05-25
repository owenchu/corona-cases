const REGION_MODE_COLORS = [
  '#b2b2cd',
  '#b1e6f5',
  '#dfdca9',
  '#fbbe1e',
  '#ffd5d5',
  '#ffeeaa',
  '#cfeed6',
  '#e0e54a',
  '#caafcf',
  '#cec6de',
  '#ddebea',
  '#aaccca',
];
const NUM_REGION_MODE_COLORS = REGION_MODE_COLORS.length;

const DEFAULT_SELECTED_COUNTY_COLOR = '#f0cf85';
const DEFAULT_UNSELECTED_COUNTY_COLOR = '#e0e0e0';

function getCountyFillColor(state, regionMode, selectedCounties, countyToFill) {
  if (!selectedCounties.has(countyToFill)) {
    return DEFAULT_UNSELECTED_COUNTY_COLOR;
  }

  if (!regionMode) {
    return DEFAULT_SELECTED_COUNTY_COLOR;
  }

  let colorIndex = 0;
  for (const counties of state.regions.values()) {
    if (counties.has(countyToFill)) {
      if (colorIndex >= NUM_REGION_MODE_COLORS) {
        console.error('Not enough distinct colors to draw regions');
        colorIndex = colorIndex % NUM_REGION_MODE_COLORS;
      }
      return REGION_MODE_COLORS[colorIndex];
    }
    ++colorIndex;
  }

  console.error(`Default fill color used for unrecognized county: ${countyToFill}`);
  return DEFAULT_SELECTED_COUNTY_COLOR;
}

function useMap(mapProps) {
  const {state, regionMode, selectedCounties, onToggleCounty} = mapProps;
  return {
    svgElementProps: (county) => ({
      fill: getCountyFillColor(state, regionMode, selectedCounties, county),
      onClick: () => onToggleCounty(county),
    }),
    unselectedCountyColor: DEFAULT_UNSELECTED_COUNTY_COLOR,
  }
}

export {
  useMap,
};
