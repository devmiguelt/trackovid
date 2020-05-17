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

  import trackovid from '../../public/img/trackovid.png';

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
    width: 50%;
    padding: 22px 30px;
    height: 70%;
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

  /* Resolution for Phone */
  @media only screen and (max-width: 600px) {
    .main-container {
      display: flex;
      flex-wrap: wrap;
    }
    .main-counter {
      width: 50%;
    }
    .main-logo {
      width: 80%;
    }
  }

  /* Resolution for Tablets*/
  @media only screen and (min-width: 600px) and (max-width: 768px) {
    .main-container {
      display: flex;
      flex-wrap: wrap;
    }
    .main-logo {
      width: 70%;
    }
    .main-counter {
      width: 50%;
    }
  }
</style>


<div class="main">
  <div class="main-logo">
    <img src="{trackovid}" alt="Logo">
  </div>

  <Country/>

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