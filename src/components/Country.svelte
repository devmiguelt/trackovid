<script>
  import { fade } from 'svelte/transition';
  export let country;

  let showCountries = false;

  function hoverFlag() {
    document.getElementById('changeCountry').classList.remove('countryText-hidden')
    document.getElementById('changeCountry').classList.add('countryText-show')
  }
  function outHoverFlag() {
    document.getElementById('changeCountry').classList.remove('countryText-show')
    document.getElementById('changeCountry').classList.add('countryText-hidden')
  }
  function displayCountries() {
    showCountries = !showCountries;
  }
</script>

<style>
  .country {
    display: flex;
    flex-direction: column;
    width: 35%;
    align-self: center;
    justify-content: center;
    align-items: center;
  }
  .country-flags {
    display: flex;
    justify-content: center;
  }
  .country-image {
    margin-top: 1.2em;
    width: 250px;
    height: 250px;
    background-image: url('../../public/img/chile-rounded.png');
    border-radius: 50%;
    border: 1em #fff solid;
  }

  .country-image-hover {
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
  .country-image-hover:hover {
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }

  .countryText-hidden {
    display: none;
  }

  .countryText-show {
    display: block;
  }

  .country-name {
    display: flex;
  }
  .country-name h2 {
    font-size: 2.2em;
    margin: 0;
  }
</style>


<div class="country">
  <div class="country-flags">
    <div class="country-image" style="background-image: url('../../public/img/flags_main/{country}.svg');"></div>
    <div class="country-image-hover"
      on:mouseover={hoverFlag} 
      on:mouseout={outHoverFlag}
      on:click={displayCountries}>
      <p class="countryText-hidden" id="changeCountry">Cambiar País</p>
    </div>
  </div>
  <div class="country-name">
    {#if country}
    <h2 transition:fade="{{delay: 250, duration: 300}}">{country}</h2>
    {:else}
    <h2>Detectando...</h2>
    {/if}
  </div>
</div>