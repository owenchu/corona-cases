// https://alligator.io/js/capitalizing-strings.
function capitalizeCountyName(countyName) {
    return countyName.trim().toLowerCase().replace(
        /\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

function normalizeCountyName(stateName, countyName) {
    switch (stateName) {
      case 'Florida':
        switch (countyName) {
          case 'desoto': return 'DeSoto';
          case 'miami-dade': return 'Miami-Dade';
          default: break;
        }
        break;
      case 'Georgia':
        switch (countyName) {
          case 'dekalb': return 'DeKalb';
          case 'mcduffie': return 'McDuffie';
          case 'mcintosh': return 'McIntosh';
          default: break;
        }
        break;
      case 'Illinois':
        switch (countyName) {
          case 'dekalb': return 'DeKalb';
          case 'de witt': return 'DeWitt';
          case 'dupage': return 'DuPage';
          case 'lasalle': return 'LaSalle';
          case 'mcdonough': return 'McDonough';
          case 'mchenry': return 'McHenry';
          case 'mclean': return 'McLean';
          default: break;
        }
        break;
      case 'Massachusetts':
        switch (countyName) {
          case 'dukes and nantucket': return 'Dukes';
          default: break;
        }
        break;
      case 'Michigan':
        switch (countyName) {
          case 'federal correctional institution (fci)':
            return 'Federal Correctional Institution (FCI)';
          case 'michigan department of corrections (mdoc)':
            return 'Michigan Department of Corrections (MDOC)';
          default: break;
        }
        break;
      case 'Pennsylvania':
        switch (countyName) {
          case 'mckean': return 'McKean';
          default: break;
        }
        break;
      case 'Texas':
        switch (countyName) {
          case 'dewitt': return 'DeWitt';
          case 'mcculloch': return 'McCulloch';
          case 'mclennan': return 'McLennan';
          case 'mcmullen': return 'McMullen';
          default: break;
        }
        break;
      default:
        break;
    }
    return capitalizeCountyName(countyName);
}

export {
  normalizeCountyName,
};
