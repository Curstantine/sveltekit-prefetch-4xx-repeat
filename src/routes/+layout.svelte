<div class="bg">
  <slot />
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  .bg {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    gap: 4rem;
  }
</style>
