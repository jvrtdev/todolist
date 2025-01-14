'use client'
import { TaskProps } from "@/domain/@types/task"
import { useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"
import { io } from "socket.io-client"

export default function useWebSocketTask() {
  const queryClient = useQueryClient()

  useEffect(() => {
    const socket = io(process.env.WS_URL ?? 'http://localhost:3001')

    socket.on("taskEvent", (payload) => {
      const { action, data } = payload

      queryClient.setQueryData(["tasks"], (oldData: TaskProps[]) => {
        switch (action) {
          case "created":
            return [...oldData!, data]
          case "updated":
            return oldData.map((task) =>
              task.id === data.id ? { ...task, ...data } : task,
            )
          case "deleted":
            return oldData.filter((task) => task.id !== data.id)
        }
      })
    })
    return () => {
      socket.disconnect()
    }
  }, [queryClient])
}
