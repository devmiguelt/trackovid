import configuration from "./functions";

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

export {
  translateCountry,
  evaluateIncrement,
  cleanNumber,
  calcValue,
};