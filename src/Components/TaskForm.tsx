import { PlusCircle, Trash } from "phosphor-react";
import styles from "./TaskForm.module.css";
import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Empty } from "./Empty";

export function TaskForm() {
  const [newTaskText, setNewTaskText] = useState("");
  const [tasks, setTasks] = useState<{ id: string; text: string; completed: boolean }[]
>([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    setIsFirstLoad(false);
  }, []);

  useEffect(() => {
    if(!isFirstLoad) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, isFirstLoad]);

  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleCompleted = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newTaskText.trim() === "") return;

    const newTask = { id: uuidv4(), text: newTaskText, completed: false };
    setTasks((prevTasks) => [newTask, ...prevTasks]);

    setNewTaskText("");
  };

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTaskText(e.target.value);
  }

  const completedTasks = tasks.filter((task) => task.completed).length;


  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          onChange={handleInput}
          className={styles.input}
          type="text"
          placeholder="Añadir nueva tarea"
          value={newTaskText}
          required
        />
        <button className={styles.button} type="submit">
          Crear
          <PlusCircle size={18} />
        </button>
      </form>
      <header className={styles.header}>
        <div>
          <strong>Tareas Creadas</strong>
          <span>{tasks.length}</span>
        </div>
        <div>
          <strong className={styles.concluded}>Concluídas</strong>
          <span>{completedTasks}</span>
        </div>
      </header>
      {tasks.length === 0 && <Empty />}
      {tasks.map((task) => (
        <div key={task.id} className={styles.task}>
          <label className={styles.description}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleCompleted(task.id)}
            />
            <span className={styles.checkmark}></span>
            <p
              className={
                task.completed ? styles.completedText : styles.taskText
              }
            >
              {task.text}
            </p>
          </label>
          <button
            onClick={() => handleDeleteTask(task.id)}
            className={styles.deleteButton}
          >
            <Trash size={18} />
          </button>
        </div>
      ))}
    </div>
  );
}
