<script>
  import { slide } from 'svelte/transition';
  import {
    count_infected,
    count_saved,
    count_dead,
    count_tests,
  } from "../store/store.js";
  import Counter from './Counter.svelte';

  export let countriesDescription = [];


  let showCountries = false;

  function hoverFlag() {
    document.getElementById('changeCountry').classList.remove('main-countryText-hidden')
    document.getElementById('changeCountry').classList.add('main-countryText-show')
  }
  function outHoverFlag() {
    document.getElementById('changeCountry').classList.remove('main-countryText-show')
    document.getElementById('changeCountry').classList.add('main-countryText-hidden')
  }
  function displayCountries() {
    showCountries = !showCountries;
  }
  let keysCountries = Object.keys(countriesDescription);
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
  .main-country {
    display: flex;
    flex-direction: column;
    width: 35%;
    align-self: center;
    justify-content: center;
    align-items: center;
  }
  .main-country-flags {
    display: flex;
    justify-content: center;
  }
  .main-country-image {
    margin-top: 1.2em;
    width: 250px;
    height: 250px;
    background-image: url('../../public/img/chile-rounded.png');
    border-radius: 50%;
    border: 1em #fff solid;
  }

  .main-country-image-hover {
    z-index: 1;
    position: absolute;
    margin-top: 1.2em;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 1em #fff solid;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-country-image-hover:hover {
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }

  .main-countryText-hidden {
    display: none;
  }

  .main-countryText-show {
    display: block;
  }

  .main-country-name {
    display: flex;
  }
  .main-country-name h2 {
    font-size: 2.2em;
    margin: 0;
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
    /* border-bottom: 0.2px solid #696969; */
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

  /* Este debo mejorar como se referencia al input */
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

  /* Responsive */
  @media only screen and (max-width: 768px) {
    .main-container {
      display: flex;
      flex-direction: column;
      /* justify-content: space-around; */
    }
  }
</style>


<div class="main">
  <div class="main-logo">
    <img src="../../public/img/trackovid.png" alt="Logo">
  </div>

  <div class="main-country">
    <div class="main-country-flags">
      <div class="main-country-image"></div>
      <div class="main-country-image-hover"
        on:mouseover={hoverFlag} 
        on:mouseout={outHoverFlag}
        on:click={displayCountries}>
        <p class="main-countryText-hidden" id="changeCountry">Cambiar País</p>
      </div>
    </div>
    <div class="main-country-name">
      <h2>Chile</h2>
    </div>
  </div>

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

{#if showCountries }
<div class="countryBox" transition:slide>
  <div class="countryBox-title">
    <p>Cambiar País</p>
  </div>

  <div class="countryBox-countries">
    {#each keysCountries as _country}
    <div class="countryBox-countries-item">
      <div class="countryBox-image" style="background-image: url('../../public/img/{_country}.svg');"></div>
      <span class="countryBox-country">{_country}</span>
    </div>
    {/each}
  </div>

  <div class="countryBox-close">
    <i class="fas fa-sort-up" id="countryBox-sortUp" on:click={displayCountries}></i>
  </div>
</div>
{/if}