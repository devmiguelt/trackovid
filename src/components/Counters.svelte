<script>
  export const country = 'Chile';
  export const count_infected = 0;
  export const count_save = 0;
  export const count_dead = 0;

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

  .Counter-title {
    display: flex;
    justify-content: center;
  }

  .Counter-title-h2 {
    font-size: 1.8em;
  }

</style>

<div class="Counter">
  <div class="Counter-title">
    <h2 class="Counter-title-h2">{country} en Números...</h2>
  </div>

  <div class="Counter-items">
    <div class="Counter-item">
      <h2 class="Counter-item-numbers">{count_infected}</h2>
      <span class="Counter-item-label">Contagiados</span>
    </div>
    <div class="Counter-item">
      <h2 class="Counter-item-numbers">{count_dead}</h2>
      <span class="Counter-item-label">Fallecidos</span>
    </div>
    <div class="Counter-item">
      <h2 class="Counter-item-numbers">{count_save}</h2>
      <span class="Counter-item-label">Recuperados</span>
    </div>
  </div>
</div>