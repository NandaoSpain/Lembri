import { Empty } from './Empty'
import { Task } from './Task'
import styles from './TaskList.module.css'

export function TaskList() {
  return (
    <div className={styles.list}>
      <ul>
        <Task />
        <Task />
      </ul>
    </div>
  )
}