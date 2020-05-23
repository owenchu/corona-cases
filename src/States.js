import SvgBlankCaliforniaMap from './SvgBlankCaliforniaMap';
import SvgBlankIllinoisMap from './SvgBlankIllinoisMap';
import SvgBlankMassachusettsMap from './SvgBlankMassachusettsMap';
import SvgBlankNewJerseyMap from './SvgBlankNewJerseyMap';
import SvgBlankNewYorkMap from './SvgBlankNewYorkMap';
import SvgBlankPennsylvaniaMap from './SvgBlankPennsylvania';

export default new Map([
  [
    'California', {
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
    }
  ],
  [
    'Illinois', {
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
    }
  ],
  [
    'Massachusetts', {
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
      ])
    }
  ],
  [
    'New Jersey', {
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
    }
  ],
  [
    'New York', {
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
    }
  ],
  [
    'Pennsylvania', {
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
    }
  ],
]);
