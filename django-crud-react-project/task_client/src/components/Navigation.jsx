import { Link } from "react-router-dom"

export function Navigation() {
    return (
        <div className="flex justify-between py-4 text-indigo-500">
            <Link to="/tasks">   
            <h1 className="font-bold text-4xl mb-5">
                Task Application by M41k80
            </h1>
            </Link>  
            <button className="bg-indigo-500 px-3 py-2 rounded-lg text-white">
            <Link to="/create">Create a New task</Link>
            </button>  
            
        </div>
    )
}