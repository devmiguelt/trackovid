<script>
  import Main from '../components/Main.svelte';
  import Logo from '../components/Logo.svelte';
  import Flag from '../components/Flag.svelte';
  import Counter from '../components/Counters.svelte';
</script>

<style>
  :global(body) {
    background: rgb(27,27,31,1);
    margin: 0;
    padding: 0;
  }
</style>

<Main>
  <Logo />
  <Flag />
  <Counter />
</Main>