import SvgBlankCaliforniaMap from './SvgBlankCaliforniaMap';
import SvgBlankFloridaMap from './SvgBlankFloridaMap';
import SvgBlankIllinoisMap from './SvgBlankIllinoisMap';
import SvgBlankMarylandMap from './SvgBlankMarylandMap';
import SvgBlankMassachusettsMap from './SvgBlankMassachusettsMap';
import SvgBlankMichiganMap from './SvgBlankMichiganMap';
import SvgBlankNewJerseyMap from './SvgBlankNewJerseyMap';
import SvgBlankNewYorkMap from './SvgBlankNewYorkMap';
import SvgBlankPennsylvaniaMap from './SvgBlankPennsylvaniaMap';
import SvgBlankTexasMap from './SvgBlankTexasMap';

const California = {
  name: 'California',
  postalCode: 'CA',
  // https://commons.wikimedia.org/wiki/File:Blank_California_Map.svg
  mapComponent: SvgBlankCaliforniaMap,
  counties: new Set([
    "Alameda",
    "Alpine",
    "Amador",
    "Butte",
    "Calaveras",
    "Colusa",
    "Contra Costa",
    "Del Norte",
    "El Dorado",
    "Fresno",
    "Glenn",
    "Humboldt",
    "Imperial",
    "Inyo",
    "Kern",
    "Kings",
    "Lake",
    "Lassen",
    "Los Angeles",
    "Madera",
    "Marin",
    "Mariposa",
    "Mendocino",
    "Merced",
    "Modoc",
    "Mono",
    "Monterey",
    "Napa",
    "Nevada",
    "Orange",
    "Placer",
    "Plumas",
    "Riverside",
    "Sacramento",
    "San Benito",
    "San Bernardino",
    "San Diego",
    "San Francisco",
    "San Joaquin",
    "San Luis Obispo",
    "San Mateo",
    "Santa Barbara",
    "Santa Clara",
    "Santa Cruz",
    "Shasta",
    "Sierra",
    "Siskiyou",
    "Solano",
    "Sonoma",
    "Stanislaus",
    "Sutter",
    "Tehama",
    "Trinity",
    "Tulare",
    "Tuolumne",
    "Ventura",
    "Yolo",
    "Yuba",
  ]),
  // https://census.ca.gov/regions/
  regions: new Map([
    [
      'Central Coast',
      new Set([
        'Monterey',
        'San Benito',
        'San Luis Obispo',
        'Santa Barbara',
        'Santa Cruz',
        'Ventura',
      ]),
    ],
    [
      'Inland Empire',
      new Set([
        'Riverside',
        'San Bernardino',
      ]),
    ],
    [
      'Los Angeles County',
      new Set(['Los Angeles']),
    ],
    [
      'North Coast',
      new Set([
        'Del Norte',
        'Humboldt',
        'Lake',
        'Mendocino',
        'Napa',
        'Sonoma',
        'Trinity',
      ]),
    ],
    [
      'Northern San Joaquin Valley',
      new Set([
        'Alpine',
        'Amador',
        'Calaveras',
        'Madera',
        'Mariposa',
        'Merced',
        'Mono',
        'San Joaquin',
        'Stanislaus',
        'Tuolumne',
      ]),
    ],
    [
      'Orange County',
      new Set(['Orange']),
    ],
    [
      'San Diego - Imperial',
      new Set([
        'Imperial',
        'San Diego',
      ]),
    ],
    [
      'San Francisco Bay Area',
      new Set([
        'Alameda',
        'Contra Costa',
        'Marin',
        'San Francisco',
        'San Mateo',
        'Santa Clara',
        'Solano',
      ]),
    ],
    [
      'Southern San Joaquin Valley',
      new Set([
        'Fresno',
        'Inyo',
        'Kern',
        'Kings',
        'Tulare',
      ]),
    ],
    [
      'Superior California',
      new Set([
        'Butte',
        'Colusa',
        'El Dorado',
        'Glenn',
        'Lassen',
        'Modoc',
        'Nevada',
        'Placer',
        'Plumas',
        'Sacramento',
        'Shasta',
        'Sierra',
        'Siskiyou',
        'Sutter',
        'Tehama',
        'Yolo',
        'Yuba',
      ]),
    ],
  ]),
};

