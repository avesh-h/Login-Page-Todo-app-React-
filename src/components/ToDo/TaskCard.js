import React from 'react'
import '../ToDo/TaskCard.css'

function TaskCard(props) {
    const delete_Task = (dataId) =>{
        props.onsendId(dataId)
        // console.log(data)
    }
    const my_card = props.onsendTask.map((val)=>{
        return(
            <div className="card" style={{width: "18rem"}} key = {val.taskId}>
            <div className="card-body">
                <h5 className="card-title">No: {val.taskId}</h5>
                <p className="card-text">Task: {val.addTask}</p>
                <a className="btn btn-danger" onClick={()=>delete_Task(val.taskId)}>Delete</a>
            </div>
        </div>
        )
    })
  return (
    <React.Fragment>
        {/* <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text"></p>
                <a href="/" className="btn btn-danger">Delete</a>
            </div>
        </div>  */}
        {my_card}
    </React.Fragment>
  )
}

export default TaskCard
