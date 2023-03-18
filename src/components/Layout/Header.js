/////////////////////////////
import HeaderCartButton from './HeaderCartButton';
import styled from "./Header.module.css";
import pathImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header className={styled.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styled["main-image"]}>
        <img src={pathImage} alt="food-table" />
      </div>
    </>
  );
};

export default Header;
