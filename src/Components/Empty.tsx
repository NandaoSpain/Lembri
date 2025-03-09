import empty from '../assets/Clipboard.svg'
import styles from './Empty.module.css'

export function Empty() {
  return (
    <div className={styles.empty}>
      <img className={styles.clipboard} src={empty} alt="" />
        <div className={styles.description}>
        <strong>Todavia no tienes tareas cadastradas</strong>
        <span>Crie tareas y organize sus cosas por hacer</span>
      </div>
    </div>
  )
}