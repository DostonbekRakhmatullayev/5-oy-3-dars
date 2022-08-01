import "./tickets.scss"
import  TicketsItem from "./TicketsItem/TicketsItem"

function Tickets() {
  return <div className="tickets">
    <div  className="tickets__box">
      <div>
        <strong className="tickets__strong">Unresolved tickets</strong>
        <p className="tickets__text">Group:<span className="tickets__span">Support</span></p>
      </div>
      <button className="tickets__btn">View details</button>
    </div>

    <ul>
        <TicketsItem text="Waiting on Feature Request" raqam="4238"/>
        <TicketsItem text="Awaiting Customer Response" raqam="1005"/>
        <TicketsItem text="Awaiting Developer Fix" raqam="914"/>
        <TicketsItem text="Pending" raqam="281"/>   
    </ul>
  </div>
}

export default Tickets