<script lang="ts">
  import { Content, Hero, Section, Button, notification } from 'sveltekit-components'
  
  const notify = () => {
    console.log('clicked!')
    notification.add({
      title: 'Example Notification',
      description: 'Click here to read more about the project!',
      href: '/about',
      closable: true
    })
  }

</script>

<Content>
  <Hero image="https://picsum.photos/id/1033/1440/900">
    <h1>Sveltekit Starter</h1>
    <h2 class="subheading">An opinionated Starter Boilerplate with Sveltekit Components</h2>
  </Hero>
  <Section>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad corrupti eaque culpa repellendus. Libero, quas aspernatur repellendus necessitatibus ea magni illum nobis est et at rem ratione ipsam delectus similique.</p>
    <Button on:click={() => notify()}>Click me!</Button>
  </Section>
</Content>