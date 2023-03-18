import React, { useState } from "react";

import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import "./App.css";

function App() {
  const [isCart, setIsCart] = useState(false);

  // handle show cart
  const handleShowCart = () => {
    setIsCart(true);
  };
  // handle hidden cart
  const handleHiddenCart = () => {
    setIsCart(false);
  };
  return (
    <div className="App">
      <CartProvider>
        {isCart && <Cart onCloseCart={handleHiddenCart} />}
        <Header onShowCart={handleShowCart} />
        <main>
          <MealsSummary />
          <AvailableMeals />
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
