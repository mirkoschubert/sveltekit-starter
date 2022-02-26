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
  icon?: object
}