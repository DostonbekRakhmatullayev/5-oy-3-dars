import "./ticketsItem.scss"

function TicketsItem({text, raqam}) {
  return <li className="ticketsItem">
        <strong className="ticketsItem__text">{text}</strong>
        <p className="ticketsItem__raqam">{raqam}</p>
  </li>
}

export default TicketsItem;