/// <reference types="@sveltejs/kit" />
declare module '$app/paths' {
	export const base: string;
}

// See https://kit.svelte.dev/docs/types#app
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
