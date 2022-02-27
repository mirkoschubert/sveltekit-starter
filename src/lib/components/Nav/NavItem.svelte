<script lang="ts">
  import type { NavItemData } from '$lib/types'
  import Icon from 'svelte-awesome'

  export let active: string
  export let data: NavItemData

  $: mode = data.mode ? data.mode : 'all'
</script>

<a class="nav-item mode-{mode}{active === data.uri ? ' active' : ''}" href={data.uri} title={data.title} aria-label={data.title}>
  {#if data.icon !== undefined}
    <span class="icon">
      <Icon data={data.icon} scale={1.5} />
    </span>
  {/if}
  <span class="title">{data.title}</span>
</a>

<style lang="sass">
  .nav-item
    display: flex
    align-items: center
    margin: 1rem 1rem 1rem 0
    text-decoration: none
    height: 2rem
    border-radius: .25rem
    color: var(--yellow-2)
    transition: all .3s ease-in

    &.mode-icon
      .title
        display: none

    &.mode-text
      .icon
        display: none

    &.mode-all
      .icon
        display: flex
      .title
        display: block
        margin-left: 0

    .icon
      width: 2rem
      height: 2rem
      display: flex
      align-items: center
      justify-content: center

    .title
      margin-left: .5rem
      margin-right: .5rem

    &:hover,
    &.active
      background-color: var(--gray-4)
      color: var(--yellow-3)

</style>