import configuration from "./functions";
import {
  count_infected,
  count_saved,
  count_dead,
  count_tests,
  country,
} from "../src/store/store";


function translateCountry(value, lang) {
  let translate = configuration.countries.filter(function(c) {
    return (lang === 'es') ? c.EN === value : c.ES === value;
  });
  return (lang === 'es') ? translate[0].ES : translate[0].EN;;
}

function evaluateIncrement(value) {
  if (value >= 1000000) {
    return 100000
  }
  if (value >= 100000) {
    return 10000;
  }
  else if (value >= 10000) {
    return 1000;
  }
  else if (value >= 1000) {
    return 100;
  }
  else if (value >= 500) {
    return 200;
  }
  else if (value >= 250) {
    return 100;
  }
  else {
    return 1;
  }
}

function formatNumber(value) {
  let newValue= new Intl.NumberFormat("de-DE").format(value);
  return newValue
}

function cleanNumber(value) {
  return parseInt(value.toString().replace(/\./g,''));
}

function calcValue(value, total) {
  return formatNumber(value + evaluateIncrement(total - value))
}

function selectCountry(name) {
  let nuevoValor = {country};
  country.update(value => name);

  // Debo realizar la traduccion para la API
  let countryEN = translateCountry(name, 'en');

  // Ejecuto el fetch
  // console.log(`${configuration.services.statistic_country}${countryEN}`)
  // const _data = fetch(`${configuration.services.statistic_country}${countryEN}`,
  //     configuration.api.headers
  //   ).then(function(response) {
  //     return response.json();
  //   }).then(function(myJson) {
  //     console.log(myJson.response[0]);
  //     return myJson.response[0]
  //     // console.log($count_infected)
  //   });

  // Actualizo el País seleccionado

  // Cambio la bandera mostrada
}

export {
  translateCountry,
  evaluateIncrement,
  cleanNumber,
  calcValue,
  selectCountry,
};