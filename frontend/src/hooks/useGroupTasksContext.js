import { GroupTasksContext } from '../context/GroupTaskContext'
import { useContext } from 'react'

export const useGroupTasksContext = () => {
  const context = useContext(GroupTasksContext)

  if (!context) {
    throw Error('useGroupTasksContext must be used inside an TasksContextProvider')
  }

  return context
}
