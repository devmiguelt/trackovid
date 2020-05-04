<script>
  import { fade, slide } from 'svelte/transition';
  import {
    count_infected,
    count_saved,
    count_dead,
    count_tests,
    country,
  } from "../store/store.js";
  import Counter from './Counter.svelte';
  import ListCountries from './ListCountries';

  /* Components */
  import Country from './Country';

  export let countriesDescription;
</script>

<style>
  .main {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
  }
  .main-logo {
    background: white;
    display: flex;
    width: 35%;
    color: red;
    justify-content: center;
    align-self: center;
    border-radius: 0 0 70px 70px;
    box-shadow: 0px 7px 6px #00000029;
  }
  .main-logo img {
    width: 200px;
    padding: 22px 30px;
  }

  .main-container {
    display: flex;
    width: 100vw;
    justify-content: space-around;
    padding-bottom: 1em;
  }

  .main-counter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Responsive */
  @media only screen and (max-width: 768px) {
    .main-container {
      display: flex;
      flex-direction: column;
    }
  }
</style>


<div class="main">
  <div class="main-logo">
    <img src="../../public/img/trackovid.png" alt="Logo">
  </div>

  <Country country={$country} />

  <div class="main-container">
    <div class="main-counter">
      <Counter casesQty={$count_infected} description='Contagios' />
    </div>
    <div class="main-counter">
      <Counter casesQty={$count_dead} description='Fallecidos' />
    </div>
    <div class="main-counter">
      <Counter casesQty={$count_saved} description='Recuperados' />
    </div>
    <div class="main-counter">
      <Counter casesQty={$count_tests} description='Tests Realizados' />
    </div>
  </div>
</div>

<ListCountries countriesList={countriesDescription}/>