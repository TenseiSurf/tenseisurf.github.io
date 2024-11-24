<div class="rain-container">
  {#each Array(100) as _, i}
    <div 
      class="rain-drop" 
      style="--delay: {Math.random() * 2}s; --left: {Math.random() * 100}%; --duration: {0.5 + Math.random() * 0.5}s"
    />
  {/each}
</div>

<style>
  .rain-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .rain-drop {
    position: absolute;
    width: 2px;
    height: 100px;
    background: linear-gradient(transparent, rgba(255, 105, 180, 0.5));
    animation: rain var(--duration) linear infinite;
    animation-delay: var(--delay);
    left: var(--left);
    opacity: 0.5;
  }

  @keyframes rain {
    0% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateY(100vh);
    }
  }
</style> 