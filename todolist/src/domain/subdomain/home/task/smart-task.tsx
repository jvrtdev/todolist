'use client'
import { TaskProps } from "@/domain/@types/task"
import useFindAllTasks from "@/domain/services/api/task/find-all/task-find-all.api"
import { Skeleton } from "@/domain/shared/components/ui/skeleton"
import PresentationTask from "./presentation-task"
import useWebSocketTask from "@/hooks/use-websocket-task"

export default function SmartTask() {

  const { data, isLoading } = useFindAllTasks()
  useWebSocketTask()

  return (
    <>
      {isLoading ? (
        <>
        <Skeleton className="h-10 max-w-sm bg-muted" />
        <Skeleton className="h-10 max-w-sm bg-muted" />
        <Skeleton className="h-10 max-w-sm bg-muted" />
        </>

      ) : (
        data?.map((task: TaskProps) => (
          <PresentationTask key={task.id} {...task}  />
        ))
      )}

      {data?.length === 0 && (<p>Ops! Parece que você não tem nenhuma tarefa</p>)}
    </>
  )
}
