import { Empty } from './Empty'
import styles from './TaskList.module.css'

export function TaskList() {
  return (
    <div className={styles.list}>
      <ul>
        <Empty />
      </ul>
    </div>
  )
}