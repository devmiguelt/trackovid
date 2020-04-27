<script>
  export let casesQty = 0;
  export let description = '-';
</script>

<style>
  .Counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between
  }
  .Counter-item-numbers {
    font-size: 2.2em;
  }
  .Counter-item-label {
    font-size: 2.0em;
  }
</style>

<div class="Counter">
  <h2 class="Counter-item-numbers">{casesQty}</h2>
  <span class="Counter-item-label">{description}</span>
</div>