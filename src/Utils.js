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
      default:
        break;
    }
    return CapitalizeCountyName(countyName);
}

export {
  NormalizeCountyName,
};
