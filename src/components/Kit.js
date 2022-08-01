import logo from "../assets/images/logo.png"
import "./kit.scss"

function Kit() {
  return <div className="kit__bod">
    <img className="logo__img" src={logo} alt="" />
  <h2 className="dashboard">Dashboard Kit</h2>
  </div>
}

export default Kit;
