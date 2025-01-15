import { useMutation } from "@tanstack/react-query"
import { api } from "../../api"
import { toast } from "sonner"
import { TaskProps } from "@/domain/@types/task"

export const createTask = async (data: Pick<TaskProps, 'title'>) => {
  await api.post('/task', data)
}

export default function useCreateTask() {
  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      toast.success("Tarefa criada com sucesso")
    },
    onError: (error) => {
      toast.error("Você já tem uma tarefa com esse nome")
      console.log(error)
    }
  })
}
