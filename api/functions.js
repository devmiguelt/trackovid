/* RESOURCE IMAGES */
import chile from '../public/img/flags_main/chile.svg';
import colombia from '../public/img/flags_main/colombia.svg';
import spain from '../public/img/flags_main/españa.svg';
import usa from '../public/img/flags_main/estados unidos.svg';
import venezuela from '../public/img/flags_main/venezuela.svg';

const API = "https://covid-193.p.rapidapi.com/";
const API_HEADERS = {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key": "de91f50bbamshd06b76879e9d251p140c40jsndf14cf3164aa"
  }
};

const countries_default = [
  {'image': chile, 'EN': 'Chile', 'ES': 'Chile'},
  {'image': colombia, 'EN': 'Colombia', 'ES': 'Colombia'},
  {'image': spain, 'EN': 'Spain', 'ES': 'España'},
  {'image': usa, 'EN': 'USA', 'ES': 'Estados Unidos'},
  {'image': venezuela, 'EN': 'Venezuela', 'ES': 'Venezuela'},
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