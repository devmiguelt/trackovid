<script>
  import {
    count_infected,
    count_saved,
    count_dead,
    count_tests,
  } from "../store/store.js";

  import Counter from './Counter.svelte';

  function hoverFlag() {
    document.getElementById('changeCountry').classList.remove('main-countryText-hidden')
    document.getElementById('changeCountry').classList.add('main-countryText-show')
  }
  function outHoverFlag() {
    document.getElementById('changeCountry').classList.remove('main-countryText-show')
    document.getElementById('changeCountry').classList.add('main-countryText-hidden')
  }
  function displayCountries() {
    alert('Mostrar listado de paises');
  }
</script>

<style>
  .main {
    display: flex;
    height: 100vh;
    /* align-items: center; */
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
    font-size: 1.2em;
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