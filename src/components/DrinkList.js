import React from "react";
import Drink from "./Drink";
import PropTypes from "prop-types";


function DrinkList(props) {
  return (
    <React.Fragment>
      {props.drinkList.map((drink) => 
      <Drink 
      drinkPouredClicked = {props.drinkPouredClicked}
      name = {drink.name}
      brand = {drink.brand}
      alcoholContent = {drink.alcoholContent}
      price = {drink.price}
      drinksLeft = {drink.drinksLeft}
      id = {drink.id} />
      )}
    </React.Fragment>
  )
}
DrinkList.propTypes ={
  drinkList: PropTypes.array,
  drinkPouredClicked: PropTypes.func

}
export default DrinkList;