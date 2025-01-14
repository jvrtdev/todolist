export type ModalActionProps = {
  label: string
  action?: () => void
  variant?: 'default' | 'destructive' | 'outline' | 'secondary'
}
