export type ButtonType = 'default' | 'dark' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type NavItemMode = 'all' | 'icon' | 'text'

export interface Site {
  title: string,
  pages: Page[]
}

export interface Page {
  uri: string,
  title: string,
  icon?: object
}


export interface NavItemData {
  uri: string,
  title: string,
  icon?: object,
  mode?: NavItemMode
}
