import "./schedules.scss"

function Schedules({text,son}) {
  return <li className="schedules__item">
    <strong className="schedules__text">{text}</strong>
    <p className="schedules__son">{son}</p>
  </li>
}

export default Schedules