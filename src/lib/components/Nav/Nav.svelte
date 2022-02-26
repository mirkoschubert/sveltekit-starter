<script lang="ts">
  import type { NavItemData } from '$lib/types'
  import Icon from 'svelte-awesome'
  import { home, phone, instagram } from 'svelte-awesome/icons'
  import { NavItem } from '$components/Nav'
  export let key: string
  export let items: Array<NavItemData> = [
    { uri: '/', title: 'Home', icon: home },
    { uri: '/about/', title: 'About', icon: phone }
  ]
</script>

<nav class="nav">
  <div class="logo">
    <a href="/" title="Home">
      <Icon data={instagram} scale={2} />
    </a>
  </div>
  <div class="navigation">
    {#each items as item}
      <NavItem {key} data={item} />
    {/each}
  </div>
  <div class="options">

  </div>
</nav>

<style lang="sass">
  .nav
    background-color: var(--gray-1)
    width: 100%
    height: 4rem
    padding: 0 2rem
    display: flex
    flex-direction: row
    align-items: center

    .logo
      height: 100%
      margin-right: 2rem

      a
        width: 100%
        height: 100%
        display: flex
        align-items: center
        justify-content: center
        color: var(--yellow-2)
        transition: all .3s ease-in

        &:hover
          background-color: var(--gray-2)
          color: var(--yellow-3)
    
    .navigation
      flex: 1 0 auto
      display: flex
      flex-direction: row

    .options
      flex: 0 1 auto
      min-width: 4rem
</style>