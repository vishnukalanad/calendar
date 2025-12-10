export type TasksModel = {
  id: string,
  date: string,
  title: string,
  description: string,
  type: 'call' | 'meeting' | 'event' | 'task' | 'other',
  status?: 'pending' | 'done'
  color?: string
  priority?: number
  assignee?: string
  project?: string
  tags?: string[]
  comments?: string[]
  dueDate?: string
  startDate?: string
  endDate?: string
  progress?: number
  attendees?: string[],
  location?: string
}
