const API = "https://covid-193.p.rapidapi.com/";
const API_HEADERS = {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key": "de91f50bbamshd06b76879e9d251p140c40jsndf14cf3164aa"
  }
};

const countries_default = [
  {'flag': 'chile-rounded.png', 'EN': 'Chile', 'ES': 'Chile'},
  {'flag': 'colombia-rounded.png', 'EN': 'Colombia', 'ES': 'Colombia'},
  {'flag': 'españa-rounded.png', 'EN': 'Spain', 'ES': 'España'},
  {'flag': 'eeuu-rounded.png', 'EN': 'USA', 'ES': 'Estados Unidos'},
  {'flag': 'venezuela-rounded.png', 'EN': 'Venezuela', 'ES': 'Venezuela'},
];

const configuration = {
  'api': {
    'urlBase': API,
    'headers': API_HEADERS,
  },
  'countries': countries_default,
  'services': {
    'statistic_country': `${API}statistics?country=`,
    'countries': `${API}countries`,
    'location_device': fetch('http://ip-api.com/json'),
  },
}

export default configuration;