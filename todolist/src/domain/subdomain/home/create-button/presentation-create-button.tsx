'use client'
import useCreateTask from "@/domain/services/api/task/create/task-create.api"
import { Modal } from "@/domain/shared/components/modal"
import { Input } from "@/domain/shared/components/ui/input"
import { Label } from "@/domain/shared/components/ui/label"
import { PlusSquareIcon } from "lucide-react"
import  { useState } from "react"
export default function CreateTaskButton() {
  const { mutate } = useCreateTask()
  const [title, setTitle] = useState<string>('')

  return (
    <Modal.Root icon={<PlusSquareIcon />}>
      <Modal.Content title="Criar tarefa">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="title" className="sr-only">
              Tarefa
            </Label>
            <Input
              id="title"
              placeholder="Título da tarefa"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <Modal.Action label="Criar tarefa" variant="default" action={() => mutate({ title })} />
      </Modal.Content>
    </Modal.Root>
  )
}
