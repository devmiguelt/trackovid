<script>
  import { slide } from 'svelte/transition';
  import {
    showCountry,
    count_infected,
    count_saved,
    count_dead,
    count_tests,
    country,
  } from '../store/store';
  import configuration from '../../api/functions';
  import {
    translateCountry,
    cleanNumber,
    calcValue,
  } from '../../api/methods';

  export let countriesList = [];

  export function setNumbers(data) {
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
  }

  async function selectCountry(name) {
    if (name != $country) {
      showCountry.update(value => !$showCountry);
      country.update(value => name);
      let countryEN = translateCountry(name, 'en');
      count_infected.update(value => 0);
      count_saved.update(value => 0);
      count_dead.update(value => 0);
      count_tests.update(value => 0);
      const dataFetch = await fetch(`${configuration.services.statistic_country}${countryEN}`,
        configuration.api.headers
      )
      const data = await dataFetch.json();

      setNumbers(data);
    }
  }

  function getImg(value) {
    let _countries = configuration.countries
    let search = _countries.filter(function(v) {
      return v.ES === value;
    });
    if (search.length > 0) {
      return search[0].image;
    }
    return false;
  }
</script>

<style>
  .countryBox {
    position: absolute;
    z-index: 1;
    width: 15%;
    height: 45%;
    top: 0;
    right: 10em;
    border-radius: 0 0 20px 20px;
    background-color: white;
    padding: 5px 10px 25px 10px;
    box-shadow: 0px 7px 6px #00000029;
  }

  .countryBox-title {
    display: flex;
  }

  .countryBox-title p{
    margin: 0;
    color: #969696;
  }

  .countryBox-countries {
    display: flex;
    flex-direction: column;
    height: 90%;
    overflow: auto;
  }

  .countryBox-countries-item {
    display: flex;
    align-items: center;
    padding: 10px 0;

    -webkit-transition: background-color 0.5s ease-out;
    -moz-transition: background-color 0.5s ease-out;
    -o-transition: background-color 0.5s ease-out;
    transition: background-color 0.5s ease-out;
  }

  .countryBox-countries-item:hover {
    background-color: rgba(195, 195, 195, 0.1);
    cursor: pointer;
  }

  .countryBox-image {
    width: 47px;
    height: 47px;
    background-size: 100%;
    border-radius: 50%;
    border: 2px #fff solid;
    box-shadow: 0px 3px 6px #240d0d50;
  }

  .countryBox-country {
    color: #000;
    margin: 0 0.5em;
  }

  #search-country {
    border-color: rgba(0,0,0, 0.5);
    width: 70%;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-width: 0 0 0.5px 0;
    outline: none;
  }

  .countryBox-close {
    display:flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
  }

  #countryBox-sortUp {
    color: gray;
    font-size:20px;
    cursor: pointer;
  }
</style>

{#if $showCountry }
<div class="countryBox" transition:slide>
  <div class="countryBox-title">
    <p>Cambiar País</p>
  </div>

  <div class="countryBox-countries">
    {#each countriesList as _country}
    <div class="countryBox-countries-item" on:click={selectCountry(_country.ES)}>
      <div class="countryBox-image" style="background-image: url('{getImg(_country.ES)}');"></div>
      <span class="countryBox-country">{_country.ES}</span>
    </div>
    {/each}
  </div>

  <div class="countryBox-close">
    <i class="fas fa-sort-up" id="countryBox-sortUp" on:click={showCountry.update(value => !$showCountry)}></i>
  </div>
</div>
{/if}