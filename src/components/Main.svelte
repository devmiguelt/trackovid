<script>
  import {
    count_infected,
    count_saved,
    count_dead,
    count_tests,
  } from "../store/store.js";

  import Counter from './Counter.svelte';
</script>

<style>
  .main {
    display: flex;
    height: 100vh;
    align-items: center;
  }
  .main-container {
    /* background: red; */
    display: flex;
    width: 100vw;
    justify-content: space-around;
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