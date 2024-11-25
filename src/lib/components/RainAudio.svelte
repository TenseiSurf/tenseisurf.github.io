<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

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
  src="{base}/Rain.wav"
  loop
  preload="auto"
></audio>

<style>
  audio {
    display: none;
  }
</style> 