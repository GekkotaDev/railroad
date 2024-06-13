function gac {
  param (
    [string[]]$Files
  )

  git add $Files
  git cz
}
