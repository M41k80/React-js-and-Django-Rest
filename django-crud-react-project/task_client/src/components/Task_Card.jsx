import { useNavigate } from 'react-router-dom'

export function Task_Card({ task }) {

  const navigate = useNavigate()

  return (
    <div className="bg-zinc-700 p-4 hover:bg-zinc-500 hover:cursor-pointer"
    
    onClick={() =>  {
      navigate('/tasks/' + task.id)
    }}
    >
    <h1 className="font-bold uppercase text-lime-400">{ task.title }</h1>
    <p className="text-cyan-500">{ task.description }</p>
    </div>
  );
}
 