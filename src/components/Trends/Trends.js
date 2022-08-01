import "./trends.scss"
import Schedules from "./Schedules/Schedules"

function Trends() {
  return <div className="trends">
     <div className="trends__box">
          <strong className="trends__strong">Today’s trends</strong>
          <p className="trends__time">as of 25 May 2019, 09:41 PM  </p>
      </div>
      <div className="trends__beg">
           <ul className="trends___week">
             <li>
               <button className="btn__today">Today</button>
             </li>
             <li>
               <button className="btn__yesterday">Yesterday</button>
             </li>
          </ul>
          <ul>
            <Schedules text="Resolved"  son="449"/>
            <Schedules text="Received"  son="426"/>
            <Schedules text="Average first response time" son="33m"/>
            <Schedules text="Average response time" son="3h 8m"/>
            <Schedules text="Resolution within SLA"  son="94%"/>
          </ul>
      </div>
  </div>
}

export default Trends