import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/actions/iceCreamAction";

export default function IceCreamContainer() {
  const iceCream = useSelector((state) => state.iceCream);
  const dispatch = useDispatch();
  const buyIceCreamHandler = () => {
    dispatch(buyIceCream());
  };
  return (
    <div>
      <h2>Ice Cream Bar - {iceCream.numOfIceCreams}</h2>
      <p>
        This component (ice cream bar) is like a fridge that holds all of the
        ice cream flavors and how many of each.
      </p>
      <button onClick={buyIceCreamHandler}>buy ice cream</button>
    </div>
  );
}
