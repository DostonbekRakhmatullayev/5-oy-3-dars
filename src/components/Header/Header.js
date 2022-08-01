import "./header.scss"
import lopa from "../../assets/images/lopa.png"
import qun from "../../assets/images/qungroq.png"
import Jones from "../../assets/images/Jones__Ferdinand.png"

function Header() {
  return <header className="header">
    
     <div>
     <h1 className="header__title">Overview</h1>
     </div>
     <div className="header__box">
       <button className="btn--lopa">
         <img src={lopa} alt="" />
       </button>
       <button className="btn--qun">
         <img src={qun} alt="" />
       </button>
       <strong className="header__srtong">Jones Ferdinand</strong>
       <img src={Jones} alt=""  width={44} height={44}/>
      </div>

  </header>
}

export default Header