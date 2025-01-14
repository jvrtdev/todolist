'use client'
import { TaskProps } from "@/domain/@types/task"
import { api } from "../../api"
import { useQuery }  from '@tanstack/react-query'

export const findAllTasks = async () => {
  const { data } = await api.get<TaskProps[]>('/task')
  return data
}

export default function useFindAllTasks() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: findAllTasks,
  
  })
}
