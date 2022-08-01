import "./item.scss"

function Item({img, name}) {
  console.log(name);
  return <li className="item">
    <img className="item__img"  src={img}/>
  <strong className="item__strong">{name}</strong>
  </li>
}

export default Item;
