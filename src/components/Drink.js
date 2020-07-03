import React from "react";
import PropTypes from "prop-types";

function Drink(props){
  return(
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.brand}</p>
      <p>{props.alcoholContent}</p>
      <p>{props.price}</p>
      <p>{props.drinksLeft}</p>
    </React.Fragment>
  );
}

Drink.PropTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  drinksLeft: PropTypes.number.isRequired
};
export default Drink;