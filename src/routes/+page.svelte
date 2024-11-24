<script lang="ts">
    import Rain from '$lib/components/Rain.svelte';
    import RainAudio from '$lib/components/RainAudio.svelte';
</script>

<Rain />
<RainAudio />

<div class="page-layout">
  <div class="side-image left">
    <img src="/reimu.png" alt="Reimu Left" />
  </div>

  <div class="container">
    <div class="content-center">
      <h1>Tensei_Surf</h1>
    </div>
  </div>

  <div class="side-image right">
    <img src="/reimu.png" alt="Reimu Right" />
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    background-color: #1a1a1a;
    color: #ffffff;
  }

  .page-layout {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    min-height: 100vh;
    position: relative;
    z-index: 2;
  }

  .side-image {
    flex: 0 0 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .side-image img {
    max-width: 100%;
    height: auto;
  }

  .side-image.left img {
    transform: scaleX(-1);
  }

  .container {
    flex: 1;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-center {
    text-align: center;
  }

  h1 {
    color: #ff69b4;
    font-size: 4rem;
    margin: 0;
    text-shadow: 0 0 20px rgba(255, 105, 180, 0.5);
    animation: glow 2s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      text-shadow: 0 0 20px rgba(255, 105, 180, 0.5);
    }
    to {
      text-shadow: 0 0 30px rgba(255, 105, 180, 0.8),
                   0 0 40px rgba(255, 105, 180, 0.3);
    }
  }
</style>