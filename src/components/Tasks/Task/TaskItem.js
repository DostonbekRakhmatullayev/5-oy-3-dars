import "./taskItem.scss"

function TaskItem({text, btn}) {
  return <li className="taskItem">
   <div className="taskItem__box">
    <input className="taskItem__input" type="checkbox" name="" id="" />
     <strong className="taskItem__text">{text}</strong>
   </div>
    <p className="taskItem__btn">{btn}</p>
  </li>
}

export default TaskItem