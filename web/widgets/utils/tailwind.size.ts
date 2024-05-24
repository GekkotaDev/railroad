export type TwInteger =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"

type SizeWhole =
  | TwInteger
  | "10"
  | "11"
  | "12"
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "44"
  | "48"
  | "52"
  | "56"
  | "60"
  | "64"
  | "72"
  | "80"
  | "96"

type SizeFractional =
  | "0.5"
  | "1.5"
  | "2.5"
  | "3.5"
  | "1/2"
  | "1/3"
  | "2/3"
  | "1/4"
  | "2/4"
  | "3/4"
  | "1/5"
  | "2/5"
  | "3/5"
  | "4/5"
  | "1/6"
  | "2/6"
  | "3/6"
  | "4/6"
  | "5/6"
  | "1/12"
  | "2/12"
  | "3/12"
  | "4/12"
  | "5/12"
  | "6/12"
  | "7/12"
  | "8/12"
  | "9/12"
  | "10/12"
  | "11/12"

type SizeOther = "px" | "auto" | "full" | "min" | "max" | "fit"
type HWOther =
  | "px"
  | "auto"
  | "full"
  | "screen"
  | "svh"
  | "lvh"
  | "dvh"
  | "min"
  | "max"
  | "fit"

export type TwSize = `size-${SizeFractional | SizeWhole | SizeOther}`

export type TwMeasurement =
  `${"" | "min-" | "max-"}${"h" | "w"}-${SizeFractional | SizeWhole | HWOther}`

export type TwHeight = `h-${SizeFractional | SizeWhole | HWOther}`
export type TwMinHeight = `min-h-${SizeFractional | SizeWhole | HWOther}`
export type TwMaxHeight = `max-h-${SizeFractional | SizeWhole | HWOther}`

export type TwWidth = `w-${SizeFractional | SizeWhole | HWOther}`
export type TwMinWidth = `min-w-${SizeFractional | SizeWhole | HWOther}`
export type TwMaxWidth = `max-w-${SizeFractional | SizeWhole | HWOther}`