const Florida = {
  name: 'Florida',
  postalCode: 'FL',
  // https://commons.wikimedia.org/wiki/File:Map_of_Florida_highlighting_Marion_County.svg
  mapComponent: SvgBlankFloridaMap,
  counties: new Set([
    'Alachua',
    'Baker',
    'Bay',
    'Bradford',
    'Brevard',
    'Broward',
    'Calhoun',
    'Charlotte',
    'Citrus',
    'Clay',
    'Collier',
    'Columbia',
    'DeSoto',
    'Dixie',
    'Duval',
    'Escambia',
    'Flagler',
    'Franklin',
    'Gadsden',
    'Gilchrist',
    'Glades',
    'Gulf',
    'Hamilton',
    'Hardee',
    'Hendry',
    'Hernando',
    'Highlands',
    'Hillsborough',
    'Holmes',
    'Indian River',
    'Jackson',
    'Jefferson',
    'Lafayette',
    'Lake',
    'Lee',
    'Leon',
    'Levy',
    'Liberty',
    'Madison',
    'Manatee',
    'Marion',
    'Martin',
    'Miami-Dade',
    'Monroe',
    'Nassau',
    'Okaloosa',
    'Okeechobee',
    'Orange',
    'Osceola',
    'Palm Beach',
    'Pasco',
    'Pinellas',
    'Polk',
    'Putnam',
    'St. Johns',
    'St. Lucie',
    'Santa Rosa',
    'Sarasota',
    'Seminole',
    'Sumter',
    'Suwannee',
    'Taylor',
    'Union',
    'Volusia',
    'Wakulla',
    'Walton',
    'Washington',
  ]),
  // https://www.floridadisaster.org/dem/directors-office/regions/
  regions: new Map([
    [
      'Emergency Management Region 1',
      new Set([
        'Bay',
        'Calhoun',
        'Escambia',
        'Gulf',
        'Holmes',
        'Jackson',
        'Okaloosa',
        'Santa Rosa',
        'Walton',
        'Washington',
      ]),
    ],
    [
      'Emergency Management Region 2',
      new Set([
        'Columbia',
        'Dixie',
        'Franklin',
        'Gadsden',
        'Hamilton',
        'Jefferson',
        'Lafayette',
        'Leon',
        'Liberty',
        'Madison',
        'Suwannee',
        'Taylor',
        'Wakulla',
      ]),
    ],
    [
      'Emergency Management Region 3',
      new Set([
        'Alachua',
        'Baker',
        'Bradford',
        'Clay',
        'Duval',
        'Flagler',
        'Gilchrist',
        'Levy',
        'Marion',
        'Nassau',
        'Putnam',
        'St. Johns',
        'Union',
      ]),
    ],
    [
      'Emergency Management Region 4',
      new Set([
        'Citrus',
        'Hardee',
        'Hernando',
        'Hillsborough',
        'Pasco',
        'Pinellas',
        'Polk',
        'Sumter',
      ]),
    ],
    [
      'Emergency Management Region 5',
      new Set([
        'Brevard',
        'Indian River',
        'Lake',
        'Martin',
        'Orange',
        'Osceola',
        'St. Lucie',
        'Seminole',
        'Volusia',
      ]),
    ],
    [
      'Emergency Management Region 6',
      new Set([
        'Charlotte',
        'Collier',
        'DeSoto',
        'Glades',
        'Hendry',
        'Highlands',
        'Lee',
        'Manatee',
        'Okeechobee',
        'Sarasota',
      ]),
    ],
    [
      'Emergency Management Region 7',
      new Set([
        'Broward',
        'Miami-Dade',
        'Monroe',
        'Palm Beach',
      ]),
    ],
  ]),
  notes: new Map([
    [
      'regions',
      new Set([
        'See Florida Emergency Management Regions at https://www.floridadisaster.org/dem/directors-office/regions/',
      ]),
    ],
  ]),
};

const Illinois = {
  name: 'Illinois',
  postalCode: 'IL',
  // https://commons.wikimedia.org/wiki/File:Map_of_Illinois_counties.svg
  mapComponent: SvgBlankIllinoisMap,
  counties: new Set([
    'Adams',
    'Alexander',
    'Bond',
    'Boone',
    'Brown',
    'Bureau',
    'Calhoun',
    'Carroll',
    'Cass',
    'Champaign',
    'Christian',
    'Clark',
    'Clay',
    'Clinton',
    'Coles',
    'Cook',
    'Crawford',
    'Cumberland',
    'DeKalb',
    'DeWitt',
    'Douglas',
    'DuPage',
    'Edgar',
    'Edwards',
    'Effingham',
    'Fayette',
    'Ford',
    'Franklin',
    'Fulton',
    'Gallatin',
    'Greene',
    'Grundy',
    'Hamilton',
    'Hancock',
    'Hardin',
    'Henderson',
    'Henry',
    'Iroquois',
    'Jackson',
    'Jasper',
    'Jefferson',
    'Jersey',
    'Jo Daviess',
    'Johnson',
    'Kane',
    'Kankakee',
    'Kendall',
    'Knox',
    'Lake',
    'LaSalle',
    'Lawrence',
    'Lee',
    'Livingston',
    'Logan',
    'Macon',
    'Macoupin',
    'Madison',
    'Marion',
    'Marshall',
    'Mason',
    'Massac',
    'McDonough',
    'McHenry',
    'McLean',
    'Menard',
    'Mercer',
    'Monroe',
    'Montgomery',
    'Morgan',
    'Moultrie',
    'Ogle',
    'Peoria',
    'Perry',
    'Piatt',
    'Pike',
    'Pope',
    'Pulaski',
    'Putnam',
    'Randolph',
    'Richland',
    'Rock Island',
    'Saline',
    'Sangamon',
    'Schuyler',
    'Scott',
    'Shelby',
    'St. Clair',
    'Stark',
    'Stephenson',
    'Tazewell',
    'Union',
    'Vermilion',
    'Wabash',
    'Warren',
    'Washington',
    'Wayne',
    'White',
    'Whiteside',
    'Will',
    'Williamson',
    'Winnebago',
    'Woodford',
  ]),
  // https://coronavirus.illinois.gov/s/restore-illinois-regional-dashboard
  regions: new Map([
    [
      'Central',
      new Set([
        'Adams',
        'Brown',
        'Calhoun',
        'Cass',
        'Champaign',
        'Christian',
        'Clark',
        'Clay',
        'Coles',
        'Crawford',
        'Cumberland',
        'DeWitt',
        'Douglas',
        'Edgar',
        'Effingham',
        'Fayette',
        'Ford',
        'Greene',
        'Hancock',
        'Iroquois',
        'Jasper',
        'Jersey',
        'Lawrence',
        'Logan',
        'Macon',
        'Macoupin',
        'Mason',
        'Menard',
        'Montgomery',
        'Morgan',
        'Moultrie',
        'Piatt',
        'Pike',
        'Richland',
        'Sangamon',
        'Schuyler',
        'Scott',
        'Shelby',
        'Vermilion',
      ]),
    ],
    [
      'North-Central',
      new Set([
        'Boone',
        'Bureau',
        'Carroll',
        'DeKalb',
        'Fulton',
        'Henderson',
        'Henry',
        'Jo Daviess',
        'Knox',
        'LaSalle',
        'Lee',
        'Livingston',
        'Marshall',
        'McDonough',
        'McLean',
        'Mercer',
        'Ogle',
        'Peoria',
        'Putnam',
        'Rock Island',
        'Stark',
        'Stephenson',
        'Tazewell',
        'Warren',
        'Whiteside',
        'Winnebago',
        'Woodford',
      ]),
    ],
    [
      'Northeast',
      new Set([
        'Cook',
        'DuPage',
        'Grundy',
        'Kane',
        'Kankakee',
        'Kendall',
        'Lake',
        'McHenry',
        'Will',
      ]),
    ],
    [
      'Southern',
      new Set([
        'Alexander',
        'Bond',
        'Clinton',
        'Edwards',
        'Franklin',
        'Gallatin',
        'Hamilton',
        'Hardin',
        'Jackson',
        'Jefferson',
        'Johnson',
        'Madison',
        'Marion',
        'Massac',
        'Monroe',
        'Perry',
        'Pope',
        'Pulaski',
        'Randolph',
        'Saline',
        'St. Clair',
        'Union',
        'Wabash',
        'Washington',
        'Wayne',
        'White',
        'Williamson',
      ]),
    ],
  ]),
};

