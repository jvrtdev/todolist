import { TaskProps } from "@/domain/@types/task"
import useDeleteTask from "@/domain/services/api/task/delete/task-delete.api"
import useUpdateTask from "@/domain/services/api/task/update/task-update.api"
import { Modal } from "@/domain/shared/components/modal"
import {
  Card,
  CardContent,
} from "@/domain/shared/components/ui/card"
import { Checkbox } from "@/domain/shared/components/ui/checkbox"
import { Input } from "@/domain/shared/components/ui/input"
import { Label } from "@/domain/shared/components/ui/label"
import { EditIcon, TrashIcon } from "lucide-react"
import { useState } from "react"

export default function PresentationTask({
  id,
  title,
  status,
  createdAt,
  updatedAt,
}: TaskProps) {
  const { mutate: deleteMutate } = useDeleteTask()
  const { mutate: updateMutate } = useUpdateTask()
  const [newTitle, setNewTitle] = useState<string>("")


  return (
    <Card className="max-w-sm rounded-lg min-h-fit">
      <CardContent className="p-2 items-center justify-between flex space-x-1">
        <div className="inline-flex items-center space-x-1">
          <Checkbox id={id} checked={status == 'DONE'} onCheckedChange={(e) => updateMutate({ id, status: e ? 'DONE' : 'PENDING' })}/>
          <Label htmlFor={id} className={`cursor-pointer ${status == 'PENDING' ? '' : 'line-through'}`}>
            {title}
          </Label>
        </div>

        <div className="inline-flex items-center space-x-1">
          <Modal.Root
            icon={<EditIcon className="text-slate-500 cursor-pointer" />}
          >
            <Modal.Content title="Renomear tarefa">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="title" className="sr-only">
                  Título da tarefa
                </Label>
                <Input
                  id="title"
                  defaultValue={title}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </div>
              <Modal.Action label="Renomear" action={() => updateMutate({ id, title: newTitle })} />
            </Modal.Content>
          </Modal.Root>

          <Modal.Root
            icon={<TrashIcon className="text-destructive cursor-pointer" />}
          >
            <Modal.Content
              title="Tem certeza que quer excluir?"
              description="Ao excluir não será possível recuperar a tarefa"
            >
              <Modal.Action
                label="Excluir"
                variant="destructive"
                action={() => {
                  deleteMutate(id!)
                }}
              />
            </Modal.Content>
          </Modal.Root>
        </div>
      </CardContent>
    </Card>
  )
}
