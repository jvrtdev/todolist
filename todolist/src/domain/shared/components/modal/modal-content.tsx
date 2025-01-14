import { ModalContentProps } from "@/domain/@types/modal/modal-content"
import { Button } from "../ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export function ModalContent({
  title,
  description,
  children,
}: ModalContentProps) {
  return (
    <DialogContent className="sm:max-w-[425px] bg-card-foreground">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      {children}
    </DialogContent>
  )
}
