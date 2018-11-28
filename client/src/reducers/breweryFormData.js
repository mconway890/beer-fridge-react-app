const initialState = {
  name: '',
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_BREWERY':
      return action.breweryFormData
    case 'RESET_FORM':
      return initialState;

    default:
      return state;
  }
}
