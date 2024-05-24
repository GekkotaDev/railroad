# Templates

## `layout`

Generates the standard boilerplate for a Nuxt layout.

## `provider`

Providers are a scope management system. These do not directly manage state within the component tree of your application, and are instead concerned with making sure that the data they handle is only available to the appropriate component subtree.

In other words, providers make sure data is only scoped to the right components.

## `route`

Generate a route within the application. This corresponds the given URL with a View.

## `worker`

Generate a web worker. The `Post` type should be used along with the `useWebWorker` composable to make working with web workers type safe.