const Maryland = {
  name: 'Maryland',
  postalCode: 'MD',
  // https://en.wikipedia.org/wiki/File:Map_of_Maryland_highlighting_Baltimore_County.svg
  mapComponent: SvgBlankMarylandMap,
  counties: new Set([
    'Allegany',
    'Anne Arundel',
    'Baltimore',
    'Baltimore City',
    'Calvert',
    'Caroline',
    'Carroll',
    'Cecil',
    'Charles',
    'Dorchester',
    'Frederick',
    'Garrett',
    'Harford',
    'Howard',
    'Kent',
    'Montgomery',
    "Prince George's",
    "Queen Anne's",
    "St. Mary's",
    'Somerset',
    'Talbot',
    'Washington',
    'Wicomico',
    'Worcester',
  ]),
  // https://mema.maryland.gov/Pages/OSPREY-dashboard.aspx
  regions: new Map([
    [
      'Capital',
      new Set([
        'Frederick',
        'Montgomery',
        "Prince George's",
      ]),
    ],
    [
      'Central',
      new Set([
        'Anne Arundel',
        'Baltimore',
        'Baltimore City',
        'Carroll',
        'Harford',
        'Howard',
      ]),
    ],
    [
      'Lower Eastern Shore',
      new Set([
        'Dorchester',
        'Somerset',
        'Wicomico',
        'Worcester',
      ]),
    ],
    [
      'South',
      new Set([
        'Calvert',
        'Charles',
        "St. Mary's",
      ]),
    ],
    [
      'Upper Eastern Shore',
      new Set([
        'Caroline',
        'Cecil',
        'Kent',
        "Queen Anne's",
        'Talbot',
      ]),
    ],
    [
      'Western',
      new Set([
        'Allegany',
        'Garrett',
        'Washington',
      ]),
    ],
  ]),
  notes: new Map([
    [
      'regions',
      new Set([
        'See Maryland Emergency Management Regions at https://mema.maryland.gov/Pages/OSPREY-dashboard.aspx',
      ]),
    ],
  ]),
};

const Massachusetts = {
  name: 'Massachusetts',
  postalCode: 'MA',
  // https://commons.wikimedia.org/wiki/File:Map_of_Massachusetts_highlighting_Suffolk_County.svg
  mapComponent: SvgBlankMassachusettsMap,
  counties: new Set([
    'Barnstable',
    'Berkshire',
    'Bristol',
    'Dukes',
    'Essex',
    'Franklin',
    'Hampden',
    'Hampshire',
    'Middlesex',
    'Nantucket',
    'Norfolk',
    'Plymouth',
    'Suffolk',
    'Worcester',
  ]),
  // These regions are an approximation of
  // https://matracking.ehs.state.ma.us/eohhs_regions/eohhs_regions.html.
  regions: new Map([
    [
      'Boston',
      new Set([
        'Suffolk',
      ]),
    ],
    [
      'Central',
      new Set([
        'Worcester',
      ]),
    ],
    [
      'Metro West',
      new Set([
        'Middlesex',
        'Norfolk',
      ]),
    ],
    [
      'Northeast',
      new Set([
        'Essex',
      ]),
    ],
    [
      'Southeast',
      new Set([
        'Plymouth',
        'Bristol',
        'Barnstable',
        'Dukes',
        'Nantucket',
      ]),
    ],
    [
      'Western',
      new Set([
        'Berkshire',
        'Franklin',
        'Hampshire',
        'Hampden',
      ]),
    ],
  ]),
  notes: new Map([
    [
      'counties',
      new Set([
        'Cases in Dukes County and Nantucket County are added together and reported under Dukes county.',
      ]),
    ],
    [
      'regions',
      new Set([
        'The regions are an approximation of the EOHHS regions (https://matracking.ehs.state.ma.us/eohhs_regions/eohhs_regions.html), where each region consists of individual communities instead of counties.',
      ]),
    ],
  ]),
};

