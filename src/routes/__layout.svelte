<script lang="ts">
  import { ThemeProvider, NotificationProvider, Header, HeaderLeft, HeaderLogo, HeaderNav, HeaderNavItem } from 'sveltekit-components'
  import { HomeIcon } from 'svelte-feather-icons'
  import 'sveltekit-components/sass/main.sass'
</script>

<ThemeProvider fromSystem />
<NotificationProvider duration={3000} position="top-right" />
<Header isSticky>
  <HeaderLeft>
    <HeaderLogo>
      <HomeIcon size="32" />
    </HeaderLogo>
    <HeaderNav>
      <HeaderNavItem href="/" title="Home" />
      <HeaderNavItem href="/about" title="About" />
    </HeaderNav>
  </HeaderLeft>
</Header>

<slot />
