import { ModalContentProps } from "@/domain/@types/modal/modal-content"
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"


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
