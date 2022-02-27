<script lang="ts">
  import type { ButtonType, ButtonSize } from '$lib/types'
  import Icon from 'svelte-awesome'


  export let type: ButtonType = 'default'
  export let size: ButtonSize = 'md'
  export let title: string
  export let icon: object = undefined
  export let url: string = undefined

  const scale = { sm: 1, md: 1.5, lg: 2 }

  $: t = type ? ' btn-' + type : ''
  $: s = size ? ' btn-' + size : ''
</script>

{#if url !== undefined}
  <a class="btn{s}{t}" href={url} {title} target={url.startsWith('http') ? '_blank' : ''}>
    {#if icon !== undefined}
      <span class="icon">
        <Icon data={icon} scale={scale[size]} />
      </span>
    {/if}
    <span class="title">{title}</span>
    </a>
{:else}
  <button class="btn{s}{t}">
    {#if icon !== undefined}
      <span class="icon">
        <Icon data={icon} scale={scale[size]} />
      </span>
    {/if}
    <span class="title">{title}</span>
  </button>
{/if}


<style lang="sass">
  .btn
    align-items: center
    border-radius: .25rem
    cursor: pointer
    display: flex
    font-family: inherit
    font-size: 1rem
    text-decoration: none
    height: var(--btn-md-size)
    justify-content: flex-start
    min-width: var(--btn-md-size)
    padding: 0
    transition: all .3s ease-in

    .icon
      align-items: center
      display: flex
      height: 100%
      justify-content: center
      width: var(--btn-md-size)

      &+.title
        margin-left: 0

    .title
      margin: 0 .5rem

    &.btn-sm
      font-size: .875rem
      height: var(--btn-sm-size)

      .icon
        width: var(--btn-sm-size)

    &.btn-md
      height: var(--btn-md-size)

      .icon
        width: var(--btn-md-size)

    &.btn-lg
      font-size: 1.125rem
      height: var(--btn-lg-size)

      .icon
        width: var(--btn-lg-size)

    &.btn-default
      color: var(--gray-0)
      background-color: var(--yellow-0)
      border: none

      &:focus,
      &:hover
        color: var(--gray-1)
        background-color: var(--yellow-1)

    &.btn-dark
      color: var(--yellow-0)
      background-color: var(--gray-2)
      border: none

      &:focus,
      &:hover
        color: var(--yellow-1)
        background-color: var(--gray-4)

    &.btn-ghost
      color: var(--yellow-0)
      background-color: transparent
      border: 1px solid var(--yellow-0)

      &:focus,
      &:hover
        color: var(--yellow-1)
        background-color: var(--gray-2)
        border: 1px solid var(--yellow-1)

</style>