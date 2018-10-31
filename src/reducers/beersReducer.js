function beersReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case 'GET_BEERS':
      return action.beers;

    case "ADD_BEER":
      return [...state, action.beer];

    case "REMOVE_BEER":
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "UPVOTE_BEER":
      return state.map((beer) => {
        if (beer.id === action.beer.id) {
          return action.beer
        } else {
          return beer
        }
      });
      
    default:
      return state;
  }
}

export default beersReducer;
