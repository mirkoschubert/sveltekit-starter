<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'
	export const load: Load = async ({ url }) => {
    return {
      props: {
        key: url.pathname
			},
			stuff: { page: url.pathname }
		};
	};
</script>

<script lang="ts">
  //import { browser } from '$app/env'
  import Nav from '$components/Nav'
  import '@fontsource/source-sans-pro/400.css'
  import '@fontsource/source-sans-pro/600.css'
  import '../global/sass/_layout.sass'
  import '../global/sass/main.sass'

  export let key: string

  $: console.log('URI:', key)
</script>

<div class="wrapper">
  <Nav active={key} />
  <div class="content">
    <slot />
  </div>
</div>

<style lang="sass" global>
  .wrapper
    overflow-y: auto
    -webkit-overflow-scrolling: touch
    .content
      margin: 2rem
</style>