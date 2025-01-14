export type TaskProps = {
  id?: string
  title?: string
  description?: string
  status?: 'PENDING' | 'DONE'
  priority?: number
  createdAt?: Date
  updatedAt?: Date
}
