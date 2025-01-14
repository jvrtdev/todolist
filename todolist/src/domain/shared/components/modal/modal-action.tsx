import { ModalActionProps } from "@/domain/@types/modal/modal-action"
import { Button } from "../ui/button"
import {  DialogFooter } from "../ui/dialog"

export function ModalAction({ action, variant, label }: ModalActionProps) {
  return (
    <DialogFooter>
      <Button type="submit" variant={variant} onClick={action}  >
        {label}
      </Button>
    </DialogFooter>
  )
}
