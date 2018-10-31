import uuid from "uuid";

function breweriesReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_BREWERY":
      return [...state, action.brewery];

    case "REMOVE_BREWERY":
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "ADD_BEER":
      let existingBrewery = state.filter(
        brewery => brewery.breweryName === action.beer.breweryName
      );
      if (existingBrewery.length > 0) {
        return state;
      } else {
        return [...state, { breweryName: action.beer.breweryName, id: uuid() }];
      }

    default:
      return state;
  }
}

export default breweriesReducer;
