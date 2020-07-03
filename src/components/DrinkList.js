import React from "react";
import Drink from "./Drink";
import PropTypes from "prop-types";


function DrinkList(props) {
  return (
    <React.Fragment>
      {props.drinkList.map((drink, index) => 
      <Drink 
      name = {drink.name}
      brand = {drink.brand}
      alcoholContent = {drink.alcoholContent}
      price = {drink.price}
      drinksLeft = {drink.drinksLeft}
      key = {index} />
      )}
    </React.Fragment>
  )
}
DrinkList.propTypes ={
  drinkList: PropTypes.array
}
export default DrinkList;