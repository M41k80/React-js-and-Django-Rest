import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { create_Task, delete_Task, update_Task, get_Task_by_id } from '../api/tasks.api.js'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function Task_Form_Page() {

    const { register, handleSubmit, formState: {
        errors
    },
     setValue
     } = useForm();
    const navigate = useNavigate();
    const params = useParams();
    


    const on_Submit = handleSubmit(async data => {
        if (params.id) {
            await update_Task(params.id, data)
            toast.success('Task Updated Successfully', {
                position: 'top-center',
                style: {
                    background: 'green',
                    color: '#fff',
                    padding: '10px',
                    borderRadius: '5px'
                }
            });
        } else {
            await create_Task(data);
            toast.success('Task Created Successfully', {
                position: 'top-center',
                style: {
                    background: '#674172',
                    color: '#fff',
                    padding: '10px',
                    borderRadius: '5px'
                }
            });
        }
        navigate('/tasks');
    });

    useEffect(() => {
       async function load_Task() {
        if (params.id) {
            const result = await get_Task_by_id(params.id);
            setValue('title', result.data.title);
            setValue('description', result.data.description);

        }
       }
       load_Task();
    }, []);

    return (
        <div className="max-w-xl mx-auto">

        <form onSubmit={ on_Submit }>
            <input type="text" placeholder="Title"
                { ...register("title", { required: true }) }
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-lime-400"
            />
            {errors.title && <span>Title is required</span>}
            <textarea placeholder="Description" rows="4"
                { ...register("description", { required: true })}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-cyan-500"
            ></textarea>
            {errors.description && <span>Description is required</span>}
            <button className="bg-indigo-500 p-3 rounded-xl block w-full mt-3">Create Task</button>
        </form>

        {params.id && ( 
            <button className="bg-red-500 p-3 rounded-xl block w-50 mt-3"
                onClick={async () => {
                    const accepted = window.confirm('Do you want to delete the task....Are you sure ?');
                    if (accepted) {
                        await delete_Task(params.id);
                        toast.success('Task Eliminated Successfully', {
                            position: 'top-center',
                            style: {
                                background: 'red',
                                color: '#fff',
                                padding: '10px',
                                borderRadius: '5px'
                        }
                    });
                        navigate('/tasks');
                    }
                }}
            >
            Delete
            </button>
            )}
        
        </div>
    );
}