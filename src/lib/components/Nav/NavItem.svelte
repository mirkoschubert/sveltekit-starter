<script lang="ts">
  import type { NavItemData } from '$lib/types'
  import Icon from 'svelte-awesome'

  export let key: string
  export let data: NavItemData

  console.log(key)
</script>

<a class="nav-item" href={data.uri} title={data.title} aria-label={data.title}>
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
    margin-right: 1rem
    text-decoration: none
    height: 2rem
    border-radius: .25rem
    color: var(--yellow-0)
    transition: all .3s ease-in

    .icon
      width: 2rem
      height: 2rem
      display: flex
      align-items: center
      justify-content: center
      display: none

    .title
      margin-left: .5rem
      margin-right: .5rem

    &:hover
      background-color: var(--gray-3)
      color: var(--yellow-1)

</style>