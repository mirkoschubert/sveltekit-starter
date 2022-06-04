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

export type NotificationPositionsType = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'

export interface NotificationOptionsType {
  duration?: number
  position?: NotificationPositionType
}

export interface NotificationType {
  title?: string
  description?: string
  type?: 'error' | 'success' | 'warning' | 'info'
  href?: string
  closable?: boolean
  [key: string]: unknown
}

