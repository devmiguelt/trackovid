<script>
  import Main from '../components/Main.svelte';
  import Logo from '../components/Logo.svelte';
</script>

<style>
  :global(body) {
    background: rgb(27,27,31,1);
    margin: 0;
    padding: 0;
    /* background: linear-gradient(17deg, rgba(64,64,69,1) 0%, rgba(27,27,31,1) 37%); */
  }
</style>

<Main>
  <Logo />
</Main>