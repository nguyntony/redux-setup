import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/actions/CakeActions";

export default function HookCakeContainer() {
  const cake = useSelector((state) => state.cake);
  // this is accessing the redux store and we are accessing this property and storing it in this variable
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Cakes - {cake.numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
}

// you need to import the action creation and useDispatch, call the useDispatch and assign it to a variable called dispatch and pass that into the onClick fn, note how you do need the () for buyCake bc it is a callback fn
