export type LeafProps = {
  action: () => void
  disabled?: boolean
  label: string
  shortcut?: string
}

export type LeafNode = {
  type: "leaf"
} & LeafProps

export type SubProps = {
  label: string
  children: (SubNode | LeafNode)[]
}

export type SubNode = {
  type: "submenu"
} & SubProps

export type MenuTrigger = {
  label: string
  children: (LeafNode | SubNode)[]
}
