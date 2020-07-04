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
  handleAddingNewDrinkToList = (newDrink) => {
    const newMasterDrinkList = this.state.masterDrinkList.concat(newDrink);
    this.setState({
      masterDrinkList: newMasterDrinkList,
      formVisibleOnPage: false  
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewDrinkForm onNewDrinkCreation={this.handleAddingNewDrinkToList} />
      buttonText = "Return to Drink List"
    } else {
      currentlyVisibleState = (<DrinkList drinkList={this.state.masterDrinkList} />)
      buttonText = "Add a Drink"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
    <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}
export default DrinkControl