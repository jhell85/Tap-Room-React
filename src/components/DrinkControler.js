import React from 'react'
import NewDrinkForm from "./NewDrinkForm"
import DrinkList from "./DrinkList"

class DrinkControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterDrinkList: []
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }))
  };

  render(){
    let currentlyVisibleState = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewDrinkForm />
    } else {
      currentlyVisibleState = (
        <DrinkList drinkList={this.state.masterDrinkList} />
      )
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>Add Drink</button>
      </React.Fragment>
    )
  }
}
export default DrinkControl