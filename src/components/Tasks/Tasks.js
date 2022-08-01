import "./tasks.scss"
import pulus from "../../assets/images/pulus.png"
import TaskItem from "./Task/TaskItem"

function Tasks() {
  return <div className="tasks">
      <div className="tasks__box">
        <div>
          <strong className="tasks__title">Tasks</strong>
          <p className="tasks__text">Today</p>
        </div>
        <button className="tasks__btn">View all</button>
      </div>

      <div className="tasks__creat">
          <strong className="tasks__strong">Create new task</strong>
          <img className="tasks__img" src={pulus} alt="" width={24} height={24}/>
      </div>

      <ul>
        <TaskItem text="Finish ticket update" btn="Urgent" />
        <TaskItem text="Create new ticket example" btn="New" />
        <TaskItem text="Update ticket report" btn="Default" />
      </ul>
  </div>
}

export default Tasks