type Reducer<State, Action> = (
  action: Action,
  mutation: (updater: (state: State) => void) => void,
) => void

/**
 * Redux-like declarative state mutation based on message passing.
 *
 * @param initial The initial state.
 * @param mutator Maps messages to respective mutations.
 * @returns Destructurable array of state and dispatcher.
 *
 * @example
 * const [state, dispatch] = useMutable(
 *   { count: 0 },
 *   (action: "increment" | "decrement" | "reset", mutate) =>
 *     match(action)
 *       .with("increment", () => mutate((state) => state.count++))
 *       .with("decrement", () => mutate((state) => state.count--))
 *       .with("reset", () => mutate((state) => (state.count = 0)))
 *       .exhaustive(),
 * )
 */
export const useMutable = <Actions, T extends object>(
  initial: T,
  mutator: Reducer<T, Actions>,
) => {
  const [state, update] = useImmer(initial)

  /**
   * Dispatch a message to the mutator.
   *
   * @param action Action to perform.
   * @returns `void`
   */
  const dispatcher = (action: Actions): void => void mutator(action, update)

  return [readonly(state), dispatcher] as const
}

/**
 * Extract the action types of the dispatcher method.
 *
 * @example
 * ActionsOf<typeof dispatch>
 */
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type ActionsOf<T extends (...args: any) => void> = Parameters<T>[0]