const Michigan = {
  name: 'Michigan',
  postalCode: 'MI',
  // https://commons.wikimedia.org/wiki/File:Blank_map_of_Michigan.svg
  mapComponent: SvgBlankMichiganMap,
  counties: new Set([
    'Alcona',
    'Alger',
    'Allegan',
    'Alpena',
    'Antrim',
    'Arenac',
    'Baraga',
    'Barry',
    'Bay',
    'Benzie',
    'Berrien',
    'Branch',
    'Calhoun',
    'Cass',
    'Charlevoix',
    'Cheboygan',
    'Chippewa',
    'Clare',
    'Clinton',
    'Crawford',
    'Delta',
    'Dickinson',
    'Eaton',
    'Emmet',
    'Genesee',
    'Gladwin',
    'Gogebic',
    'Grand Traverse',
    'Gratiot',
    'Hillsdale',
    'Houghton',
    'Huron',
    'Ingham',
    'Ionia',
    'Iosco',
    'Iron',
    'Isabella',
    'Jackson',
    'Kalamazoo',
    'Kalkaska',
    'Kent',
    'Keweenaw',
    'Lake',
    'Lapeer',
    'Leelanau',
    'Lenawee',
    'Livingston',
    'Luce',
    'Mackinac',
    'Macomb',
    'Manistee',
    'Marquette',
    'Mason',
    'Mecosta',
    'Menominee',
    'Midland',
    'Missaukee',
    'Monroe',
    'Montcalm',
    'Montmorency',
    'Muskegon',
    'Newaygo',
    'Oakland',
    'Oceana',
    'Ogemaw',
    'Ontonagon',
    'Osceola',
    'Oscoda',
    'Otsego',
    'Ottawa',
    'Presque Isle',
    'Roscommon',
    'Saginaw',
    'St. Clair',
    'St. Joseph',
    'Sanilac',
    'Schoolcraft',
    'Shiawassee',
    'Tuscola',
    'Van Buren',
    'Washtenaw',
    'Wayne',
    'Wexford',
    'Federal Correctional Institution (FCI)',
    'Michigan Department of Corrections (MDOC)',
  ]),
  // https://www.michigan.gov/mdhhs/0,5885,7-339-71548_54783_54826_56171---,00.html
  regions: new Map([
    [
      'Emergency Preparedness Region 1',
      new Set([
        'Clinton',
        'Eaton',
        'Gratiot',
        'Hillsdale',
        'Ingham',
        'Jackson',
        'Lenawee',
        'Livingston',
        'Shiawassee',
      ]),
    ],
    [
      'Emergency Preparedness Region 2N',
      new Set([
        'Oakland',
        'Macomb',
        'St. Clair',
      ]),
    ],
    [
      'Emergency Preparedness Region 2S',
      new Set([
        'Monroe',
        'Washtenaw',
        'Wayne',
      ]),
    ],
    [
      'Emergency Preparedness Region 3',
      new Set([
        'Alcona',
        'Arenac',
        'Bay',
        'Genesee',
        'Gladwin',
        'Huron',
        'Iosco',
        'Lapeer',
        'Midland',
        'Ogemaw',
        'Oscoda',
        'Saginaw',
        'Sanilac',
        'Tuscola',
      ]),
    ],
    [
      'Emergency Preparedness Region 5',
      new Set([
        'Allegan',
        'Barry',
        'Berrien',
        'Branch',
        'Calhoun',
        'Cass',
        'Kalamazoo',
        'St. Joseph',
        'Van Buren',
      ]),
    ],
    [
      'Emergency Preparedness Region 6',
      new Set([
        'Clare',
        'Ionia',
        'Isabella',
        'Kent',
        'Lake',
        'Mason',
        'Mecosta',
        'Montcalm',
        'Muskegon',
        'Newaygo',
        'Oceana',
        'Osceola',
        'Ottawa',
      ]),
    ],
    [
      'Emergency Preparedness Region 7',
      new Set([
        'Alpena',
        'Antrim',
        'Benzie',
        'Charlevoix',
        'Cheboygan',
        'Crawford',
        'Emmet',
        'Grand Traverse',
        'Kalkaska',
        'Leelanau',
        'Manistee',
        'Missaukee',
        'Montmorency',
        'Otsego',
        'Presque Isle',
        'Roscommon',
        'Wexford',
      ]),
    ],
    [
      'Emergency Preparedness Region 8',
      new Set([
        'Alger',
        'Baraga',
        'Chippewa',
        'Delta',
        'Dickinson',
        'Gogebic',
        'Houghton',
        'Iron',
        'Keweenaw',
        'Luce',
        'Mackinac',
        'Marquette',
        'Menominee',
        'Ontonagon',
        'Schoolcraft',
      ]),
    ],
    [
      'Federal Correctional Institution (FCI)',
      new Set([
        'Federal Correctional Institution (FCI)',
      ]),
    ],
    [
      'Michigan Department of Corrections (MDOC)',
      new Set([
        'Michigan Department of Corrections (MDOC)',
      ]),
    ],
  ]),
  notes: new Map([
    [
      'counties',
      new Set([
        'Federal Correctional Institution (FCI) reports cases separately and is treated as a separate county.',
        'Michigan Department of Corrections (MDOC) reports cases separately and is treated as a separate county.',
      ]),
    ],
    [
      'regions',
      new Set([
        'See Michigan Emergency Preparedness Regions at https://www.michigan.gov/mdhhs/0,5885,7-339-71548_54783_54826_56171---,00.html',
        'Federal Correctional Institution (FCI) reports cases separately and is treated as a separate region.',
        'Michigan Department of Corrections (MDOC) reports cases separately and is treated as a separate region.',
      ]),
    ],
  ]),
};

