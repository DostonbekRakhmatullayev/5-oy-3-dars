import "./listitem.scss"

function Item({text, numbers}) {
  return <li className="list--item">
    <strong className="list--item__strong">{text}</strong>
    <p className="list--item__numbers">{numbers}</p>
  </li>
}

export default Item
