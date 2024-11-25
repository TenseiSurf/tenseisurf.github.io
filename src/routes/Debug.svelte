<script lang="ts">
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    
    interface AssetStatus {
        name: string;
        status?: number;
        error?: string;
    }

    interface DebugInfo {
        base: string;
        pathname: string;
        href: string;
        assets: AssetStatus[];
    }
    
    let debug: DebugInfo = {
        base,
        pathname: '',
        href: '',
        assets: []
    };
    
    onMount(() => {
        debug.pathname = window.location.pathname;
        debug.href = window.location.href;
        
        // Check if assets exist
        ['reimu.png', 'Rain.wav'].forEach(async (asset) => {
            try {
                const response = await fetch(`${base}/${asset}`);
                debug.assets = [...debug.assets, {
                    name: asset,
                    status: response.status
                }];
            } catch (error) {
                debug.assets = [...debug.assets, {
                    name: asset,
                    error: error instanceof Error ? error.message : 'Unknown error'
                }];
            }
        });
    });
</script>

<div class="debug-panel">
    <h3>Debug Info:</h3>
    <pre>{JSON.stringify(debug, null, 2)}</pre>
</div>

<style>
    .debug-panel {
        position: fixed;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,0.8);
        color: lime;
        padding: 1rem;
        font-family: monospace;
        max-width: 100%;
        overflow: auto;
        z-index: 9999;
    }
</style> 