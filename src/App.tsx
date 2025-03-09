import { Header } from "./Components/Header";
import { TaskForm } from "./Components/TaskForm";
import { TaskList } from "./Components/TaskList";

export function App() {

  return (
    <div>
      <Header />
      <TaskForm />
      <TaskList />
    </div>
  )
}
