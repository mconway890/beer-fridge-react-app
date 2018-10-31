function beersReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_BEER":
      return [...state, action.beer];

    case "REMOVE_BEER":
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}

export default beersReducer;
