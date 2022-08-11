import React,{useState} from 'react'
import '../ToDo/TodoForm.css'

function TodoForm(props) {
    const [addTask,setTask]=useState('');
    const [taskId,setTaskId] = useState('');
    const [validCard,setValidcard] = useState(true)

    const TaskHandler = (e) =>{
        setTask(e.target.value)
    }
    const IdHandler = (e) =>{
        setTaskId(e.target.value)
    }
    const AddSubmitHandler = (e) =>{
        e.preventDefault();
        if(addTask.trim().length === 0 && taskId.trim().length === 0){
            setValidcard(false);
            return ;
        }
        const TaskData = {
            addTask : addTask,
            taskId : taskId

        }
        props.onTaskData(TaskData)
        setTask('')
        setTaskId('')
    }
  return (
    <React.Fragment>
      <form className='todo_form' onSubmit={AddSubmitHandler}>
        <label><strong>Add Tasks</strong></label><br />
        <input type='number'
         placeholder='Sr no.'
         value={taskId}
         onChange = {IdHandler}
        className = 'task_id'
         />

        <input type='text'
         onChange={TaskHandler}
         value={addTask}
         className='task_input'
         />

        <button className='add-btn' 
        type='submit'>Add</button>

      </form>
    </React.Fragment>
  )
}

export default TodoForm
