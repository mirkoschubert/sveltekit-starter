<script lang="ts">
  import { Content , Hero, Section, notification } from 'sveltekit-components'

  $: notification.add({ title: 'About Page loaded!', type: 'success' })
</script>

<Content>
  <Hero image="https://picsum.photos/id/1033/1440/900">
    <h1>About</h1>
    <h2 class="subheading">About the Sveltekit Starter</h2>
  </Hero>
  <Section>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora debitis hic laboriosam, nobis cumque, accusantium sint voluptatem est fugiat odit animi impedit? Vitae, consectetur nihil quisquam eius minus et enim!</p>
  </Section>
</Content>