import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/actions/CakeActions";

function NewCakeContainer({ numOfCakes, buyCake }) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => buyCake(number)}>buy {number} cakes</button>
    </div>
  );
}

// these fns below attach the keys and value onto the props value and I have extracted them in the component above through destructuring
// this is all possible because of our export statement, we used the connect function
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
