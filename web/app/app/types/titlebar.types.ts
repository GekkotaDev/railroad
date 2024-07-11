export type TitlebarLeafProps = {
  action: () => void
  disabled?: boolean
  label: string
  shortcut?: string
}

export type TitlebarLeaf = {
  type: "leaf"
} & TitlebarLeafProps

export type TitlebarSubProps = {
  label: string
  children: (TitlebarSubmenu | TitlebarLeaf)[]
}

export type TitlebarSubmenu = {
  type: "submenu"
} & TitlebarSubProps

export type TitlebarMenuTrigger = {
  label: string
  children: (TitlebarLeaf | TitlebarSubmenu)[]
}
