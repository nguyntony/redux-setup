// import { GATHER, TRAVEL, TIPPED_WAGON } from "../actions/gameTypes";

const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200,
};

const gameReducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case "GATHER":
      return {
        ...state,
        supplies: (state.supplies += 15),
        days: (state.days += 1),
      };
    case "TRAVEL":
      let canTravel = action.payload * 20 > state.supplies ? false : true;
      if (!canTravel) {
        return { ...state };
      } else {
        return {
          ...state,
          supplies: state.supplies - action.payload * 20,
          distance: state.distance + action.payload * 10,
          days: (state.days += action.payload),
        };
      }
    case "TIPPED_WAGON":
      return {
        ...state,
        supplies: (state.supplies -= 30),
        days: (state.days += 1),
      };
    case "SELL":
      return {
        ...state,
        supplies: (state.supplies -= 20),
        cash: (state.cash += 5),
      };
    case "BUY":
      return {
        ...state,
        supplies: (state.supplies += 25),
        cash: (state.cash -= 15),
      };
    case "THEFT":
      return {
        ...state,
        cash: (state.cash /= 2),
      };
    default:
      return state;
  }
};

let wagon = gameReducer(undefined, {});
wagon = gameReducer(wagon, { type: "TRAVEL", payload: 30 });
console.log(wagon);
wagon = gameReducer(wagon, { type: "TRAVEL", payload: 3 });
console.log(wagon);
