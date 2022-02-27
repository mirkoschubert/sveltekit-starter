<script lang="ts">
  import Icon from 'svelte-awesome'
  //import { user, cog, moonO, sunO } from 'svelte-awesome/icons'

  export let isOpen: boolean = false

</script>

<div class="nav-options{isOpen ? ' open' : ''}">
  Options
</div>

<style lang="sass">
  .nav-options
    color: var(--yellow-0)
    background-color: var(--gray-3)
    position: absolute
    top: 3rem
    right: 0
    min-width: 6rem
    padding: 1rem
    display: none

    &.open
      display: block
</style>