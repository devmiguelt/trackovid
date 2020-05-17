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
    font-family: 'Cairo', sans-serif;
    font-size: 2.2em;
    margin: 0;
  }
  .Counter-item-label {
    font-family: 'Cairo', sans-serif;
    font-size: 2.0em;
  }
  /* Responsive */

  /* Resolution for Phone */
  @media only screen and (max-width: 600px) {
    .Counter-item-numbers {
      font-size: 1.2em;
    }
    .Counter-item-label {
      font-size: 1.2em;
    }
  }

  /* Resolution for Tablets and up */
  @media only screen and (min-width: 600px) and (max-width: 768px) {
    .Counter-item-numbers {
      font-size: 1.8em;
    }
    .Counter-item-label {
      font-size: 1.8em;
    }
  }
</style>

<div class="Counter">
  <h2 class="Counter-item-numbers">{casesQty}</h2>
  <span class="Counter-item-label">{description}</span>
</div>