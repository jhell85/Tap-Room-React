import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";


function NewDrinkForm(props) {
  function handleNewDrinkFormSubmission(event){
    event.preventDefault();
    props.onNewDrinkCreation({
            name: event.target.name.value,
            brand: event.target.brand.value, 
            alcoholContent: event.target.alcoholContent.value,
            price: event.target.price.value,
            drinksLeft: 124,
            timeStamp: new Date(),
            id: v4()
          });
  }
  return(
    <React.Fragment>
      <h3>Add a Drink to the Tap List</h3>
      <form onSubmit={handleNewDrinkFormSubmission}>
        <input 
          type="text" 
          name="name"
          placeholder="Drink Name"
          required
        />
        <input 
          type="text" 
          name="brand"
          placeholder="Brewer's Name"
          required
        />
        <input 
          type="number" 
          name="alcoholContent"
          placeholder="alcohol Content"
          required
        />
        <input 
          type="number" 
          name="price"
          placeholder="price"
          required
        />
        <button type="submit">Add Drink</button>
      </form>
    </React.Fragment>
  );
}

NewDrinkForm.propTypes = {
  onNewDrinkCreation: PropTypes.func
};
export default NewDrinkForm