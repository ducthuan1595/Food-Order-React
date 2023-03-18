///////////////////////////////////////////
import { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import styled from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Card = (props) => {
  const ctx = useContext(CartContext);

  // total amount must pay
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  // check has item
  const hasItems = ctx.items.length > 0;

  const cartItemRemove = (id) => {
    ctx.removeItem(id)
  };

  const cartItemAdd = (item) => {
    ctx.addItem(item)
  };

  // list item added
  const cartItemAdded = (
    <ul className={styled["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemove.bind(null, item.id)}
          onAdd={cartItemAdd.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onCloseCart}>
      <div className={styled.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styled.actions}>
        {cartItemAdded}
        <button className={styled["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={styled.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Card;
