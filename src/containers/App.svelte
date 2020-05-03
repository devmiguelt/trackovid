<script>
  import { onMount } from 'svelte';
  import configuration from '../../api/functions';
  import {
    translateCountry,
    evaluateIncrement,
    cleanNumber,
    calcValue,
  } from '../../api/methods';
  import {
    count_infected,
    count_saved,
    count_dead,
    count_tests,
    country,
  } from "../store/store";

  import Main from '../components/Main.svelte';

  let data = {};
  let countries = {};
  let countriesDescription = configuration.countries;

  onMount(async () => {
    // Get country device
    const locateDevice = await fetch('http://ip-api.com/json');
    const dataDeviceJSON = await locateDevice.json();
    country.update(_value => translateCountry(dataDeviceJSON.country, 'es'));

    const _data = await fetch(`${configuration.services.statistic_country}${translateCountry($country, 'en')}`,
      configuration.api.headers
    );
    const data = await _data.json();

    let infected_intval = setInterval(function() {
      let _count = data.response[0].cases.total;
      let parseValue = cleanNumber($count_infected);
      let nuevoValor = calcValue(parseValue, _count);

      (parseValue >= _count) ? clearInterval(infected_intval) : count_infected.update(n => nuevoValor);
    }, 2);

    let death_intval = setInterval(function() {
      let _count = data.response[0].deaths.total;
      let parseValue = cleanNumber($count_dead);
      let nuevoValor = calcValue(parseValue, _count);

      (parseValue >= _count) ? clearInterval(death_intval) : count_dead.update(n => nuevoValor);
    }, 2);

    let saved_intval = setInterval(function() {
      let _count = data.response[0].cases.recovered;
      let parseValue = cleanNumber($count_saved);
      let nuevoValor = calcValue(parseValue, _count);

      (parseValue >= _count) ? clearInterval(saved_intval) : count_saved.update(n => nuevoValor);
    }, 2);

    let tests_intval = setInterval(function() {
      let _count = data.response[0].tests.total;
      let parseValue = cleanNumber($count_tests);
      let nuevoValor = calcValue(parseValue, _count);

      (parseValue >= _count) ? clearInterval(tests_intval) : count_tests.update(n => nuevoValor);
    }, 2);
  });
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600&display=swap');
  :global(body) {
    background: #F50E28 url('../../public/img/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
    padding: 0;
    color: white;
    font-family: 'Cairo', sans-serif;
  }
</style>

<Main countriesDescription={countriesDescription} />