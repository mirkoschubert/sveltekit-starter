import { browser } from '$app/env'
import { writable } from 'svelte/store'

type theme = 'dark' | 'light'

type Settings = {
  theme?: theme | string
  dedupe?: boolean
  preferWebM?: boolean
}

let list: Settings = {
  theme: 'dark',
  dedupe: true,
  preferWebM: false
}

export const settings = () => {
  if (browser) {
    list = {
      theme: localStorage.getItem('theme') as theme,
      dedupe: JSON.parse(localStorage.getItem('filterAutoPlay')) || true,
      preferWebM: JSON.parse(localStorage.getItem('preferWebM'))
    }
  }
  if (!list.theme.match(/dark|midnight|dim|ytm/)) {
    list = { ...list, theme: 'dark' }
    setTheme('dark')
  }
  const { subscribe, set } = writable<Settings>(list)

  return {
    subscribe,
    set: (settings: Settings) => {
      const { theme, dedupe, preferWebM } = settings

      set({ theme: setTheme(theme), dedupe, preferWebM })
    }
  }
}

const setTheme = (theme: string) => {
  if (!browser) return

  const current = document.querySelector('html').classList.item(0)
  document.querySelector('html').classList.replace(current, theme)
  
  localStorage.setItem('theme', theme)

  return theme
}