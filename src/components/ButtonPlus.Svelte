<script>
  function handleViewWorld() {
    alert('Ver más paises en desarrollo...')
  }
</script>

<style>
  .Button {
    display: flex;
    justify-content: center;
    padding: 2em;
  }
  .Button-button {
    background-color: #cccccc;
    color: #000;
    font-size: 1em;
    border-radius: 2px;
    outline: none;
  }
</style>

<div class="Button">
  <button class="Button-button" on:click={handleViewWorld}>Ver Paises...</button>
</div>