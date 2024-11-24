<script lang="ts">
  import { onMount } from 'svelte';

  let audio: HTMLAudioElement;

  onMount(() => {
    if (audio) {
      audio.volume = 0.3;
      audio.play().catch(error => {
        console.log('Audio autoplay failed:', error);
      });
    }
  });
</script>

<audio
  bind:this={audio}
  src="Rain.wav"
  loop
  preload="auto"
></audio>

<style>
  audio {
    display: none;
  }
</style> 