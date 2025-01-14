import { ModalRootProps } from "@/domain/@types/modal/modal-root"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

export function ModalRoot({ icon, children }: ModalRootProps) {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer">{icon}</DialogTrigger>
      {children}
    </Dialog>
  )
}
