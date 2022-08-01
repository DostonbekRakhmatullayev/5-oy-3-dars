import './App.scss';
import Kit from "./components/Kit";
// import List  from "./components/List";
import Item from "./components/Item"
import Overview from "./assets/images/overview.svg"
import Tickets from "./assets/images/tickets.svg"
import Ideas from "./assets/images/ideas.svg"
import Agents from "./assets/images/agents.svg"
import Articles from "./assets/images/articles.svg"
import Settings from "./assets/images/settings.svg"
import Subscription from "./assets/images/subscription.svg"
import Header from "./components/Header/Header"
import Items from "./components/Item/Item"
import Trends from "./components/Trends/Trends"
import Ticket from "./components/Tickets/Tickets"
import Tasks from "./components/Tasks/Tasks"


function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='app__box'>
           <div className='app__panel'>
            <Kit/>
            <ul className='app__list'>
              <Item img={Overview} name="Overview" />
              <Item img={Tickets} name="Tickets" /> 
              <Item img={Ideas} name="Ideas" /> 
              <Item img={Agents} name="Agents" /> 
              <Item img={Articles} name="Articles" /> 
            </ul>
            <ul className='app__list-setting'>
              <Item img={Settings} name="Settings" /> 
              <Item img={Subscription} name="Subscription" /> 
            </ul>
           </div>
           <div className='app__beg'>
            <Header/>

            <ul className='app__box--list'>
              <Items text="Unresolved" numbers="60"/>
              <Items text="Overdue" numbers="16"/>
              <Items text="Open" numbers="43"/>
              <Items text="On hold" numbers="64"/>
            </ul>

            <div>
                <Trends/>
                <div className='app__task'>
                <Ticket/>
                <Tasks/>
                </div>
            </div>
           </div>    
        </div>     
      </div>
    </div>
  );
}

export default App;
