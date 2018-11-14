const initialState = {
  name: '',
  style: '',
  brewery: '',
  abv: '',
  description: '',
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_BEER':
      return action.beerFormData
    case 'RESET_FORM':
      return initialState;

    default:
      return state;
  }
}
