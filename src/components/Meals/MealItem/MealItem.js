//////////////////////////////////////////
import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import styled from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const ctx = useContext(CartContext);

  const onAddAmount = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  // console.log(props.mealItem)
  return (
    <>
      <li className={styled.meal}>
        <div className={styled.items}>
          <h3>{props.name}</h3>
          <div className={styled.description}>{props.description}</div>
          <div className={styled.price}>{props.price}</div>
        </div>
        <div>
          <MealItemForm onAddAmount={onAddAmount} />
        </div>
      </li>
    </>
  );
};

export default MealItem;
