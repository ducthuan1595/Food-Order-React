/////////////////////////////////////////
import { useContext, useEffect, useState } from 'react';

import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import styled from './HeaderCartButton.module.css';

const HeaderCartButton = (props) =>{
  const [animationBtnCart, setAnimationBtnCart] = useState(false);
  const ctx = useContext(CartContext);
  // console.log(ctx.items)
  const numOfCartItems = ctx.items.reduce((cur, item)=> {
    return cur + item.amount;
  }, 0)

  const {items} = ctx;

  // add animation btn cart
  const btnCart = `${styled.button} ${animationBtnCart ? styled.bump : ''}`;

  useEffect(()=> {
    if(items.length === 0) {
      return;
    }
    setAnimationBtnCart(true);

    const timer = setTimeout(()=> {
      setAnimationBtnCart(false);
    }, 300)

    return ()=> {
      clearTimeout(timer);
    }
  }, [items])

  return (
    <>
      <button className={btnCart} onClick={props.onClick}>
        <div className={styled.icon}>
        <CartIcon />
        </div>
        <span>Your Cart</span>
        <span className={styled.badge}>{numOfCartItems}</span>
      </button>
    </>
  )
}

export default HeaderCartButton;