<script>
  import { onMount } from 'svelte';
  import {
    count_infected,
    count_saved,
    count_dead
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

    let infected_intval = setInterval(function() {
      let _count = data.response[0].cases.total;

      ($count_infected >= _count) ? clearInterval(infected_intval) : count_infected.update(n => n + evaluateIncrement(_count - $count_infected));
    }, 2);
    let death_intval = setInterval(function() {
      let _count = data.response[0].deaths.total;
      ($count_dead >= _count) ? clearInterval(death_intval) : count_dead.update(n => n + evaluateIncrement(_count - $count_dead));
    }, 2);
    let saved_intval = setInterval(function() {
      let _count = data.response[0].cases.recovered;
      ($count_saved >= _count) ? clearInterval(saved_intval) : count_saved.update(n => n + evaluateIncrement(_count - $count_saved));
    }, 2);
  });
</script>

<style>
  :global(body) {
    background: rgb(15,56,92);
    background: linear-gradient(90deg, rgba(15,56,92,1) 0%, rgba(27,27,31,1) 94%);
    margin: 0;
    padding: 0;
  }
</style>

<Main />