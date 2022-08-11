import React,{useState ,useEffect} from 'react'
import '../Home/home.css'
import TaskCard from '../ToDo/TaskCard'
import TodoForm from '../ToDo/TodoForm'

function Home() {
    
    const localGet = () =>{
        const my_local = JSON.parse( localStorage.getItem('todo') )

        if(my_local){
            return (my_local);
        }
        else{
            return [];
        }
    }
    
    const[showData,setShowData] = useState(localGet)


    const gettingTask =(taskData) =>{
        setShowData((prevTask)=>{
            return [...prevTask,taskData]
        })
    }
    
    // useEffect(()=>{
    //     const localGet = localStorage.getItem('todo');
    //     if(localGet){
    //         setShowData(JSON.parse(localGet))
    //     }
    // },[])

    //Del-card Function
    const gettingTaskId = (currId) =>{
        // console.log(currId)
        setShowData(
            showData.filter((prevObj)=>(
                prevObj.taskId !== currId 
            ))
        )
    }

    useEffect(()=>{
        localStorage.setItem('todo',JSON.stringify(showData))
    },[showData])

  return (
    <React.Fragment>
        <div className='container'>
            <div className='home-card'>
                <h2>Welcome Back User</h2>
            </div>
            <TodoForm onTaskData= {gettingTask}/>
                <TaskCard 
                onsendTask = {showData}
                onsendId = {gettingTaskId}
                />
        </div>
    </React.Fragment>
  )
}

export default Home
