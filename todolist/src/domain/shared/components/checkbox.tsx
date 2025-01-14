import { Checkbox } from "./ui/checkbox"

interface CheckboxProps {
  isDone: boolean
}

export function CheckboxP({ isDone }: CheckboxProps) {

  return(
    <Checkbox checked={isDone} />
  )
}
