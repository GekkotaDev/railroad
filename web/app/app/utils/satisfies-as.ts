export const SatisfiesAs = <Type, T extends Type = Type>(data: T) =>
  data satisfies Type as Type
