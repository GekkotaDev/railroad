<script setup lang="ts">
import { useMachine, useSelector } from "@xstate/vue"
import { assign, setup } from "xstate"

const machine = setup({
  types: {
    context: {} as { count: number },
    events: {} as { type: "inc" } | { type: "dec" },
  },
  actions: {
    increment: assign({
      count: ({ context }) => context.count + 1,
    }),
    decrement: assign({
      count: ({ context }) => context.count - 1,
    }),
  },
}).createMachine({
  context: { count: 0 },
  on: {
    inc: { actions: "increment" },
    dec: { actions: "decrement" },
  },
})

const { actorRef, send } = useMachine(machine)
const count = useSelector(actorRef, (snapshot) => snapshot.context.count)
</script>

<template>
  <Story>
    <template #controls> </template>

    <Variant title="default">
      <button @click="() => send({ type: 'inc' })">+</button>
      <button @click="() => send({ type: 'dec' })">-</button>
      {{ count }}
    </Variant>
  </Story>
</template>
