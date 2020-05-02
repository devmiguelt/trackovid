const API = "https://covid-193.p.rapidapi.com/";

const API_HEADERS = {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key": "de91f50bbamshd06b76879e9d251p140c40jsndf14cf3164aa"
  }
};

const countries_default = {
  'Chile': {'flag': 'chile-rounded.png'},
  'Colombia': {'flag': 'colombia-rounded.png'},
  'España': {'flag': 'españa-rounded.png'},
  'Estados Unidos': {'flag': 'eeuu-rounded.png'},
  'Venezuela': {'flag': 'venezuela-rounded.png'},
};

const services = {
  'statistic_country': fetch(`${API}statistics?country=Chile`, API_HEADERS),
  'countries': fetch(`${API}countries`, API_HEADERS),
  'countries_flag': countries_default,
}

export default services;