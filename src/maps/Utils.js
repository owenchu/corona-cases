// https://coolors.co/fedc85-fdd05e-fcbe22-dd9f03-f6bd8d-f6b179-f4a666-f29040
// https://coolors.co/ddebea-bfd9d7-a5cac8-98c3c1-e0ccd0-d1b3b9-c19aa2-b1818a
// https://coolors.co/cceabb-b9e2a1-a2d982-8bcf63-70a7ff-478eff-1f75ff-0a68ff
// https://coolors.co/cec6de-bcb1d2-b1a4cb-a697c3-e98686-e36464-df5353-dc4141
// https://coolors.co/dfdca9-d2ce89-c8c36a-bdb74c
const REGION_MODE_COLORS = [
  '#fedc85',
  '#f6bd8d',
  '#ddebea',
  '#e0ccd0',
  '#cceabb',
  '#70a7ff',
  '#cec6de',
  '#e98686',
  '#dfdca9',
  '#fdd05e',
  '#f6b179',
  '#bfd9d7',
  '#d1b3b9',
  '#b9e2a1',
  '#478eff',
  '#bcb1d2',
  '#e36464',
  '#d2ce89',
  '#fcbe22',
  '#f4a666',
  '#a5cac8',
  '#c19aa2',
  '#a2d982',
  '#1f75ff',
  '#b1a4cb',
  '#df5353',
  '#c8c36a',
  '#dd9f03',
  '#f29040',
  '#98c3c1',
  '#b1818a',
  '#8bcf63',
  '#0a68ff',
  '#a697c3',
  '#dc4141',
  '#bdb74c',
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
  const {
    state,
    regionMode,
    selectedCounties,
    onToggleCounty,
    hoveredCounties,
    onMouseEnterCounty,
    onMouseLeaveCounty,
  } = mapProps;
  return {
    svgElementProps: (county) => ({
      fill: getCountyFillColor(state, regionMode, selectedCounties, county),
      opacity: hoveredCounties.has(county) ? 0.7 : 1,
      onMouseEnter: () => onMouseEnterCounty(county),
      onMouseLeave: () => onMouseLeaveCounty(null),
      onClick: () => onToggleCounty(county),
    }),
    unselectedCountyColor: DEFAULT_UNSELECTED_COUNTY_COLOR,
  }
}

export {
  useMap,
};
