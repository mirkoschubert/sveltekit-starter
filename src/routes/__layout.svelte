<script lang="ts">
  import '../global/sass/_layout.sass'
  import '../global/sass/main.sass'

  //export let key
	//let main
</script>

<div class="wrapper">
  <slot />
</div>

<style lang="sass" global>
	.wrapper
		overflow-y: auto
		-webkit-overflow-scrolling: touch
</style>