<script>
  import {
    count_infected,
    count_saved,
    count_dead
  } from "../store/store.js";

  export const country = 'Chile';

  function updateCount(_cant = 0, option) {
    if (option === "infected") {
      count_infected = _cant;
    }
    if (option === "save") {
      count_save = _cant;
    }
    if (option === "dead") {
      count_dead = _cant;
    }
  }
</script>

<style>
  .Counter {
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
  }

  .Counter-items {
    display: flex;
    justify-content: space-around;
  }

  .Counter-item {
    background-color: yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1em;
  }

  .Counter-item-numbers {
    margin-bottom: 0.2em;
    font-size: 2em;
  }

  .Counter-item-label {
    margin-bottom: 0.2em;
    font-size: 1.5em;
  }

  .Counter-item-label {
    margin-bottom: 0.2em;
    font-size: 1.5em;
  }

</style>

<div class="Counter">

  <div class="Counter-items">
    <div class="Counter-item">
      <h2 class="Counter-item-numbers">{$count_infected}</h2>
      <span class="Counter-item-label">Contagiados</span>
    </div>
    <div class="Counter-item">
      <h2 class="Counter-item-numbers">{$count_dead}</h2>
      <span class="Counter-item-label">Fallecidos</span>
    </div>
    <div class="Counter-item">
      <h2 class="Counter-item-numbers">{$count_saved}</h2>
      <span class="Counter-item-label">Recuperados</span>
    </div>
  </div>
</div>