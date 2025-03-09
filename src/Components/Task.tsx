import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.task}>
      <label className={styles.description}>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
        <p></p>
      </label>
      <Trash size={18}/>
    </div>
  )
}