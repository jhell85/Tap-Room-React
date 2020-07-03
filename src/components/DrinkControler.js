import React from 'react'
import NewDrinkForm from "./NewDrinkForm"
import DrinkList from "./DrinkList"

class DrinkControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
    }
  }

  render(){
    let currentlyVisibleState = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewDrinkForm />
    } else {
      currentlyVisibleState = (
        <DrinkList />
      )
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}
export default DrinkControl