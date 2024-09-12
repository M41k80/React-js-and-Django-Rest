import axios from 'axios'

const api_Task = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const get_All_Tasks = () => {
    return api_Task.get('/');
}

export const get_Task_by_id = (id) => {
    return api_Task.get('/' + id + '/');
}

export const create_Task = (task) => {
    return api_Task.post('/', task);
}

export const delete_Task = (id) => {
   return api_Task.delete('/' + id + '/');
}

export const update_Task = (id, task) => {
    return api_Task.put('/' + id + '/', task);
}