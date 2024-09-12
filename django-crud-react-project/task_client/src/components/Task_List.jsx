import { useEffect, useState } from "react"
import { get_All_Tasks } from "../api/tasks.api"
import { Task_Card } from './Task_Card'

export function Task_List() {

    const [tasks, setTasks] = useState([]);

  useEffect(() => {

    
    async function load_Tasks() {
       const result = await get_All_Tasks();
        setTasks(result.data);
    }
    load_Tasks();
  }, []);

  return <div className="grid grid-cols-3 gap-4">
    {tasks.map(task => (

        <Task_Card key={task.id} task={task}></Task_Card>
    
    ))}
  </div>;
  
}
