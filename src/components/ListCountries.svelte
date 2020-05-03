<script>
  import { slide } from 'svelte/transition';
  import { showCountry, country } from '../store/store';
  import { displayCountries } from './Country';
  // import { selectCountry } from '../../api/methods';

  export let countriesList = [];

  function selectCountry(name) {
    country.update(value => name);
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
</style>

{#if $showCountry }
<div class="countryBox" transition:slide>
  <div class="countryBox-title">
    <p>Cambiar País</p>
  </div>

  <div class="countryBox-countries">
    {#each countriesList as _country}
    <div class="countryBox-countries-item" on:click={selectCountry(_country.ES)}>
      <div class="countryBox-image" style="background-image: url('../../public/img/{_country.ES}.svg');"></div>
      <span class="countryBox-country">{_country.ES}</span>
    </div>
    {/each}
  </div>

  <div class="countryBox-close">
    <i class="fas fa-sort-up" id="countryBox-sortUp" on:click={displayCountries}></i>
  </div>
</div>
{/if}