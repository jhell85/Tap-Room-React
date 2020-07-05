import React from "react";
import Drink from "./Drink";
import PropTypes from "prop-types";


function DrinkList(props) {
  const sortedList = props.drinkList.sort((a,b)=>a.timeStamp.getTime()-b.timeStamp.getTime());
  return (
    <React.Fragment>
      {sortedList.map((drink) => 
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