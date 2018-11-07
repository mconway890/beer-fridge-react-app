import uuid from "uuid";

function breweriesReducer(state = [], action) {
  let index;
  let brewery;

  switch (action.type) {
    case "GET_BREWERIES":
      return action.breweries;

    case "ADD_BREWERY":
      return [...state, action.brewery];

    case "REMOVE_BREWERY":
      return state.filter(brewery => brewery.id !== action.breweryId);

    case "ADD_BEER":
      let existingBrewery = state.filter(
        brewery => brewery.breweryName === action.beer.breweryName
      );
      if (existingBrewery.length > 0){
        return state;
      } else {
        return [...state, { breweryName: action.beer.breweryName, id: uuid() }];
      }

    case "UPVOTE_BREWERY":
    index = state.findIndex(brewery => brewery.id === action.breweryId);
      brewery = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, brewery, { votes: brewery.votes += 1 }),
        ...state.slice(index + 1)
      ];

    case 'DOWNVOTE_BREWERY':
        index = state.findIndex(brewery => brewery.id === action.breweryId);
        brewery = state[index];
        if (brewery.votes > 0) {
          return [
            ...state.slice(0, index),
            Object.assign({}, brewery, { votes: brewery.votes -= 1 }),
            ...state.slice(index + 1)
          ];
        }
        break;

    default:
      return state;
  }
}

export default breweriesReducer;