const NewJersey = {
  name: 'New Jersey',
  postalCode: 'NJ',
  // https://commons.wikimedia.org/wiki/File:New_Jersey_Counties_Outline.svg
  mapComponent: SvgBlankNewJerseyMap,
  counties: new Set([
    'Atlantic',
    'Bergen',
    'Burlington',
    'Camden',
    'Cape May',
    'Cumberland',
    'Essex',
    'Gloucester',
    'Hudson',
    'Hunterdon',
    'Mercer',
    'Middlesex',
    'Monmouth',
    'Morris',
    'Ocean',
    'Passaic',
    'Salem',
    'Somerset',
    'Sussex',
    'Union',
    'Warren',
  ]),
  // https://www.nj.gov/transportation/about/employ/regions.shtm
  regions: new Map([
    [
      'North',
      new Set([
        'Bergen',
        'Essex',
        'Hudson',
        'Morris',
        'Passaic',
        'Sussex',
        'Union',
        'Warren',
      ]),
    ],
    [
      'Central',
      new Set([
        'Hunterdon',
        'Mercer',
        'Middlesex',
        'Monmouth',
        'Ocean',
        'Somerset',
      ]),
    ],
    [
      'South',
      new Set([
        'Atlantic',
        'Burlington',
        'Camden',
        'Cape May',
        'Cumberland',
        'Gloucester',
        'Salem',
      ]),
    ],
  ]),
};

const NewYork = {
  name: 'New York',
  postalCode: 'NY',
  // https://commons.wikimedia.org/wiki/File:Blank_Map_of_New_York_Counties.svg
  mapComponent: SvgBlankNewYorkMap,
  counties: new Set([
    'Albany',
    'Allegany',
    'Bronx',
    'Broome',
    'Cattaraugus',
    'Cayuga',
    'Chautauqua',
    'Chemung',
    'Chenango',
    'Clinton',
    'Columbia',
    'Cortland',
    'Delaware',
    'Dutchess',
    'Erie',
    'Essex',
    'Franklin',
    'Fulton',
    'Genesee',
    'Greene',
    'Hamilton',
    'Herkimer',
    'Jefferson',
    'Kings',
    'Lewis',
    'Livingston',
    'Madison',
    'Monroe',
    'Montgomery',
    'Nassau',
    'New York',
    'Niagara',
    'Oneida',
    'Onondaga',
    'Ontario',
    'Orange',
    'Orleans',
    'Oswego',
    'Otsego',
    'Putnam',
    'Queens',
    'Rensselaer',
    'Richmond',
    'Rockland',
    'St. Lawrence',
    'Saratoga',
    'Schenectady',
    'Schoharie',
    'Schuyler',
    'Seneca',
    'Steuben',
    'Suffolk',
    'Sullivan',
    'Tioga',
    'Tompkins',
    'Ulster',
    'Warren',
    'Washington',
    'Wayne',
    'Westchester',
    'Wyoming',
    'Yates',
  ]),
  // https://forward.ny.gov/regional-monitoring-dashboard
  regions: new Map([
    [
      'Capital Region',
      new Set([
        'Albany',
        'Columbia',
        'Greene',
        'Rensselaer',
        'Saratoga',
        'Schenectady',
        'Warren',
        'Washington',
      ]),
    ],
    [
      'Central New York',
      new Set([
        'Cayuga',
        'Cortland',
        'Madison',
        'Onondaga',
        'Oswego',
      ]),
    ],
    [
      'Finger Lakes',
      new Set([
        'Genesee',
        'Livingston',
        'Monroe',
        'Ontario',
        'Orleans',
        'Seneca',
        'Wayne',
        'Wyoming',
        'Yates',
      ]),
    ],
    [
      'Long Island',
      new Set([
        'Nassau',
        'Suffolk',
      ]),
    ],
    [
      'Mid-Hudson',
      new Set([
        'Dutchess',
        'Orange',
        'Putnam',
        'Rockland',
        'Sullivan',
        'Ulster',
        'Westchester',
      ]),
    ],
    [
      'Mohawk Valley',
      new Set([
        'Fulton',
        'Herkimer',
        'Montgomery',
        'Oneida',
        'Otsego',
        'Schoharie',
      ]),
    ],
    [
      'New York City',
      new Set([
        'Bronx',
        'Kings',
        'New York',
        'Queens',
        'Richmond',
      ]),
    ],
    [
      'North Country',
      new Set([
        'Clinton',
        'Essex',
        'Franklin',
        'Hamilton',
        'Jefferson',
        'Lewis',
        'St. Lawrence',
      ]),
    ],
    [
      'Southern Tier',
      new Set([
        'Broome',
        'Chemung',
        'Chenango',
        'Delaware',
        'Schuyler',
        'Steuben',
        'Tioga',
        'Tompkins',
      ]),
    ],
    [
      'Western New York',
      new Set([
        'Allegany',
        'Cattaraugus',
        'Chautauqua',
        'Erie',
        'Niagara',
      ]),
    ],
  ]),
};

