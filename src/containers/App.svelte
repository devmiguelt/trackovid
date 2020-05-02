<script>
  import { onMount } from 'svelte';
  import {
    count_infected,
    count_saved,
    count_dead,
    count_tests,
  } from "../store/store.js";

  import Main from '../components/Main.svelte';
  import Logo from '../components/Logo.svelte';
  import Flag from '../components/Flag.svelte';
  import Counter from '../components/Counters.svelte';
  import ButtonPlus from '../components/ButtonPlus.svelte';

  let data = {}
  const API = "https://covid-193.p.rapidapi.com/statistics?country=Chile";

  onMount(async () => {
    // Here consult API get Data Free Covid-19
    const _data = await fetch(API, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "de91f50bbamshd06b76879e9d251p140c40jsndf14cf3164aa"
      }
    });
    data = await _data.json();

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

<Main />