<script lang="ts">
  import type { NavItemData } from '$lib/types'
  import { NavItem, Options } from '$components/Nav'
  import Icon from 'svelte-awesome'
  import { home, phone, instagram, cog } from 'svelte-awesome/icons'

  export let active: string
  export let items: Array<NavItemData> = [
    { uri: '/', title: 'Home', icon: home, mode: 'text' },
    { uri: '/about', title: 'About', icon: phone, mode: 'text' }
  ]
  //let options: NavItemData = { uri: '', title: 'Options', icon: cog, mode: 'icon' }
  let isOpen: boolean = false
</script>

<nav class="nav">
  <div class="logo">
    <a href="/" title="Home">
      <Icon data={instagram} scale={2} />
    </a>
  </div>
  <div class="navigation">
    {#each items as item}
      <NavItem {active} data={item} />
    {/each}
  </div>
  <div class="options">
    <button
      class="btn-options{isOpen ? ' open' : ''}"
      on:click|stopPropagation={() => {
					isOpen = !isOpen
			}}
    >
      <Icon data={cog} scale={1.5} />
    </button>
    <Options bind:isOpen />
  </div>
</nav>

<style lang="sass">
  .nav
    background-color: var(--gray-2)
    width: 100%
    height: var(--nav-height)
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
          color: var(--yellow-3)
    
    .navigation
      flex: 1 0 auto
      display: flex
      flex-direction: row

    .options
      flex: 0 1 auto
      height: 4rem
      position: relative

      .btn-options
        background-color: transparent
        color: var(--yellow-2)
        border: none
        border-radius: .25rem
        height: 2rem
        padding: 0 8px
        margin: calc((var(--nav-height) - 2rem) / 2) 0
        transition: all .3s ease-in

        &:hover,
        &.open
          background-color: var(--gray-4)
          color: var(--yellow-3)

</style>