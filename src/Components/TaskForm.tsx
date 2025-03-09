import { PlusCircle} from 'phosphor-react'
import styles from './TaskForm.module.css'
export function TaskForm() {
  return (
    <div className={styles.main}>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder='Añadir nueva tarea'/>
        <button className={styles.button} type="submit">
          Crear
          <PlusCircle size={18}/>
        </button>
      </form>
      <header className={styles.header}>
        <div>
          <strong>Tareas Creadas</strong>
          <span>0</span>
        </div>
        <div>
          <strong className={styles.concluded}>Concluídas</strong>
          <span>0</span>
        </div>
      </header>
    </div>
  )
}