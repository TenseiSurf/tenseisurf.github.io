<script lang="ts">
    import Rain from '$lib/components/Rain.svelte';
    import RainAudio from '$lib/components/RainAudio.svelte';
</script>

<Rain />
<RainAudio />

<div class="page-layout">
  <div class="side-image left">
    <img src="/tenseisurf/reimu.png" alt="Reimu Left" />
  </div>

  <div class="container">
    <div class="content-center">
      <h1>Tensei_Surf</h1>
      <div class="summary">
        Welcome, this is a project that I'm working on in my free time.
        I didn't like how the current Counter Strike Source Surf servers gatekept voting for maps, so I am making my own.
        More work needs to be done, but this is just the beginning. 
        Stay tuned for more updates!
      </div>
    </div>
  </div>

  <div class="side-image right">
    <img src="/tenseisurf/reimu.png" alt="Reimu Right" />
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
    max-width: 600px;
  }

  h1 {
    color: #ff69b4;
    font-size: 4rem;
    margin: 0;
    text-shadow: 0 0 20px rgba(255, 105, 180, 0.5);
    animation: glow 2s ease-in-out infinite alternate;
  }

  .summary {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.2rem;
    line-height: 1.6;
    margin-top: 2rem;
    padding: 1rem;
    background: rgba(255, 105, 180, 0.1);
    border-radius: 8px;
    backdrop-filter: blur(5px);
    text-shadow: 0 0 10px rgba(255, 105, 180, 0.2);
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