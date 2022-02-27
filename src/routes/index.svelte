<script lang="ts">
  import { Button } from '$components/Button'
  import { github, externalLinkSquare } from 'svelte-awesome/icons'
</script>

<h1>Welcome to SvelteKit Starter!</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="buttons">
  <Button  url="/about" title="Website" icon={externalLinkSquare} />
  <Button  url="https://github.com/mirkoschubert/sveltekit-starter" title="Github" icon={github} type="ghost" />
</div>

<style lang="sass">
  .buttons
    display: flex

    :global(.btn):first-child
      margin-right: 1rem
</style>