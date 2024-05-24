type Context = Map<string, { active: boolean }>

export const AlertDialogContext = createContext<Context>(
  "Alert Dialog context",
  new Map(),
)
