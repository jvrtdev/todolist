import { TaskProps } from "@/domain/@types/task"
import { api } from "../../api"
import { toast } from "sonner"
import { useMutation, useQueryClient } from "@tanstack/react-query"


export const updateTask = async (data: Partial<TaskProps>) => {
  await api.put<TaskProps>('/task', data)
}

export default function useUpdateTask() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      toast.success("Tarefa atualizada com sucesso")
      //queryClient.invalidateQueries({ queryKey: ["tasks"] })
    },
    onError: (error) => {
      toast.error("Ops! Erro ao atualizar a tarefa")
      console.log(error)
    }
  })
}
