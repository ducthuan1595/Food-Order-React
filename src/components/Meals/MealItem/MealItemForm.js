////////////////////////////////////////
import React, { useRef } from 'react';
import Input from "../../UI/Input";
import styled from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const inputRef = useRef();

  const handleSubmit = (e)=> {
    e.preventDefault();
    const inputAmount = inputRef.current.value;
    console.log(inputAmount)
    // invalid input amount
    if(inputAmount.trim().length === 0 || +inputAmount > 5 || +inputAmount < 1) {
      return;
    }
    // pass amount to Meal item
    props.onAddAmount(+inputAmount);
  }
  return (
    <form className={styled.form} onSubmit={handleSubmit}>
      <Input
        ref = {inputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: '1',
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