const Pennsylvania = {
  name: 'Pennsylvania',
  postalCode: 'PA',
  // https://en.wikipedia.org/wiki/File:Map_of_Pennsylvania_highlighting_Wayne_County.svg
  mapComponent: SvgBlankPennsylvaniaMap,
  counties: new Set([
    'Adams',
    'Allegheny',
    'Armstrong',
    'Beaver',
    'Bedford',
    'Berks',
    'Blair',
    'Bradford',
    'Bucks',
    'Butler',
    'Cambria',
    'Cameron',
    'Carbon',
    'Centre',
    'Chester',
    'Clarion',
    'Clearfield',
    'Clinton',
    'Columbia',
    'Crawford',
    'Cumberland',
    'Dauphin',
    'Delaware',
    'Elk',
    'Erie',
    'Fayette',
    'Forest',
    'Franklin',
    'Fulton',
    'Greene',
    'Huntingdon',
    'Indiana',
    'Jefferson',
    'Juniata',
    'Lackawanna',
    'Lancaster',
    'Lawrence',
    'Lebanon',
    'Lehigh',
    'Luzerne',
    'Lycoming',
    'McKean',
    'Mercer',
    'Mifflin',
    'Monroe',
    'Montgomery',
    'Montour',
    'Northampton',
    'Northumberland',
    'Perry',
    'Philadelphia',
    'Pike',
    'Potter',
    'Schuylkill',
    'Snyder',
    'Somerset',
    'Sullivan',
    'Susquehanna',
    'Tioga',
    'Union',
    'Venango',
    'Warren',
    'Washington',
    'Wayne',
    'Westmoreland',
    'Wyoming',
    'York',
  ]),
  // https://www.governor.pa.gov/process-to-reopen-pennsylvania/20200423-bureau-community-health-systems-regional-map-opt/
  regions: new Map([
    [
      'Northcentral',
      new Set([
        'Bradford',
        'Centre',
        'Clinton',
        'Columbia',
        'Lycoming',
        'Montour',
        'Northumberland',
        'Potter',
        'Sullivan',
        'Snyder',
        'Tioga',
        'Union',
      ]),
    ],
    [
      'Northeast',
      new Set([
        'Carbon',
        'Lackawanna',
        'Lehigh',
        'Luzerne',
        'Monroe',
        'Northampton',
        'Pike',
        'Susquehanna',
        'Wayne',
        'Wyoming',
      ]),
    ],
    [
      'Northwest',
      new Set([
        'Cameron',
        'Clarion',
        'Clearfield',
        'Crawford',
        'Elk',
        'Erie',
        'Forest',
        'Jefferson',
        'Lawrence',
        'McKean',
        'Mercer',
        'Venango',
        'Warren',
      ]),
    ],
    [
      'Southcentral',
      new Set([
        'Adams',
        'Bedford',
        'Blair',
        'Cumberland',
        'Dauphin',
        'Franklin',
        'Fulton',
        'Huntingdon',
        'Juniata',
        'Lebanon',
        'Mifflin',
        'Perry',
        'York',
      ]),
    ],
    [
      'Southeast',
      new Set([
        'Berks',
        'Bucks',
        'Chester',
        'Delaware',
        'Lancaster',
        'Montgomery',
        'Philadelphia',
        'Schuylkill',
      ]),
    ],
    [
      'Southwest',
      new Set([
        'Allegheny',
        'Armstrong',
        'Beaver',
        'Butler',
        'Cambria',
        'Fayette',
        'Greene',
        'Indiana',
        'Somerset',
        'Washington',
        'Westmoreland',
      ]),
    ],
  ]),
};

