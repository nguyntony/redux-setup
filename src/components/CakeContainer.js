import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/actions/CakeActions";

function CakeContainer({ numOfCakes, buyCake }) {
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={buyCake}>buy</button>
    </div>
  );
}

// these fns below attach the keys and value onto the props value and I have extracted them in the component above through destructuring
// this is all possible because of our export statement, we used the connect function
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
