export type TaskProps = {
  id?: string
  title?: string
  status?: 'PENDING' | 'DONE'
  createdAt?: Date
  updatedAt?: Date
}
