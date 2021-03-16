import React from "react";
import { connect } from "react-redux";

function ItemContainer({ item }) {
  return (
    <div>
      <h2>Item - {item}</h2>
    </div>
  );
}

// here we are declaring a fn to connect our props to the componenet above, that is doable with the connect function and the export statemnet below, this allows us to now destructure the prop item note how that corresponds with the object that is being return from this function.
// another thing is that the first argument is the redux store state and the second is ownProps which allow you to access the tag's own props. In the app.js file we include 'cake' to the element and here we are checking it. if the cake prop exists, then we will access the state.cake.numOfCakes if not then we will access the ice creams
// this will make it so that this component can be used for both desserts.
// other note, 'cake' and 'iceCream' are the keys that exist in our rootReducer file and that is what we named it which is equal to another object with the prop numOfCakes or numOfIceCreams
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  return {
    item: itemState,
  };
};

export default connect(mapStateToProps)(ItemContainer);
