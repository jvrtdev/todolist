"use client"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { api } from "../../api"

export const deleteTask = async (id: string) => {
  await api.delete(`/task/${id}`)
}

export default function useDeleteTask() {
  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      toast.success("Tarefa deletada com sucesso")
},
    onError: (error) => {
      toast.error("Erro ao deletar tarefa")
      console.log(error)
    },
  })
}
