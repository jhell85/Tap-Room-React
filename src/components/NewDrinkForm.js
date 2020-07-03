import React from "react";

function NewDrinkForm(props) {
  function handleNewDrinkFormSubmission(event){
    event.preventDefault();
    props.onNewDrinkCreation({name: event.target.name.value, brand: event.target.brand.value, alcoholContent: event.target.alcoholContent.value, price: event.target.price.value, drinksLeft: event.target.drinksLeft.value, id: v4()});
  }
return(
  <React.Fragment>
    <h3>NewDrinkForm</h3>
  </React.Fragment>
)
}
export default NewDrinkForm