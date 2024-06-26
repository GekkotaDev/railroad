type TwColorNames =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"

type TwColorNumbers =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "950"

export type TwBackgroundColor =
  | `bg-${TwColorNames}-${TwColorNumbers}`
  | "bg-black"
  | "bg-white"
  | "bg-transparent"
  | "bg-inherit"
  | "bg-current"

export type TwTextColor =
  | `text-${TwColorNames}-${TwColorNumbers}`
  | "text-black"
  | "text-white"
  | "text-transparent"
  | "text-inherit"
  | "text-current"
