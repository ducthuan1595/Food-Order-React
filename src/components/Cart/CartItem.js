////////////////////////////////////////////////
import styled from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price}`
  console.log('cart item', props)
  return (
    <li className={styled['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={styled.summary}>
          <span className={styled.price}>{price}</span>
          <span className={styled.amount}>x {props.amount}</span>
        </div>
      </div>
        <div className={styled.actions}>
          <button onClick={props.onRemove} >-</button>
          <button onClick={props.onAdd} >+</button>
        </div>
    </li>
  )
}

export default CartItem;