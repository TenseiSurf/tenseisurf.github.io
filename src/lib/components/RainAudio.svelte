<script lang="ts">
  import { onMount } from 'svelte';

  let audio: HTMLAudioElement;

  onMount(() => {
    if (audio) {
      audio.volume = 0.3; // Set initial volume to 30%
      audio.play().catch(error => {
        console.log('Audio autoplay failed:', error);
      });
    }
  });
</script>

<audio
  bind:this={audio}
  src="/Rain.wav"
  loop
  preload="auto"
/>

<style>
  audio {
    display: none; /* Hide the audio element */
  }
</style> 