const Texas = {
  name: 'Texas',
  postalCode: 'TX',
  // https://commons.wikimedia.org/wiki/File:Map_of_Texas_highlighting_Swisher_County.svg
  mapComponent: SvgBlankTexasMap,
  counties: new Set([
    'Anderson',
    'Andrews',
    'Angelina',
    'Aransas',
    'Archer',
    'Armstrong',
    'Atascosa',
    'Austin',
    'Bailey',
    'Bandera',
    'Bastrop',
    'Baylor',
    'Bee',
    'Bell',
    'Bexar',
    'Blanco',
    'Borden',
    'Bosque',
    'Bowie',
    'Brazoria',
    'Brazos',
    'Brewster',
    'Briscoe',
    'Brooks',
    'Brown',
    'Burleson',
    'Burnet',
    'Caldwell',
    'Calhoun',
    'Callahan',
    'Cameron',
    'Camp',
    'Carson',
    'Cass',
    'Castro',
    'Chambers',
    'Cherokee',
    'Childress',
    'Clay',
    'Cochran',
    'Coke',
    'Coleman',
    'Collin',
    'Collingsworth',
    'Colorado',
    'Comal',
    'Comanche',
    'Concho',
    'Cooke',
    'Coryell',
    'Cottle',
    'Crane',
    'Crockett',
    'Crosby',
    'Culberson',
    'Dallam',
    'Dallas',
    'Dawson',
    'Deaf Smith',
    'Delta',
    'Denton',
    'DeWitt',
    'Dickens',
    'Dimmit',
    'Donley',
    'Duval',
    'Eastland',
    'Ector',
    'Edwards',
    'Ellis',
    'El Paso',
    'Erath',
    'Falls',
    'Fannin',
    'Fayette',
    'Fisher',
    'Floyd',
    'Foard',
    'Fort Bend',
    'Franklin',
    'Freestone',
    'Frio',
    'Gaines',
    'Galveston',
    'Garza',
    'Gillespie',
    'Glasscock',
    'Goliad',
    'Gonzales',
    'Gray',
    'Grayson',
    'Gregg',
    'Grimes',
    'Guadalupe',
    'Hale',
    'Hall',
    'Hamilton',
    'Hansford',
    'Hardeman',
    'Hardin',
    'Harris',
    'Harrison',
    'Hartley',
    'Haskell',
    'Hays',
    'Hemphill',
    'Henderson',
    'Hidalgo',
    'Hill',
    'Hockley',
    'Hood',
    'Hopkins',
    'Houston',
    'Howard',
    'Hudspeth',
    'Hunt',
    'Hutchinson',
    'Irion',
    'Jack',
    'Jackson',
    'Jasper',
    'Jeff Davis',
    'Jefferson',
    'Jim Hogg',
    'Jim Wells',
    'Johnson',
    'Jones',
    'Karnes',
    'Kaufman',
    'Kendall',
    'Kenedy',
    'Kent',
    'Kerr',
    'Kimble',
    'King',
    'Kinney',
    'Kleberg',
    'Knox',
    'Lamar',
    'Lamb',
    'Lampasas',
    'La Salle',
    'Lavaca',
    'Lee',
    'Leon',
    'Liberty',
    'Limestone',
    'Lipscomb',
    'Live Oak',
    'Llano',
    'Loving',
    'Lubbock',
    'Lynn',
    'McCulloch',
    'McLennan',
    'McMullen',
    'Madison',
    'Marion',
    'Martin',
    'Mason',
    'Matagorda',
    'Maverick',
    'Medina',
    'Menard',
    'Midland',
    'Milam',
    'Mills',
    'Mitchell',
    'Montague',
    'Montgomery',
    'Moore',
    'Morris',
    'Motley',
    'Nacogdoches',
    'Navarro',
    'Newton',
    'Nolan',
    'Nueces',
    'Ochiltree',
    'Oldham',
    'Orange',
    'Palo Pinto',
    'Panola',
    'Parker',
    'Parmer',
    'Pecos',
    'Polk',
    'Potter',
    'Presidio',
    'Rains',
    'Randall',
    'Reagan',
    'Real',
    'Red River',
    'Reeves',
    'Refugio',
    'Roberts',
    'Robertson',
    'Rockwall',
    'Runnels',
    'Rusk',
    'Sabine',
    'San Augustine',
    'San Jacinto',
    'San Patricio',
    'San Saba',
    'Schleicher',
    'Scurry',
    'Shackelford',
    'Shelby',
    'Sherman',
    'Smith',
    'Somervell',
    'Starr',
    'Stephens',
    'Sterling',
    'Stonewall',
    'Sutton',
    'Swisher',
    'Tarrant',
    'Taylor',
    'Terrell',
    'Terry',
    'Throckmorton',
    'Titus',
    'Tom Green',
    'Travis',
    'Trinity',
    'Tyler',
    'Upshur',
    'Upton',
    'Uvalde',
    'Val Verde',
    'Van Zandt',
    'Victoria',
    'Walker',
    'Waller',
    'Ward',
    'Washington',
    'Webb',
    'Wharton',
    'Wheeler',
    'Wichita',
    'Wilbarger',
    'Willacy',
    'Williamson',
    'Wilson',
    'Winkler',
    'Wise',
    'Wood',
    'Yoakum',
    'Young',
    'Zapata',
    'Zavala',
  ]),
  // https://dshs.texas.gov/regions/state.shtm
  // https://www.dshs.texas.gov/chs/info/info_txco.shtm
  regions: new Map([
    [
      'Public Health Region 1',
      new Set([
        'Armstrong',
        'Bailey',
        'Briscoe',
        'Carson',
        'Castro',
        'Childress',
        'Cochran',
        'Collingsworth',
        'Crosby',
        'Dallam',
        'Deaf Smith',
        'Dickens',
        'Donley',
        'Floyd',
        'Garza',
        'Gray',
        'Hale',
        'Hall',
        'Hansford',
        'Hartley',
        'Hemphill',
        'Hockley',
        'Hutchinson',
        'King',
        'Lamb',
        'Lipscomb',
        'Lubbock',
        'Lynn',
        'Moore',
        'Motley',
        'Ochiltree',
        'Oldham',
        'Parmer',
        'Potter',
        'Randall',
        'Roberts',
        'Sherman',
        'Swisher',
        'Terry',
        'Wheeler',
        'Yoakum',
      ]),
    ],
    [
      'Public Health Region 2/3',
      new Set([
        'Archer',
        'Baylor',
        'Brown',
        'Callahan',
        'Clay',
        'Coleman',
        'Comanche',
        'Cottle',
        'Eastland',
        'Fisher',
        'Foard',
        'Hardeman',
        'Haskell',
        'Jack',
        'Jones',
        'Kent',
        'Knox',
        'Mitchell',
        'Montague',
        'Nolan',
        'Runnels',
        'Scurry',
        'Shackelford',
        'Stephens',
        'Stonewall',
        'Taylor',
        'Throckmorton',
        'Wichita',
        'Wilbarger',
        'Young',
        'Collin',
        'Cooke',
        'Dallas',
        'Denton',
        'Ellis',
        'Erath',
        'Fannin',
        'Grayson',
        'Hood',
        'Hunt',
        'Johnson',
        'Kaufman',
        'Navarro',
        'Palo Pinto',
        'Parker',
        'Rockwall',
        'Somervell',
        'Tarrant',
        'Wise',
      ]),
    ],
    [
      'Public Health Region 4/5N',
      new Set([
        'Anderson',
        'Angelina',
        'Bowie',
        'Camp',
        'Cass',
        'Cherokee',
        'Delta',
        'Franklin',
        'Gregg',
        'Harrison',
        'Henderson',
        'Hopkins',
        'Houston',
        'Jasper',
        'Lamar',
        'Marion',
        'Morris',
        'Nacogdoches',
        'Newton',
        'Panola',
        'Polk',
        'Rains',
        'Red River',
        'Rusk',
        'Sabine',
        'San Augustine',
        'San Jacinto',
        'Shelby',
        'Smith',
        'Titus',
        'Trinity',
        'Tyler',
        'Upshur',
        'Van Zandt',
        'Wood',
      ]),
    ],
    [
      'Public Health Region 6/5S',
      new Set([
        'Austin',
        'Brazoria',
        'Chambers',
        'Colorado',
        'Fort Bend',
        'Galveston',
        'Hardin',
        'Harris',
        'Jefferson',
        'Liberty',
        'Matagorda',
        'Montgomery',
        'Orange',
        'Walker',
        'Waller',
        'Wharton',
      ]),
    ],
    [
      'Public Health Region 7',
      new Set([
        'Bastrop',
        'Bell',
        'Blanco',
        'Bosque',
        'Brazos',
        'Burleson',
        'Burnet',
        'Caldwell',
        'Coryell',
        'Falls',
        'Fayette',
        'Freestone',
        'Grimes',
        'Hamilton',
        'Hays',
        'Hill',
        'Lampasas',
        'Lee',
        'Leon',
        'Limestone',
        'Llano',
        'McLennan',
        'Madison',
        'Milam',
        'Mills',
        'Robertson',
        'San Saba',
        'Travis',
        'Washington',
        'Williamson',
      ]),
    ],
    [
      'Public Health Region 8',
      new Set([
        'Atascosa',
        'Bandera',
        'Bexar',
        'Calhoun',
        'Comal',
        'DeWitt',
        'Dimmit',
        'Edwards',
        'Frio',
        'Gillespie',
        'Goliad',
        'Gonzales',
        'Guadalupe',
        'Jackson',
        'Karnes',
        'Kendall',
        'Kerr',
        'Kinney',
        'La Salle',
        'Lavaca',
        'Maverick',
        'Medina',
        'Real',
        'Uvalde',
        'Val Verde',
        'Victoria',
        'Wilson',
        'Zavala',
      ]),
    ],
    [
      'Public Health Region 9/10',
      new Set([
        'Andrews',
        'Borden',
        'Brewster',
        'Coke',
        'Concho',
        'Crane',
        'Crockett',
        'Culberson',
        'Dawson',
        'Ector',
        'El Paso',
        'Gaines',
        'Glasscock',
        'Howard',
        'Hudspeth',
        'Irion',
        'Jeff Davis',
        'Kimble',
        'Loving',
        'McCulloch',
        'Martin',
        'Mason',
        'Menard',
        'Midland',
        'Pecos',
        'Presidio',
        'Reagan',
        'Reeves',
        'Schleicher',
        'Sterling',
        'Sutton',
        'Terrell',
        'Tom Green',
        'Upton',
        'Ward',
        'Winkler',
      ]),
    ],
    [
      'Public Health Region 11',
      new Set([
        'Aransas',
        'Bee',
        'Brooks',
        'Cameron',
        'Duval',
        'Hidalgo',
        'Jim Hogg',
        'Jim Wells',
        'Kenedy',
        'Kleberg',
        'Live Oak',
        'McMullen',
        'Nueces',
        'Refugio',
        'San Patricio',
        'Starr',
        'Webb',
        'Willacy',
        'Zapata',
      ]),
    ],
  ]),
  notes: new Map([
    [
      'counties',
      new Set([
        'Texas has 254 counties, more than any other U.S. state.',
      ]),
    ],
    [
      'regions',
      new Set([
        'See Texas Public Health Regions at https://dshs.texas.gov/regions/state.shtm',
      ]),
    ],
  ]),
};

export default new Map([
  [California.name, California],
  [Florida.name, Florida],
  [Illinois.name, Illinois],
  [Maryland.name, Maryland],
  [Massachusetts.name, Massachusetts],
  [Michigan.name, Michigan],
  [NewJersey.name, NewJersey],
  [NewYork.name, NewYork],
  [Pennsylvania.name, Pennsylvania],
  [Texas.name, Texas],
]);
