import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/actions/iceCreamAction";
import { buyCake } from "../redux/actions/CakeActions";

function ItemContainer({ item, buyItem }) {
  return (
    <div>
      <h2>Item - {item}</h2>
      <button onClick={buyItem}>Buy Items</button>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

// note that the functions above demonstrate the second argument that can be passed to each function is ownProps which will allow the function to retrieve its own props when called such as in App.js and one of the given the cake prop.
// now with the connect function there will be times where you need to connect the action creator to the component but you won't need to connect the state, in that scenario just put null as the first argument for the connect function

// export default connect(null, mapDispatchToProps)(ItemContainer);
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
