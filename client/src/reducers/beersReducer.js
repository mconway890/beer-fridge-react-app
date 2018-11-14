function beersReducer(state = [], action) {
  let index;
  let beer;

  switch (action.type) {
    case 'GET_BEERS':
      return action.beers;

    case "ADD_BEER":
      return [...state, action.beer];

    case "REMOVE_BEER":
      return state.filter(beer => beer.id !== action.beerId);

    case "UPVOTE_BEER":
      return state.map(beer => {
        if(beer.id === action.beer.id) {
          return action.beer
        } else{
          return beer
        }
      })

    case 'DOWNVOTE_BEER':
        index = state.findIndex(beer => beer.id === action.beerId);
        beer = state[index];
        if (beer.votes > 0) {
          return [
            ...state.slice(0, index),
            Object.assign({}, beer, { votes: beer.votes -= 1 }),
            ...state.slice(index + 1)
          ];
        }
        break;

    default:
      return state;
  }
}

export default beersReducer;
