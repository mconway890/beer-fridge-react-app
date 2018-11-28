function breweriesReducer(state = [], action) {
  // action object is exact hash being passed from dispatch
  let index;
  let brewery;

  switch (action.type) {
    // case returns new store
    case 'GET_BREWERIES':
      return action.brewerys;

    case "ADD_BREWERY":
      return [...state, action.brewery];

    case "REMOVE_BREWERY":
      return state.filter(brewery=> brewery.id !== action.breweryId);

    case "UPVOTE_BREWERY":
      index = state.findIndex(brewery=> brewery.id === action.breweryId);
      brewery= state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, brewery, { votes: brewery.votes += 1 }),
        ...state.slice(index + 1)
      ];

    case 'DOWNVOTE_BREWERY':
        index = state.findIndex(brewery=> brewery.id === action.breweryId);
        brewery= state[index];
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
