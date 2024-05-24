const macro = (template: TemplateStringsArray) => {
  const classnames = template as unknown as string
  const output = []

  for (const classname of classnames.split("\n")) {
    const trimmed = classname.trim()

    if (trimmed.startsWith("??") || trimmed.startsWith("//")) continue

    output.push(trimmed)
  }

  return output.join(" ")
}

export default macro
